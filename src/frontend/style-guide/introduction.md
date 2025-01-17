---
outline: deep
---

# 规范 - 简介{#introduction}

:::info 你正在阅读的是 前端规范-简介！

- 本文档是团队内部统一前端开发标准的重要组成部分，旨在提升代码质量与开发效率。
- 想了解更多规范内容？请前往 [规范总览](#applicable-scenarios) 查看详细章节。
  :::

## 为什么需要前端代码规范？ {#why-code-standards}

在现代前端开发中，代码规范是团队协作和项目长期维护的重要保障。通过统一的代码规范，可以减少代码风格的差异，提高代码的可读性、可维护性，并有效避免不必要的沟通成本和重复错误。

## 本文档的目标 {#document-goals}

本前端代码规范旨在提供一个全面的指南，涵盖以下方面：

- HTML 的结构与语义化规范
- CSS 的命名规则与组织方式
- JavaScript 的编码风格与最佳实践
- Vue 组件的开发规范与模块化设计
- 代码命名规则、文件结构建议以及工具配置

**通过这些规范，团队可以实现：**

1. 代码一致性：所有代码遵循统一的风格和约定，避免不同开发者之间的风格冲突。
2. 降低维护成本：减少未来维护代码时的困惑与额外时间成本。
3. 提升开发效率：为团队成员提供清晰的开发标准，减少不必要的沟通与协作障碍。

## 适用范围 {#applicable-scenarios}

**本规范适用于以下场景：**

1. Web 项目，包括 PC 和移动端开发。
2. 使用 HTML/CSS/JavaScript/Vue 技术栈的前端项目。
3. 单人开发、团队开发以及跨团队协作项目。

## 使用方式 {#usage-guidelines}

1. 在开发新项目时，参考本文档制定项目初始规范。
2. 对已有项目进行代码审查时，将本文档作为标准。
3. 配置工具（如 ESLint 和 Prettier）以自动化地执行部分规范。

## 规范的组成部分 {#components-of-standard}

1. HTML 规范：如何编写语义化的 HTML，避免使用冗余或不必要的标签。
2. CSS 规范：推荐的命名方式（BEM 等）、如何组织样式代码以及处理全局与局部样式冲突。
3. JavaScript 规范：变量、函数的命名规则，以及代码风格建议（例如 ES6+）。
4. 命名规则：项目中使用统一的文件、目录、类名等命名规范。
5. 工具配置：通过 ESLint、Prettier、Stylelint 等工具确保代码风格一致性。

## 示例 {#examples}

**以下是符合规范的代码示例：**

**HTML 示例：**

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>前端代码规范</title>
</head>
<body>
    <header>
        <h1>这是标题</h1>
    </header>
    <main>
        <p>这是内容部分。</p>
    </main>
    <footer>
        <p>© 2025 公司名</p>
    </footer>
</body>
</html>
```

**css 示例：**

``` css
/* 推荐使用 BEM 命名 */
.header {
    background-color: #333;
    color: #fff;
}
.header__title {
    font-size: 2rem;
}
.header__nav {
    display: flex;
    list-style: none;
}
.header__nav-item {
    margin-right: 10px;
}
```

**js 示例：**

``` js
// 推荐使用 ES6+ 语法
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};

greet('前端开发者');

```
