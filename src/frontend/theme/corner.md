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
# Corner 边角

<div class="corner-container is-active" v-for="item in defaultBasicTheme.corner" @click="copyHandle(item)">
    <div class="corner-info">
        <span class="corner-info-name">{{ item.name }}</span>
        <span class="corner-info-radius">{{ item.remark }}</span>
        <span class="corner-info-radius">{{ item.value }}</span>
    </div><div class="corner-box" :style="{'border-radius': `${ item.name === 'corner-semicircle' ? item.value : item.value}px`}"></div>
</div>




<style scoped>


.corner-container {
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: 40px 0;
    padding: 20px 20px 20px 1px
}



.corner-info {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 90px;
    justify-content: space-around;
    padding-right: 30px;
    text-align: right;
    width: 108px
}

.corner-info-name {
}

.corner-info-radius {
    color: #999;
    font-size: 12px
}

.corner-box {
    border: 1px solid #d9d9d9;
    flex-grow: 1;
    height: 90px
}
</style>
