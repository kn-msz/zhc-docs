<script lang="ts" setup>

import { tintColor, colorAdjuster } from '@/utils/color';

const original = {
    primary: '#3f8cfe',
    success: '#67C23A',
    warning: '#E6A23C',
    danger: '#F56C6C',
    info: '#909399',
    white: '#FFFFFF',
    black: '#000000',
    textPrimary: '#303133',
    textRegular: '#606266',
    textSecondary: '#909399',
    textPlaceholder: '#C0C4CC',
    borderBase: '#DCDFE6',
    borderLight: '#E4E7ED',
    borderLighter: '#EBEEF5',
    borderExtraLight: '#F2F6FC'
}

</script>

# 颜色

## 主色
产品主要品牌颜色是鲜艳、友好的蓝色。

<div class="demo-color-box" :style="{ background: original.primary }">Brand Color
    <div class="value">{{ original.primary }}</div>
    <div class="bg-color-sub" :style="{ background: tintColor(original.primary, 0.9) }">
    <div
        class="bg-blue-sub-item"
        v-for="(item, key) in Array(8)"
        :key="key"
        :style="{ background: tintColor(original.primary, (key + 1) / 10) }"
    ></div>
    </div>
</div>

## 辅助色

除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

<div class="demo-color-box-group">
    <div class="demo-color-box" :style="{ background: original.success }">
        Success
        <div class="value">{{ original.success }}</div>
        <div
            class="bg-color-sub"
        >
            <div
                class="bg-success-sub-item"
                v-for="(item, key) in Array(2)"
                :key="key"
                :style="{ background: tintColor(original.success, (key + 8) / 10) }"
            >
            </div>
        </div>
    </div>
    <div class="demo-color-box"
         :style="{ background: original.warning }"
    >Warning
        <div class="value">{{ original.warning }}</div>
        <div
            class="bg-color-sub"
        >
            <div
                class="bg-success-sub-item"
                v-for="(item, key) in Array(2)"
                :key="key"
                :style="{ background: tintColor(original.warning, (key + 8) / 10) }"
            >
            </div>
        </div>
    </div>
    <div class="demo-color-box"
         :style="{ background: original.danger }"
    >Danger
        <div class="value">{{ original.danger }}</div>
        <div
            class="bg-color-sub"
        >
            <div
                class="bg-success-sub-item"
                v-for="(item, key) in Array(2)"
                :key="key"
                :style="{ background: tintColor(original.danger, (key + 8) / 10) }"
            >
            </div>
        </div>
    </div>
    <div class="demo-color-box"
         :style="{ background: original.info }"
    >Info
        <div class="value">{{ original.info }}</div>
        <div
            class="bg-color-sub"
        >
            <div
                class="bg-success-sub-item"
                v-for="(item, key) in Array(2)"
                :key="key"
                :style="{ background: tintColor(original.info, (key + 8) / 10) }"
            >
            </div>
        </div>
    </div>
</div>


### 中性色

中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。

<div class="demo-color-box-group">
    <div class="demo-color-box-items">
        <div class="demo-color-box demo-color-box-other"
             :style="{ background: original.textPrimary }"
        >主要文字<div class="value">{{original.textPrimary}}</div></div>
        <div class="demo-color-box demo-color-box-other"
             :style="{ background: original.textRegular }"
        >
            常规文字<div class="value">{{original.textRegular}}</div></div>
        <div class="demo-color-box demo-color-box-other"
             :style="{ background: original.textSecondary }"
        >次要文字<div class="value">{{original.textSecondary}}</div></div>
        <div class="demo-color-box demo-color-box-other"
             :style="{ background: original.textPlaceholder }"
        >占位文字<div class="value">{{original.textPlaceholder}}</div></div>
    </div>
    <div class="demo-color-box-items">
        <div class="demo-color-box demo-color-box-other demo-color-box-lite"
             :style="{ background: original.borderBase }"
        >一级边框<div class="value">{{original.borderBase}}</div></div>
        <div class="demo-color-box demo-color-box-other demo-color-box-lite"
             :style="{ background: original.borderLight }"
        >二级边框<div class="value">{{original.borderLight}}</div></div>
        <div class="demo-color-box demo-color-box-other demo-color-box-lite"
             :style="{ background: original.borderLighter }"
        >三级边框<div class="value">{{original.borderLighter}}</div></div>
        <div class="demo-color-box demo-color-box-other demo-color-box-lite"
             :style="{ background: original.borderExtraLight }"
        >四级边框<div class="value">{{original.borderExtraLight}}</div></div>
    </div>
    <div class="demo-color-box-items">
        <div
            class="demo-color-box demo-color-box-other"
            :style="{ background: original.black }"
        >基础黑色<div class="value">{{black}}</div></div>
        <div
            class="demo-color-box demo-color-box-other"
            :style="{ background: original.white, color: '#303133', border: '1px solid #eee' }"
        >基础白色<div class="value">{{white}}</div></div>
        <div class="demo-color-box demo-color-box-other bg-transparent">透明<div class="value">Transparent</div>
        </div>
    </div>
</div>

<style scoped>

.demo-color-box-group{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}
.demo-color-box-group .demo-color-box{
    flex: 0 48%;
}
.demo-color-box-group .demo-color-box-items{
    flex: 0 48%;
}

.demo-color-box {
    position: relative;
    border-radius: 4px;
    padding: 20px;
    margin: 5px 0;
    height: 114px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px
}

.demo-color-box .value {
    font-size: 12px;
    opacity: .69;
    line-height: 24px
}

.bg-color-sub {
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    position: absolute
}

.bg-blue-sub-item {
    width: 11.1111111%;
    height: 100%;
    display: inline-block
}


.bg-blue-sub-item {
    width: 11.1111111%;
    height: 100%;
    display: inline-block
}

.bg-blue-sub-item:first-child {
    border-radius: 0 0 0 4px
}

.bg-success-sub-item {
    width: 50%;
    height: 100%;
    display: inline-block
}

.bg-success-sub-item:first-child {
    border-radius: 0 0 0 4px
}

.bg-success-sub-item:last-child {
    border-radius: 0 0 4px 0
}


.bg-transparent {
    border: 1px solid #fcc3c3;
    color: #303133;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M0 98 L100 0 L100 1 L1 98' fill='%23FCC3C3' /></svg>");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 100%,auto
}


</style>
