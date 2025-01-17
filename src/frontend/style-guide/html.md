---
outline: deep
---

# HTML 规范 {#html-standard}

## 前言 {#preface}

本规范旨在帮助开发者统一 HTML 编写风格，提高代码的可读性、可维护性和可访问性。遵循此规范可以减少代码错误、提高团队协作效率。

## 文件样板 {#file-template}

- 每个 HTML 文件必须包含标准的 HTML 文件结构。
- 每个页面应该包含 `<html>`、`<head>`、`<body>` 三大基本元素。

<div class="style-example style-example-bad">
<h3>Bad</h3>

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<h1>Hello, World!</h1>
</html>
```

*解释：缺少元素 `<body>`。*

</div>


<div class="style-example style-example-good">
<h3>Good</h3>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
<h1>Hello, World!</h1>
</body>
</html>
```

</div>

## DOCTYPE {#doctype}

### 文档开头必须有 doctype

- 所有 HTML 文件的开头必须声明文档类型（`DOCTYPE`），它指示浏览器使用何种模式来渲染页面。

<div class="style-example style-example-bad">
<h3>Bad</h3>

```html

<html>
```

*解释：缺少 `DOCTYPE` 声明，浏览器可能使用怪异模式渲染页面。*

</div>


<div class="style-example style-example-good">
<h3>Good</h3>

```html
<!DOCTYPE html>
```

</div>

## `<html>` 元素 {#html-element}

### 必须有且仅有一个位于顶层的 `<html>` 元素

- 页面中只能有一个顶级 `<html>` 元素。

<div class="style-example style-example-bad">
<h3>Bad</h3>

```html

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>
<body>
<h1>Welcome!</h1>
</body>
</html>

<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>
<body>
<h1>Bienvenue!</h1>
</body>
</html>

```

*解释：页面中不能包含多个 `<html>` 元素。*

</div>


<div class="style-example style-example-good">
<h3>Good</h3>

```html

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>
<body>
<h1>Welcome!</h1>
</body>
</html>
```

</div>

### HTML 元素必须有 `lang` 属性

- `lang` 属性有助于指定页面语言，并有助于搜索引擎优化（SEO）和无障碍访问。

<div class="style-example style-example-bad">
<h3>Bad</h3>

```html

<html>

```

*解释：没有 `lang` 属性会影响页面的可访问性和搜索引擎优化。*

</div>


<div class="style-example style-example-good">
<h3>Good</h3>

```html

<html lang="en">
```

</div>

## `<meta>` 元素 {#meta-element}

### `<meta>` 元素必须包含在 `<head>` 元素内

- 所有的 `<meta>` 元素必须位于 `<head>` 元素内。

<div class="style-example style-example-bad">
<h3>Bad</h3>

```html

<meta charset="UTF-8">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

*解释：`<meta>` 元素应始终位于 `<head>` 内。*

</div>


<div class="style-example style-example-good">
<h3>Good</h3>

```html

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

</div>

### 必须使用 UTF-8 字符编码

- 必须在 `<meta>` 标签中指定字符编码为 `UTF-8`。

<div class="style-example style-example-bad">
<h3>Bad</h3>

```html

<meta charset="ISO-8859-1">
```

*解释：建议使用 UTF-8 编码，以确保支持多语言字符集。*

</div>


<div class="style-example style-example-good">
<h3>Good</h3>

```html

<meta charset="UTF-8">
```

</div>

### 响应式页面应当设置 viewport

- 为了支持响应式设计，页面必须在 `<head>` 中设置 `viewport` 元素。

<div class="style-example style-example-bad">
<h3>Bad</h3>

```html

<meta name="viewport" content="width=1024">
```

*解释：没有设置 `initial-scale` 会导致页面在移动设备上显示异常。*

</div>


<div class="style-example style-example-good">
<h3>Good</h3>

```html

<meta name="viewport" content="width=device-width, initial-scale=1.0">

```

