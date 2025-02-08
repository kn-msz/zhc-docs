<script lang="ts" setup>
import { computed, watch } from 'vue';
import { useData } from 'vitepress';
import { defaultBasicTheme } from '@/utils/theme';

const { isDark } = useData();

const copyHandle = (item) => {
    navigator.clipboard.writeText(item.name).then(() => {
        console.log('内容已复制到剪贴板')
    }).catch((err) => {
        console.error('复制失败:', err)
    })
}
</script>

# Shadow 阴影
<div class="section" style="border-top: 0;" v-for="(group, index) in defaultBasicTheme.shadow" :key="index">
    <div class="shadow-container">
        <div class="shadow-box-container" v-for="item in group" :key="item.name">
            <div class="shadow-box-container-desc">
                <span>{{ item.name }}</span>
                <span>{{ item.remark }}</span>
            </div>
            <div class="shadow-box" :style="{ 'box-shadow': isDark ? item.darkValue : item.value }"></div>
        </div>
    </div>
</div>

<style scoped>

.shadow-container-title-warper {
    width: 100%
}

.shadow-container {
    display: flex;
    flex-wrap: wrap
}

.shadow-container>.shadow-box-container:nth-last-child(n+5) {
    border-bottom: 1px solid #0000000f;
    padding-bottom: 40px
}

.shadow-container-title {
    align-items: center;
    display: flex;
    flex-shrink: 0;
    margin-bottom: 10px;
    width: 25%
}

.shadow-container-title-desc {
    direction: rtl;
    display: flex;
    flex-direction: column;
    margin-right: 30px
}

.shadow-container-title-desc>span+span {
    color: #999
}

.shadow-box-container {
    align-items: center;
    display: flex;
    flex-shrink: 0;
    margin-bottom: 40px;
    width: 50%
}

.shadow-box-container-desc {
    direction: rtl;
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-right: 30px
}

.shadow-box-container-desc>span+span {
    color: #999
}

.shadow-box {
    border-radius: 2px;
    height: 160px;
    line-height: 160px;
    text-align: center;
    width: 160px
}

</style>
