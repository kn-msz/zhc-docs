---
outline: deep
---

# JavaScript 规范{#javaScript-standard}
## 前言 {#preface}

本规范旨在帮助开发者统一 JavaScript 的编码风格，提高代码的可读性和可维护性。遵循此规范可以减少团队协作中的代码冲突和沟通成本。

## 编码风格 {#coding-style}

### 缩进 {#indentation}

- 使用 **4 个空格** 进行缩进。
- 禁止使用 Tab。

#### 示例

```javascript
function calculateTax(amount) {
    const taxRate = 0.15;
    return amount * taxRate;
}
```

### 分号 {#semicolons}

- 所有语句必须使用分号结束。
- 即使可以省略，也必须显式添加。

#### 示例

```javascript
const name = 'Alice';
console.log(name);
```

### 逗号 {#commas}

- 在数组和对象中，最后一个元素后不要加逗号。

#### 示例

```javascript
// 推荐
const arr = [1, 2, 3];
const obj = { name: 'Alice', age: 25 };

// 错误
const arr = [1, 2, 3,];
const obj = { name: 'Alice', age: 25, };
```

### 块 {#blocks}

#### 使用大括号 {#braces}

- 所有代码块必须使用大括号 `{}`，即使代码块只有一行。

#### 示例

```javascript
if (isValid) {
    console.log('Valid!');
}
```

#### 大括号换行风格 {#brace-style}

- 推荐使用 **K&R 风格**，即大括号与控制语句在同一行。

#### 示例

```javascript
if (isValid) {
    console.log('Valid!');
} else {
    console.log('Invalid!');
}
```

### 空格 {#spaces}

- 运算符两侧必须保留一个空格。
- 函数调用的参数列表与括号之间不得有空格。

#### 示例

```javascript
// 推荐
const sum = a + b;

function greet(name) {
    console.log(`Hello, ${name}!`);
}
```

### 空行 {#blank-lines}

- 函数、类或模块的定义之间必须保留一个空行。
- 块内代码不需要额外的空行。

#### 示例

```javascript
// 推荐
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
```

### 最大字符数和最大行数 {#max-length}

- 单行代码长度不应超过 **80 个字符**。
- 每个文件的行数建议控制在 **500 行** 以下。

#### 示例

```javascript
// 推荐：分行处理长字符串
const longString =
    'This is a very long string that exceeds 80 characters, ' +
    'so it is split into multiple lines.';
```

## 语言特性 {#language-features}

### 变量声明 {#variable-declarations}

- 使用 `const` 声明不可变变量。
- 使用 `let` 声明可变变量，禁止使用 `var`。

#### 示例

```javascript
const PI = 3.14;
let count = 0;
```

### 原始类型 {#primitive-types}

- 包括 `String`、`Number`、`Boolean`、`Undefined`、`Null` 和 `Symbol`。

#### 示例

```javascript
const name = 'Alice';  // String
const age = 25;        // Number
const isActive = true; // Boolean
```

### 数组 {#arrays}

- 优先使用数组方法（如 `map`、`filter`、`forEach`）替代循环。
- 创建数组时，优先使用字面量语法。

#### 示例

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
```

### 对象 {#objects}

- 使用对象字面量创建对象。
- 属性名与变量名一致时，使用简写语法。

#### 示例

```javascript
const name = 'Alice';
const user = { name, age: 25 };
```

### 函数 {#functions}

- 使用函数表达式或箭头函数代替匿名函数。
- 参数过多时，建议使用对象作为参数。

#### 示例

```javascript
const add = (a, b) => a + b;

function createUser({ name, age }) {
    return { name, age };
}
```

### 类 {#classes}

- 使用 `class` 和 `constructor` 创建类。
- 方法名使用驼峰命名。

#### 示例

```javascript
class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}
```

### 模块 {#modules}

- 使用 `export` 和 `import` 实现模块化。
- 每个文件只导出一个默认值。

#### 示例

```javascript
// math.js
export const add = (a, b) => a + b;
export default { add };

// main.js
import math, { add } from './math.js';
```

### 操作符 {#operators}

- 使用 `===` 和 `!==` 代替 `==` 和 `!=`。
- 避免使用位运算符。

#### 示例

```javascript
if (a === b) {
    console.log('Equal');
}
```

### 控制语句 {#control-statements}

- 使用 `for...of` 替代传统的 `for` 循环。
- 避免使用 `for...in` 遍历数组。

#### 示例

```javascript
for (const num of numbers) {
    console.log(num);
}
```

### 其他 {#miscellaneous}

- 禁止直接修改内置对象的原型链。

## 注释 {#comments}

- 单行注释使用 `//`，放在注释代码上方。
- 多行注释使用 `/* ... */`，适用于模块或复杂逻辑。

#### 示例

```javascript
// 计算总和
const sum = (a, b) => a + b;

/*
 * 处理用户数据
 * @param {Object} user 用户对象
 */
function processUser(user) {
    console.log(user.name);
}
```

## 命名 {#naming}

- 变量和函数使用驼峰命名法。
- 类和构造函数使用帕斯卡命名法。

#### 示例

```javascript
let userName = 'Alice'; // 变量
function getUserName() {
} // 函数
class UserProfile {
} // 类
```

## 关于 ES5 {#about-es5}

- 新项目推荐使用 ES6+。
- 仅在旧项目维护中保留对 ES5 的兼容性支持。

## 配套工具 {#tools}

- 使用 ESLint 统一代码风格。
- 使用 Prettier 自动格式化代码。

## 参考资料 {#references}

1. [MDN JavaScript 文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
2. [ECMAScript 规范](https://www.ecma-international.org/publications-and-standards/)
3. [Airbnb JavaScript 风格指南](https://github.com/airbnb/javascript)
4. [Google JavaScript 风格指南](https://google.github.io/styleguide/jsguide.html)
5. [Node.js 官方文档](https://nodejs.org/en/docs/)
6. [JavaScript.info](https://javascript.info/)