</div>

## 页面标题 {#page-title}

- 每个页面必须设置 `<title>` 标签，页面标题应该简洁明了并具有描述性。

<div class="style-example style-example-bad">
<h3>Bad</h3>

```html
<title></title>
```

*解释：页面标题不能为空，缺少标题会影响用户体验和搜索引擎优化。*

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```html
<title>Welcome to My Website</title>
```

</div>

## 编码 {#coding}

### 缩进 {#indentation}

- 使用 **4 个空格** 进行缩进，禁止使用 Tab。
- 每个嵌套的标签必须向右缩进。

<div class="style-example style-example-bad">
<h3>Bad</h3>

```html

<div>
    <p>This is a paragraph.</p>
</div>
```

*解释：子元素应该缩进以提高可读性。*

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```html

<div>
    <p>This is a paragraph.</p>
</div>
```

</div>

### 注释 {#comments}

- 使用 `<!-- -->` 语法添加注释。
- 注释应简洁明了，避免不必要的注释。

<div class="style-example style-example-bad">
<h3>Bad</h3>

```html
<!-- Main content area starts here -->
<div class="content">
    <p>Content goes here.</p>
</div>
<!-- Main content area ends here -->
```

*解释：注释应简洁，不要冗长重复。*

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```html
<!-- This is the main content area -->
<div class="content">
    <p>Content goes here.</p>
</div>
```

</div>

### 标签 {#tags}

- 标签名称应使用 **小写**。

<div class="style-example style-example-bad">
<h3>Bad</h3>

```html
<A href="https://example.com">Click here</A>
```

*解释：标签名称应小写以遵守 HTML 规范。*

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```html
<a href="https://example.com">Click here</a>
```

</div>

### 属性 {#attributes}

- 属性值应始终使用双引号括起来，属性和属性值之间应有一个空格。
- 推荐使用 **布尔属性**（如 `checked`、`disabled`）时，不必设置属性值。



<div class="style-example style-example-bad">
<h3>Bad</h3>

```html
<input type="text" name="username" required="required">
```

*解释：布尔属性不需要值。*

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```html
<input type="text" name="username" required>
```

</div>


### 语义化 {#semantics}

- 使用语义化标签，避免使用 `<div>` 或 `<span>` 来代替本该使用的语义标签。
- 使用合适的标签表示内容的结构，例如：`<header>`、`<footer>`、`<article>`、`<section>` 等。


<div class="style-example style-example-bad">
<h3>Bad</h3>

```html
<input type="text" name="username" required="required">
```

*解释：布尔属性不需要值。*

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```html

<header>
    <h1>Welcome to My Website</h1>
</header>
<article>
    <p>This is an article.</p>
</article>
<footer>
    <p>Contact us at info@example.com</p>
</footer>
```

</div>

### 可访问性 {#accessibility}

- 为所有的可交互元素添加 `aria-*` 属性，确保无障碍用户能够正常浏览页面。
- 对图片添加 `alt` 属性，提供图片内容的文本描述。


<div class="style-example style-example-bad">
<h3>Bad</h3>


```html
<img src="logo.png">
```

*解释：缺少 `alt` 属性的图片对屏幕阅读器用户不可访问。*

</div>

<div class="style-example style-example-good">``
<h3>Good</h3>``

```html
<img src="logo.png" alt="Company Logo">
<a href="contact.html" aria-label="Contact Us">Contact</a>
```

</div>

## 参考资料 {#references}

1. [MDN HTML 文档](https://developer.mozilla.org/en-US/docs/Web/HTML)
2. [W3C HTML 规范](https://www.w3.org/TR/html5/)
3. [HTML5 语义化标签](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
4. [A11Y 参考资料](https://www.w3.org/WAI/WCAG21/quickref/)
5. [Google HTML 风格指南](https://google.github.io/styleguide/htmlcssguide.html)
