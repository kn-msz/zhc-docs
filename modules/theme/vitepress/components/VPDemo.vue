<script setup lang="ts">
import { computed, getCurrentInstance, ref, toRef } from 'vue'
import { isClient, useClipboard, useToggle } from '@vueuse/core'
import { EVENT_CODE } from 'element-plus'
import { VTIconCaretTop, VTFileCopyLine, VTCodeLine } from '@modules/theme'
import { useSourceCode } from '../composables/source-code'
import { usePlayground } from '../composables/use-playground'
import SourceCode from './VPSourceCode.vue'

const props = defineProps<{
    source: string
    path: string
    rawSource: string
    description: string
}>()

const vm = getCurrentInstance()!

const { copy, isSupported } = useClipboard({
    source: decodeURIComponent(props.rawSource),
    read: false
})

const [sourceVisible, toggleSourceVisible] = useToggle()

const demoSourceUrl = useSourceCode(toRef(props, 'path'))

const sourceCodeRef = ref<HTMLButtonElement>()

const locale = computed(() => demoBlockLocale)
const decodedDescription = computed(() => decodeURIComponent(props.description))

const onPlaygroundClick = () => {
    const { link } = usePlayground(props.rawSource)
    if (!isClient) return
    window.open(link)
}

const onSourceVisibleKeydown = (e: KeyboardEvent) => {
    if (
        [EVENT_CODE.enter, EVENT_CODE.numpadEnter, EVENT_CODE.space].includes(
            e.code
        )
    ) {
        e.preventDefault()
        toggleSourceVisible(false)
        sourceCodeRef.value?.focus()
    }
}

const copyCode = async () => {
    const { $message } = vm.appContext.config.globalProperties
    if (!isSupported) {
        $message.error(locale.value['copy-error'])
    }
    try {
        await copy()
        $message.success('已复制！')
    } catch (e: any) {
        $message.error('此浏览器不支持自动复制！')
    }
}
</script>

<template>
    <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
    <div text="sm" m="y-4" v-html="decodedDescription" />

        <div class="example">
        <div class="example-showcase">
            <slot name="source" />
        </div>

        <ElDivider class="m-0" />

        <div class="op-btns">
            <ElTooltip
                content="复制代码"
                :show-arrow="false"
                :trigger="['hover', 'focus']"
                :trigger-keys="[]"
            >
                <ElIcon
                    :size="16"
                    aria-label="复制代码"
                    class="op-btn"
                    tabindex="0"
                    role="button"
                    @click="copyCode"
                    @keydown.prevent.enter="copyCode"
                    @keydown.prevent.space="copyCode"
                >
                    <VTFileCopyLine />
                </ElIcon>
            </ElTooltip>
            <ElTooltip
                content="查看源代码"
                :show-arrow="false"
                :trigger="['hover', 'focus']"
                :trigger-keys="[]"
            >
                <button
                    ref="sourceCodeRef"
                    :aria-label="
                        sourceVisible ? '隐藏源代码' : '查看源代码'
                    "
                    class="reset-btn el-icon op-btn"
                    @click="toggleSourceVisible()"
                >
                    <ElIcon :size="16">
                        <VTCodeLine />
                    </ElIcon>
                </button>
            </ElTooltip>
        </div>

        <ElCollapseTransition>
            <SourceCode :visible="sourceVisible" :source="source" />
        </ElCollapseTransition>

        <Transition name="el-fade-in-linear">
            <div
                v-show="sourceVisible"
                class="example-float-control"
                tabindex="0"
                role="button"
                @click="toggleSourceVisible(false)"
                @keydown="onSourceVisibleKeydown"
            >
                <ElIcon :size="16">
                    <VTIconCaretTop />
                </ElIcon>
                <span>隐藏源代码</span>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.example {
    border: 1px solid var(--border-color);
    border-radius: var(--el-border-radius-base);
}

.example-showcase {
    padding: 1.5rem;
    margin: 0.5px;
    background-color: var(--bg-color);
}

.example .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;

    .el-icon {
        &:hover {
            color: var(--text-color);
        }
    }

    .op-btn {
        margin: 0 0.5rem;
        cursor: pointer;
        color: var(--text-color-lighter);
        transition: 0.2s;

        &.github a {
            transition: 0.2s;
            color: var(--text-color-lighter);

            &:hover {
                color: var(--text-color);
            }
        }
    }
}

.example-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--bg-color, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
}

.example-float-control span {
    font-size: 14px;
    margin-left: 10px;
}

.example-float-control:hover {
    color: var(--el-color-primary);
}
</style>
