<script lang="ts" setup>


const original = {
    'font_size_extra_large': '20px',
    'font_size_large': '18px',
    'font_size_medium': '16px',
    'font_size_base': '14px',
    'font_size_small': '13px',
    'font_size_extra_small': '12px'
}
</script> 

# Typography 字体

> 我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。

## 字体

<div class="demo-term-box">
<img src="@/assets/images/term-pingfang.png" alt="">
<img src="@/assets/images/term-hiragino.png" alt="">
<img src="@/assets/images/term-microsoft.png" alt="">
<img src="@/assets/images/term-sf.png" alt="">
<img src="@/assets/images/term-helvetica.png" alt="">
<img src="@/assets/images/term-arial.png" alt="">
</div>

## 字号

<table class="demo-typo-size">
    <tbody>
        <tr
        >
            <td>层级</td>
            <td>字体大小</td>
            <td class="color-dark-light">举例</td>
        </tr>
        <tr
        :style="{ fontSize: original.font_size_extra_small }"
        >
            <td>辅助文字</td>
            <td class="color-dark-light">{{original.font_size_extra_small}} Extra Small</td>
            <td>用 Element 快速搭建页面</td>
        </tr>
        <tr
        :style="{ fontSize: original.font_size_small }"
        >
            <td>正文（小）</td>
            <td class="color-dark-light">{{original.font_size_small}} Small</td>
            <td>用 Element 快速搭建页面</td>
        </tr>
        <tr
        :style="{ fontSize: original.font_size_base }"
        >
            <td>正文</td>
            <td class="color-dark-light">{{original.font_size_base}} Base</td>
            <td>用 Element 快速搭建页面</td>
        </tr>
        <tr
        :style="{ fontSize: original.font_size_medium }"
        >
            <td>小标题</td>
            <td class="color-dark-light">{{original.font_size_medium}} Medium</td>
            <td>用 Element 快速搭建页面</td>
        </tr>
        <tr
        :style="{ fontSize: original.font_size_large }"
        >
            <td>标题</td>
            <td class="color-dark-light">{{original.font_size_large}} large</td>
            <td>用 Element 快速搭建页面</td>
        </tr>
        <tr
        :style="{ fontSize: original.font_size_extra_large }"
        >
            <td>主标题</td>
            <td class="color-dark-light">{{original.font_size_extra_large}} Extra large</td>
            <td>用 Element 快速搭建页面</td>
        </tr>
    </tbody>
</table>



<style>
.demo-term-box {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    border-radius: 20px;
    padding: 20px;
    justify-content: space-around;
}


.dark .demo-term-box {
    background: #909399;
}

.demo-term-box img {
   width: 30%;
   flex: 0 30%;
}
</style>
