# A 类规则：必要规则 {#priority-a-rules-essential}

这些规则有助于防止错误，因此必须学习并严格遵守。虽然可能存在例外情况，但应该非常罕见，并且仅限于那些对 JavaScript 和 Vue 都有深入了解的专家。

## 使用多词组件名称 {#use-multi-word-component-names}

除根 `App` 组件外，用户组件名称应始终使用多词名称。这可以[防止冲突](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)，因为所有 HTML 元素名称都是单个词。

<div class="style-example style-example-bad">
<h3>Bad</h3>

```vue-html
<!-- 在预编译模板中 -->
<Item />

<!-- 在 DOM 模板中 -->
<item></item>
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```vue-html
<!-- 在预编译模板中 -->
<TodoItem />

<!-- 在 DOM 模板中 -->
<todo-item></todo-item>
```

</div>

## 使用详细的 prop 定义 {#use-detailed-prop-definitions}

在提交的代码中，prop 定义应尽可能详细，至少应指定类型。

::: details 详细解释
详细的[prop 定义](/guide/components/props#prop-validation)有两个优点：

- 它们记录了组件的 API，方便查看如何使用该组件。
- 在开发过程中，如果组件接收到格式不正确的 props，Vue 会发出警告，帮助你捕获潜在的错误源。
  :::

<div class="options-api">

<div class="style-example style-example-bad">
<h3>Bad</h3>

```js
// 仅在原型设计时可以这样使用
props: ['status']
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```js
props: {
    status: String
}
```

```js
// 更好的做法！
props: {
    status: {
        type: String,
        required: true,

        validator: value => {
            return [
                'syncing',
                'synced',
                'version-conflict',
                'error'
            ].includes(value)
        }
    }
}
```

</div>

</div>

<div class="composition-api">

<div class="style-example style-example-bad">
<h3>Bad</h3>

```js
// 仅在原型设计时可以这样使用
const props = defineProps(['status'])
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```js
const props = defineProps({
    status: String
})
```

```js
// 更好的做法！

const props = defineProps({
    status: {
        type: String,
        required: true,

        validator: (value) => {
            return ['syncing', 'synced', 'version-conflict', 'error'].includes(
                value
            )
        }
    }
})
```

</div>

</div>

## 使用键值 `v-for` {#use-keyed-v-for}

`key` 和 `v-for` 一起使用是 _始终_ 必须的，尤其是对于组件，以保持子树中组件的内部状态。即使对于元素，保持可预测的行为（如[对象一致性](https://bost.ocks.org/mike/constancy/)）也是一种好的实践。

::: details 详细解释
假设你有一个待办事项列表：

<div class="options-api">

```js
data() {
    return {
        todos: [
            {
                id: 1,
                text: 'Learn to use v-for'
            },
            {
                id: 2,
                text: 'Learn to use key'
            }
        ]
    }
}
```

</div>

<div class="composition-api">

```js
const todos = ref([ 
    { 
        id: 1, 
        text: 'Learn to use v-for' 
    }, 
    { 
        id: 2, 
        text: 'Learn to use key' 
    } 
])
```

</div>

然后你按字母顺序对它们进行排序。当更新 DOM 时，Vue 会优化渲染，执行最便宜的 DOM 操作。这可能意味着删除第一个待办事项元素，然后将其重新添加到列表的末尾。

问题是，有些情况下很重要的是不要删除那些应该保留在 DOM 中的元素。例如，你可能希望使用 `<transition-group>` 动画列表排序，或者在渲染的元素是 `<input>` 时保持焦点。在这些情况下，为每个项目添加唯一的键（例如 `:key="todo.id"`）将告诉 Vue 如何更可预测地行为。

在我们的经验中，最好 _始终_ 添加一个唯一的键，这样你和你的团队就可以不必担心这些边缘情况。然后，在少数需要关注性能的场景下，如果对象一致性不是必要的，你可以做出有意识的例外。
:::

<div class="style-example style-example-bad">
<h3>Bad</h3>

```vue-html
<ul>
    <li v-for="todo in todos">
        {{ todo.text }}
    </li>
</ul>
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```vue-html
<ul>
    <li
        v-for="todo in todos"
        :key="todo.id"
    >
        {{ todo.text }}
    </li>
</ul>
```

</div>

## 避免在同一元素上使用 `v-if` 和 `v-for` {#avoid-v-if-with-v-for}

**永远不要在同一元素上使用 `v-if` 和 `v-for`。**

有两个常见的场景可能会让人产生这样的诱惑：

