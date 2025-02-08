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


# Line 线条

## 线条样式


<div class="line-example" v-for="item in defaultBasicTheme.border.style" :key="item.name" @click="copyHandle(item)">
    <div class="line-example-info">
        <span>{{ item.name }}</span>
        <span>{{ item.remark }}</span>
    </div>
    <div class="line-example-border" :style="{ 'border-top-width': '1px', 'border-top-style': item.value }"></div>
</div>

## 线条粗细


<div class="line-example" v-for="item in defaultBasicTheme.border.width" :key="item.name" @click="copyHandle(item)">
    <div class="line-example-info">
        <span>{{ item.name }}</span>
        <span>{{ item.remark }}</span>
        <span>{{ item.value }}px</span>
    </div>
    <div class="line-example-border" :style="{ 'border-top-width': `${item.value}px`, 'border-top-style': 'solid', 'cursor': 'pointer' }"></div>
</div>


<style scoped>

.line-example {
    display: flex
}

.line-example:not(:last-child) {
    margin-bottom: 60px
}

.line-example-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
    width: 120px
}

.line-example-info span {
    direction: rtl;
    font-size: 14px
}

.line-example-info span+span {
    color: #999;
    font-size: 12px
}

.dark .line-example-border{
    border-color: #fff;
}
.line-example-border {
    border-color: #000;
    flex-grow: 0;
    height: 40px;
    margin-top: 40px;
    width: 100%
}

</style>   
