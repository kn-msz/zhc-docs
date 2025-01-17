---
outline: deep
---

# TypeScript 规范 {#typescript-standard}

## 编码风格 {#coding-style}

### 缩进 {#indentation}

- 使用 **4 个空格** 进行缩进，禁止使用 Tab。
- 每个嵌套的标签和代码块应增加缩进。

#### 示例

```typescript
// 推荐
function sum(a: number, b: number): number {
    return a + b;
}
```

#### 错误示例

```typescript
// 错误
function sum(a: number, b: number): number {
    return a + b;
}
```

*解释：所有代码必须缩进，确保代码结构清晰。*

### 分号 {#semicolons}

- 在每个语句后使用分号，避免自动分号插入问题。

#### 示例

```typescript
const name: string = 'Alice';
console.log(name);
```

#### 错误示例

```typescript
const name: string = 'Alice'
console.log(name)
```

*解释：缺少分号可能导致意外的自动分号插入。*

### 空格 {#spaces}

- 在运算符两侧留一个空格，函数的参数列表与括号之间不加空格。

#### 示例

```typescript
// 推荐
let result = a + b;

function greet(name: string): void {
    console.log(`Hello, ${ name }`);
}
```

#### 错误示例

```typescript
// 错误
let result = a + b;

function greet(name: string): void {
    console.log(`Hello, ${ name }`);
}
```

*解释：在运算符和括号的适当位置添加空格，提高代码的可读性。*

### 空行 {#blank-lines}

- 在函数、类之间使用一个空行，确保代码可读性。

#### 示例

```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, ${ this.name }`);
    }
}
```

#### 错误示例

```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, ${ this.name }`);
    }
}
```

*解释：函数和类之间应保持适当的空行，以分隔代码块。*

## 类型声明 {#type-declarations}

### 类型注解 {#type-annotations}

- 所有变量、函数参数、返回值等必须明确声明类型。

#### 示例

```typescript
// 推荐
let username: string = 'Alice';

function add(a: number, b: number): number {
    return a + b;
}
```

#### 错误示例

```typescript
// 错误
let username = 'Alice';  // 没有明确类型
```

*解释：缺少类型注解会导致类型不安全，建议始终声明类型。*

### 接口 {#interfaces}

- 使用接口（`interface`）定义对象的结构，而非直接在对象上定义类型。

#### 示例

```typescript
// 推荐
interface IUser {
    name: string;
    age: number;
}

const user: IUser = {
    name: 'Alice',
    age: 25
};
```

#### 错误示例

```typescript
// 错误
const user = {
    name: 'Alice',
    age: 25
};  // 没有使用接口定义类型
```

*解释：接口可以提高代码的可维护性和可扩展性。*

## 类和对象 {#classes-and-objects}

### 类的命名和属性 {#classes-naming-and-properties}

- 类名使用 **帕斯卡命名法（PascalCase）**。
- 类的属性需要使用访问修饰符（`public`、`private`、`protected`）。

#### 示例

```typescript
// 推荐
class User {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public greet(): void {
        console.log(`Hello, ${ this.name }`);
    }
}
```

#### 错误示例

```typescript
// 错误
class user {  // 类名应使用帕斯卡命名法
    name: string;
    age: number;
}
```

*解释：类名应使用帕斯卡命名法，且类内部应正确设置属性的访问修饰符。*

### 静态方法与实例方法 {#static-and-instance-methods}

- 静态方法应使用 `static` 关键字，而实例方法不应声明为 `static`。

#### 示例

```typescript
// 推荐
class MathUtil {
    static add(a: number, b: number): number {
        return a + b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }
}

const result1 = MathUtil.add(1, 2);
const result2 = new MathUtil().multiply(2, 3);
```

#### 错误示例

```typescript
// 错误
class MathUtil {
    static multiply(a: number, b: number): number {
        return a * b;
    }

    add(a: number, b: number): number {
        return a + b;
    }
}

const result1 = new MathUtil().add(1, 2);  // 应该调用静态方法
```

*解释：静态方法应使用类名调用，实例方法应使用实例调用。*

## 泛型 {#generics}

### 泛型函数 {#generic-functions}

- 使用泛型来创建可重用的函数、类、接口。

#### 示例

```typescript
// 推荐
function identity<T>(value: T): T {
    return value;
}

let stringIdentity = identity<string>('Hello');
let numberIdentity = identity<number>(100);
```

#### 错误示例

```typescript
// 错误
function identity(value) {
    return value;
}

let stringIdentity = identity('Hello');
let numberIdentity = identity(100);
```

*解释：未使用泛型会导致类型不安全，建议使用明确的类型声明。*

## 异步编程 {#asynchronous-programming}

### 使用 `async/await` {#async-await}

- 使用 `async/await` 来处理异步操作，避免回调地狱。
- 异常应该通过 `try...catch` 块来处理。

#### 示例

```typescript
// 推荐
async function fetchData(url: string): Promise<string> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
```

#### 错误示例

```typescript
// 错误
function fetchData(url: string): Promise<string> {
    return fetch(url).then(response => response.json()).catch(error => {
        console.error('Error fetching data:', error);
    });
}
```

*解释：使用 `async/await` 可以使异步代码更加简洁、易读和更易于调试。*

## 错误处理 {#error-handling}

### 异常捕获 {#error-catching}

- 使用 `try...catch` 来捕获异常，并确保捕获到的错误类型明确。

#### 示例

```typescript
// 推荐
try {
    throw new Error('Something went wrong');
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
```

#### 错误示例

```typescript
// 错误
try {
    throw new Error('Something went wrong');
} catch (error) {
    console.error(error);  // 错误捕获未检查错误类型
}
```

*解释：捕获异常时，确保对错误类型进行检查，以避免运行时错误。*

## 配套工具 {#tools}

- **代码校验**：使用 **ESLint** 和 **TypeScript 配置**，检查代码风格和类型错误。
- **格式化工具**：使用 **Prettier** 自动格式化代码。
- **类型检查**：使用 **TSC**（TypeScript Compiler）进行类型检查。

## 参考资料 {#references}

1. [MDN TypeScript 文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/type)
2. [TypeScript 官方文档](https://www.typescriptlang.org/docs/)
3. [Airbnb JavaScript 风格指南](https://github.com/airbnb/javascript)
4. [Google TypeScript 风格指南](https://google.github.io/styleguide/tsguide.html)