- 在列表中筛选项目（例如 `v-for="user in users" v-if="user.isActive"`）。在这种情况下，使用计算属性替换 `users`，返回筛选后的列表（例如 `activeUsers`）。
- 如果列表应该隐藏时，避免渲染列表（例如 `v-for="user in users" v-if="shouldShowUsers"`）。在这种情况下，将 `v-if` 移动到容器元素（例如 `ul`、`ol`）上。

::: details 详细解释
当 Vue 处理指令时，`v-if` 的优先级高于 `v-for`，因此以下模板：

```vue-html
<ul>
    <li
        v-for="user in users"
        v-if="user.isActive"
        :key="user.id"
    >
        {{ user.name }}
    </li>
</ul>
```

会抛出错误，因为 `v-if` 指令会首先被评估，而此时迭代变量 `user` 不存在。

可以通过迭代计算属性来解决此问题，如下所示：

<div class="options-api">

```js
computed: {
    activeUsers() {
        return this.users.filter(user => user.isActive)
    }
}
```

</div>

<div class="composition-api">

```js
const activeUsers = computed(() => {
    return users.filter((user) => user.isActive)
})
```

</div>

```vue-html
<ul>
    <li
        v-for="user in activeUsers"
        :key="user.id"
    >
        {{ user.name }}
    </li>
</ul>
```

或者，我们可以使用 `<template>` 标签包裹 `<li>` 元素，配合 `v-for`：

```vue-html
<ul>
    <template v-for="user in users" :key="user.id">
        <li v-if="user.isActive">
            {{ user.name }}
        </li>
    </template>
</ul>
```

:::

<div class="style-example style-example-bad">
<h3>Bad</h3>

```vue-html
<ul>
    <li
        v-for="user in users"
        v-if="user.isActive"
        :key="user.id"
    >
        {{ user.name }}
    </li>
</ul>
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```vue-html
<ul>
    <li
        v-for="user in activeUsers"
        :key="user.id"
    >
        {{ user.name }}
    </li>
</ul>
```

```vue-html
<ul>
    <template v-for="user in users" :key="user.id">
        <li v-if="user.isActive">
            {{ user.name }}
        </li>
    </template>
</ul>
```

</div>

## 使用组件范围的样式 {#use-component-scoped-styling}

对于应用程序，顶级 `App` 组件和布局组件中的样式可以是全局的，但所有其他组件应始终使用作用域样式。

这仅与[单文件组件](/guide/scaling-up/sfc)相关。它_不_要求使用 [`scoped` 属性](https://vue-loader.vuejs.org/guide/scoped-css.html)。作用域样式可以通过[CSS 模块](https://vue-loader.vuejs.org/guide/css-modules.html)、基于类的策略（如[BEM](

http://getbem.com/)）或其他库/约定来实现。

**然而，组件库应优先使用基于类的策略，而不是使用 `scoped` 属性。**

这使得覆盖内部样式更加容易，类名具有可读性，且具有较低的特异性，但仍然非常不容易发生冲突。

::: details 详细解释
如果你正在开发一个大型项目，与其他开发者合作，或有时包含第三方 HTML/CSS（例如来自 Auth0），一致的样式作用域可以确保样式仅应用于它们所针对的组件。

除了 `scoped` 属性之外，使用唯一的类名有助于确保第三方 CSS 不会应用到你自己的 HTML 上。例如，许多项目使用 `button`、`btn` 或 `icon` 类名，因此即使不使用 BEM 这样的策略，为类名前添加特定的应用程序或组件前缀（例如 `ButtonClose-icon`）也可以提供一定的保护。
:::

<div class="style-example style-example-bad">
<h3>Bad</h3>

```vue-html
<template>
    <button class="btn btn-close">×</button>
</template>

<style>
.btn-close {
    background-color: red;
}
</style>
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```vue-html
<template>
    <button class="button button-close">×</button>
</template>

<!-- 使用 `scoped` 属性 -->
<style scoped>
.button {
    border: none;
    border-radius: 2px;
}

.button-close {
    background-color: red;
}
</style>
```

```vue-html
<template>
    <button :class="[$style.button, $style.buttonClose]">×</button>
</template>

<!-- 使用 CSS 模块 -->
<style module>
.button {
    border: none;
    border-radius: 2px;
}

.buttonClose {
    background-color: red;
}
</style>
```

```vue-html
<template>
    <button class="c-Button c-Button--close">×</button>
</template>

<!-- 使用 BEM 约定 -->
<style>
.c-Button {
    border: none;
    border-radius: 2px;
}

.c-Button--close {
    background-color: red;
}
</style>
```

</div>
