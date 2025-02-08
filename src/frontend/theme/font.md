<script lang="ts" setup>

import { defaultBasicTheme } from '@/utils/theme'

const copyHandle = (item) => {
  navigator.clipboard.writeText(item.name).then(() => {
        console.log('内容已复制到剪贴板')
    }).catch((err) => {
        console.error('复制失败:', err)
    })
}
</script>


# Font 字体

## 字体类型

<div class="font-table font-table-compact" @click="copyHandle(defaultBasicTheme.font.family)">
    <div class="font-table-row">
        <div class="font-table-row-desc">
            <span>首选字体</span>
            <span>{{ defaultBasicTheme.font.family.name  }}</span>
        </div>
        <div class="font-table-row-desc">
            <span>{{ defaultBasicTheme.font.family.remark }}</span>
            <span style="width: 100%;">{{ defaultBasicTheme.font.family.value }}</span>
        </div>
    </div>
</div>


## 字体尺寸

<div class="font-table font-table-compact">
    <div class="font-table-row" v-for="item in defaultBasicTheme.font.size" :key="item.name" @click="copyHandle(item)">
        <div class="font-table-row-desc">
            <span>{{ item.name }}</span>
            <span>{{ item.remark }}</span>
            <span>{{ item.value }}px</span>
        </div>
        <div class="font-table-row-desc">
            <span :style="{'font-size': `${item.value}px`, 'direction': 'inherit'}">字体尺寸示例</span>
        </div>
    </div>
</div>

## 字体粗细

<div class="font-table font-table-compact">
    <div class="font-table-row" v-for="item in defaultBasicTheme.font.weight" :key="item.name" @click="copyHandle(item)">
        <div class="font-table-row-desc">
            <span>{{ item.name }}</span>
            <span>{{ item.remark }}</span>
            <span>{{ item.value }}px</span>
        </div>
        <div class="font-table-row-desc">
            <span :style="{'font-weight': item.value, 'direction': 'inherit'}">字体粗细示例</span>
        </div>
    </div>
</div>



<style scoped>

.font-table {
    padding: 10px 30px 0
}

.font-table-row {
    cursor: pointer;
    display: flex;
    font-size: 14px
}

.font-table-compact {
    font-size: 12px
}

.font-table-compact .font-table-row {
    margin-bottom: 30px
}

.font-table-compact .font-table-row-desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 80px
}

.font-table-compact .font-table-row-desc>span {
    direction: rtl;
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    white-space: nowrap;
    width: 80px
}

.font-table-compact .font-table-row-desc span+span {
    color: #999
}

</style>
