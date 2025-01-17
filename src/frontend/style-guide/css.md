---
outline: deep
---




<div class="style-example style-example-bad">
<h3>Bad</h3>

</div>


<div class="style-example style-example-good">
<h3>Good</h3>

</div>

# CSS 规范 {#css-standard}

## CSS {#css}

## 编码风格 {#coding-style}

- 使用 **4 个空格** 进行缩进。
- 每条属性声明后加分号，即使是最后一条。
- 冒号后留一个空格，值与单位之间不留空格。

## 选择器 {#selectors}

- 使用简短且语义化的类名，不使用过于通用的选择器。
- 避免使用嵌套过深的选择器，推荐最多 3 层。
- ID 选择器仅用于唯一标识的场景。

<div class="style-example style-example-bad">
<h3>Bad</h3>

```css
div > ul > li > a {
    color: red;
}
```

</div>


<div class="style-example style-example-good">
<h3>Good</h3>

```css
.header {
    background-color: #f8f9fa;
}

.header__nav {
    display: flex;
}

```

</div>


## 属性和属性值 {#properties}

- 属性按照功能分组排列，推荐顺序：
    1. 布局属性（`position`、`top`、`left`、`z-index`）
    2. 盒模型属性（`display`、`width`、`height`、`margin`、`padding`）
    3. 字体属性（`font`、`line-height`、`color`）
    4. 其他属性（`background`、`border`、`transition`）


<div class="style-example style-example-bad">
<h3>Bad</h3>

```css
/* 错误 */
.box {
    width: 100px;
    height: 50px;
    margin: 10px;
    position: relative;
    padding: 5px;
    background-color: #007bff;
    display: block;
    color: #fff;
}
```

*解释：建议按照功能顺序排列属性，增加代码的可读性和可维护性。*

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```css
/* 推荐 */
.box {
    position: relative;
    display: block;
    width: 100px;
    height: 50px;
    margin: 10px;
    padding: 5px;
    background-color: #007bff;
    color: #fff;
}
```

</div>


### 属性值书写规范

- 布尔值属性（如 `checked`、`disabled`）无需赋值。
- 使用简写属性时，省略不必要的值。



<div class="style-example style-example-bad">
<h3>Bad</h3>

```css
border: 1px solid #ddd none 0;
```


</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```css
border: 1px solid #ddd;
```


</div>



## 其他 {#others}

- **注释规范**：
    - 使用 `/* ... */` 添加注释，描述样式块的功能。
    - 必要时分组注释。


<div class="style-example style-example-bad">
<h3>Bad</h3>

```css
/* 错误注释 */
.header {
    background-color: #f8f9fa;
}

/* This is header */
.header__nav {
    display: flex;
    list-style: none;
}
```

*解释：注释应简洁，不需要冗长重复的描述。*

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```css
/* Header 样式 */
.header {
    background-color: #f8f9fa;
}

/* 导航 */
.header__nav {
    display: flex;
    list-style: none;
}
```

</div>

- **代码组织**：
    - 按模块拆分样式文件，如 `header.css`、`footer.css`。
    - 使用 `@import` 或工具（如 Webpack）管理样式依赖。

## Sass 和 Less {#sass-and-less}

### 使用场景

- 推荐在大型项目中使用 Sass 或 Less，提升代码的可维护性。
- 对于简单项目，优先使用纯 CSS。

### 变量与混入

- 使用变量管理颜色、间距和字体等全局属性。
- 使用混入减少重复代码。



<div class="style-example style-example-bad">
<h3>Bad</h3>

```scss
/* 错误示例 */
$primary-color: #007bff;

.box {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $primary-color;
}
```

*解释：混入（`@include`）应单独定义并重用，而不是直接在每个选择器中重复代码。*

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```scss
/* 变量 */
$primary-color: #007bff;
$font-size: 16px;

/* 混入 */
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 使用 */
.box {
    background-color: $primary-color;
    @include flex-center;
}
```

</div>

### 嵌套规则

- 控制嵌套层级，推荐最多 3 层。
- 使用嵌套时注意上下文关系，避免选择器过长。


<div class="style-example style-example-bad">
<h3>Bad</h3>

```scss
/* 错误 */
.header {
    .nav {
        .item {
            .link {
                color: red;
            }
        }
    }
}
```

*解释：避免过深的嵌套，保持代码的简洁性和可读性。*

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```scss
.header {
    background-color: #f8f9fa;

    &__nav {
        display: flex;

        &-item {
            margin-right: 10px;
        }
    }
}
```

</div>



### 分离逻辑

- 使用文件拆分不同的功能模块。
- 推荐使用 `@import` 或 `@use` 组合文件。



<div class="style-example style-example-bad">
<h3>Bad</h3>

```scss
/* 错误示例 */
@import 'header';
@import 'variables';
```

*解释：在 `main.scss` 文件中，应该先导入变量文件再导入实际样式文件。*

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```scss
// _variables.scss
$primary-color: #007bff;

// _header.scss
.header {
    background-color: $primary-color;
}

// main.scss
@import 'variables';
@import 'header';
```

</div>

## 配套工具 {#tools}

- **预处理器**：推荐使用 Sass，安装方式如下：
  ```bash
  npm install sass
  ```

- **代码格式化**：使用 Prettier 自动格式化代码。
- **代码校验**：使用 Stylelint 检查代码规范。

## 参考资料 {#references}

1. [MDN CSS 文档](https://developer.mozilla.org/en-US/docs/Web/CSS)
2. [Sass 官方文档](https://sass-lang.com/documentation)
3. [Less 官方文档](http://lesscss.org/)
4. [Google CSS 风格指南](https://google.github.io/styleguide/htmlcssguide.html)
5. [Airbnb CSS/SCSS Style Guide](https://github.com/airbnb/css)
6. [Bootstrap 官方文档](https://getbootstrap.com/)

