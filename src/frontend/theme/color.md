<script lang="ts" setup>


import { primaryColor, colorGroups } from '@/utils/theme';
const copyHandle = (item) => {
  navigator.clipboard.writeText(item.name).then(() => {
        console.log('内容已复制到剪贴板');
    }).catch((err) => {
        console.error('复制失败:', err);
    });
}
</script>
# Color 颜色


## 主题色

<h4>{{colorGroups.brand.desc}}</h4>
<div class="color-group-content">
    <div class="color-block-editable-container">
        <div class="color-block-editable-border">
            <div class="color-block-editable" :style="{background:  primaryColor }"></div>
        </div>
        <div class="color-block-editable-name">HEX{{ primaryColor }}</div>
        <div class="color-block-editable-warning"></div>
    </div>
    <div class="color-brand-container">
        <div class="color-block-container" v-for="item in colorGroups.brand.colorGroup" :key="item.name" @click="copyHandle(item)">
            <div class="color-block-wrapper">
                <div class="color-block is-edited" :style="{background: item.value}"></div>
            </div>
            <div class="color-block-name">{{ item.name }}</div>
            <div class="color-block-remark">{{ item.remark }}</div>
        </div>
    </div>
</div>

## 中性色

<h4>{{colorGroups.bg.desc}}</h4>
<div class="color-group-content">
    <div class="color-background-container">
        <div class="color-block-container" v-for="item in colorGroups.bg.colorGroup" :key="item.name" @click="copyHandle(item)">
            <div class="color-block-wrapper">
                <div class="color-block is-edited" :style="{background: item.value}"></div>
            </div>
            <div class="color-block-name">{{ item.name }}</div>
            <div class="color-block-remark">{{ item.remark }}</div>
        </div>
    </div>
</div>

## 功能色

<template v-for="(item, index) in colorGroups.status.colorGroup">
    <h4>{{colorGroups.status.desc[index]}}</h4>
    <div class="color-group-content">
        <div class="color-brand-container">
            <div class="color-block-container" v-for="container in item" :key="item.name" @click="copyHandle(container)">
                <div class="color-block-wrapper">
                    <div class="color-block is-edited" :style="{background: container.value}"></div>
                </div>
                <div class="color-block-name">{{ container.name }}</div>
                <div class="color-block-remark">{{ container.remark }}</div>
            </div>
        </div>
    </div>
</template>

## 数据色

<h4>{{colorGroups.data.desc}}</h4>
<div class="color-group-content">
    <div class="color-brand-container">
        <div class="color-block-container" v-for="item in colorGroups.data.colorGroup" :key="item.name" @click="copyHandle(item)">
            <div class="color-block-wrapper">
                <div class="color-block is-edited" :style="{background: item.value}"></div>
            </div>
            <div class="color-block-name">{{ item.name }}</div>
            <div class="color-block-remark">{{ item.remark }}</div>
        </div>
    </div>
</div>

## 内置色

<h4>{{colorGroups.default.desc}}</h4>
<div class="color-group-content">
    <div class="color-brand-container">
        <div class="color-block-container" v-for="item in colorGroups.default.colorGroup" :key="item.name" @click="copyHandle(item)">
            <div class="color-block-wrapper">
                <div class="color-block is-edited" :style="{background: item.value === 'transparent' ?  'url(/assets/images/transparent.png)'  : item.value}"></div>
            </div>
            <div class="color-block-name">{{ item.name }}</div>
            <div class="color-block-remark">{{ item.remark }}</div>
        </div>
    </div>
</div>


<style scoped>

.color-block-container {
    display: inline-block;
    margin-right: 30px;
    text-align: center;
    user-select: none
}

.color-block-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column
}

.color-block-wrapper .color-block-checkbox {
    display: flex;
    justify-content: center
}

.color-block {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    color: #fff;
    height: 80px;
    margin-bottom: 5px;
    position: relative;
    text-align: center;
    transition: height .3s;
    width: 80px
}

.dark .color-block {
    border: 1px solid #676464;
}

.color-block.is-edited {
    cursor: pointer
}

.color-block-confirm {
    border-bottom: 17px solid #0000;
    border-left: 17px solid #0000;
    border-right: 17px solid #00a0b4;
    border-right-color: var(--brand1-6,#00a0b4);
    border-top: 17px solid #00a0b4;
    border-top-color: var(--brand1-6,#00a0b4);
    color: #fff;
    position: absolute;
    right: 0;
    top: 0
}

.color-block-confirm>* {
    position: absolute;
    right: -14px;
    top: -14px
}

.color-block-name,.color-block-remark {
    font-size: 12px;
    margin-bottom: 6px
}

.color-block-remark {
    color: #999;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 80px
}

.color-block-editable-container {
    align-items: center;
    display: flex;
    margin-bottom: 20px;
    position: relative
}

.color-block-editable {
    border-radius: 2px;
    color: #fff;
    font-size: 12px;
    height: 42px;
    line-height: 42px;
    text-align: center;
    width: 120px
}
.color-block-editable-border {
    border: 1px solid #e4e4e4;
    border-radius: 2px;
    cursor: pointer;
    height: 53px;
    padding: 4px
}
.dark .color-block-editable-border {
    border: 1px solid #676464;
}

.color-block-editable-name {
    margin-left: 16px;
    min-width: 60px
}

.color-block-editable-warning {
    color: #ff4d4f;
    font-size: 12px;
    margin-left: 16px
}

.color-block-colorPicker {
    position: absolute;
    top: calc(100% + 4px);
    user-select: none;
    z-index: 9
}

.color-block-colorPicker input {
    color: #333
}

.section {
    border-bottom: 1px solid #f0f0f0;
    padding: 40px 0
}



.color-group-head {
    align-items: center;
    display: flex;
    justify-content: space-between
}
</style>
