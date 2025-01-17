---
outline: deep
---

# 优先级 B 的规则：强烈推荐 {#priority-b-rules-strongly-recommended}

这些规则能够在绝大多数工程中改善可读性和开发体验。即使你违反了，代码还是能照常运行，但例外应该尽可能少且有合理的理由。

## 组件文件<sup class="vt-badge" data-text="强烈推荐" />{#component-files-strongly-recommended}

**只要有能够拼接文件的构建系统，就把每个组件单独分成文件。**

当你需要编辑一个组件或查阅一个组件的用法时，可以更快速的找到它。

<div class="style-example style-example-bad">
<h3>Bad</h3>

``` js
Vue.component('TodoList', {
    // ...
})

Vue.component('TodoItem', {
    // ...
})
```

</div>


<div class="style-example style-example-good">
<h3>Good</h3>

```
components/
    |- TodoList.js
    |- TodoItem.js
```

```
components/
    |- TodoList.vue
    |- TodoItem.vue
```

</div>

## 单文件组件文件名的大小写<sup class="vt-badge" data-text="强烈推荐" />{#Single-file-component-filename-casing-strongly-recommended}

**[单文件组件](https://v2.cn.vuejs.org/v2/guide/single-file-components.html)的文件名应该要么始终是单词大写开头 (
PascalCase)，要么始终是横线连接 (kebab-case)。**

单词大写开头对于代码编辑器的自动补全最为友好，因为这使得我们在 JS(X)
和模板中引用组件的方式尽可能的一致。然而，混用文件命名方式有的时候会导致大小写不敏感的文件系统的问题，这也是横线连接命名同样完全可取的原因。

<div class="style-example style-example-bad">
<h3>Bad</h3>

```
components/
    |- mycomponent.vue
```

```
components/
    |- myComponent.vue
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```
components/
    |- MyComponent.vue
```

```
components/
    |- my-component.vue
```

</div>

## 基础组件名<sup class="vt-badge" data-text="强烈推荐" />{#base-component-names-strongly-recommended}

**应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 `Base`、`App`
或 `V`。**

::: details 详解

这些组件为你的应用奠定了一致的基础样式和行为。它们可能**只**包括：

- HTML 元素
- 其它基础组件
- 第三方 UI 组件库

但是它们**绝不会**包括全局状态 (比如来自 Vuex store)。

它们的名字通常包含所包裹元素的名字 (比如 `BaseButton`、`BaseTable`)，除非没有现成的对应功能的元素 (比如 `BaseIcon`)
。如果你为特定的上下文构建类似的组件，那它们几乎总会消费这些组件 (比如 `BaseButton` 可能会用在 `ButtonSubmit` 上)。

这样做的几个好处：

- 当你在编辑器中以字母顺序排序时，你的应用的基础组件会全部列在一起，这样更容易识别。

- 因为组件名应该始终是多个单词，所以这样做可以避免你在包裹简单组件时随意选择前缀 (比如 `MyButton`、`VueButton`)。

:::

<div class="style-example style-example-bad">
<h3>Bad</h3>

```
components/
    |- MyButton.vue
    |- VueTable.vue
    |- Icon.vue
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```
components/
    |- BaseButton.vue
    |- BaseTable.vue
    |- BaseIcon.vue
```

```
components/
    |- AppButton.vue
    |- AppTable.vue
    |- AppIcon.vue
```

```
components/
    |- VButton.vue
    |- VTable.vue
    |- VIcon.vue
```

</div>

## 单例组件名<sup class="vt-badge" data-text="强烈推荐" />{#single-instance-component-names-strongly-recommended}

**只应该拥有单个活跃实例的组件应该以 `The` 前缀命名，以示其唯一性。**

这不意味着组件只可用于一个单页面，而是*每个页面*只使用一次。这些组件永远不接受任何
prop，因为它们是为你的应用定制的，而不是它们在你的应用中的上下文。如果你发现有必要添加 prop，那就表明这实际上是一个可复用的组件，
*只是目前*在每个页面里只使用一次。

<div class="style-example style-example-bad">
<h3>Bad</h3>

```
components/
|- Heading.vue
|- MySidebar.vue
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```
components/
|- TheHeading.vue
|- TheSidebar.vue
```

</div>

## 紧密耦合的组件名<sup class="vt-badge" data-text="强烈推荐" />{#tightly-coupled-component-names-strongly-recommended}

**和父组件紧密耦合的子组件应该以父组件名作为前缀命名。**

如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

::: details 详解

你可以试着通过在其父组件命名的目录中嵌套子组件以解决这个问题。比如：

```
components/
|- TodoList/
    |- Item/
        |- index.vue
        |- Button.vue
    |- index.vue
```

或：

```
components/
|- TodoList/
    |- Item/
        |- Button.vue
    |- Item.vue
|- TodoList.vue
```

但是这种方式并不推荐，因为这会导致：

- 许多文件的名字相同，使得在编辑器中快速切换文件变得困难。
- 过多嵌套的子目录增加了在编辑器侧边栏中浏览组件所花的时间。

:::

<div class="style-example style-example-bad">
<h3>Bad</h3>

```
components/
    |- TodoList.vue
    |- TodoItem.vue
    |- TodoButton.vue
```

```
components/
    |- SearchSidebar.vue
    |- NavigationForSearchSidebar.vue
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```
components/
    |- TodoList.vue
    |- TodoListItem.vue
    |- TodoListItemButton.vue
```

```
components/
    |- SearchSidebar.vue
    |- SearchSidebarNavigation.vue
```

</div>

## 组件名中的单词顺序<sup class="vt-badge" data-text="强烈推荐" />{#order-of-words-in-component-names-strongly-recommended}

**组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。**

::: details 详解

你可能会疑惑：

> “为什么我们给组件命名时不多遵从自然语言呢？”

在自然的英文里，形容词和其它描述语通常都出现在名词之前，否则需要使用连接词。比如：

- Coffee _with_ milk
- Soup _of the_ day
- Visitor _to the_ museum

如果你愿意，你完全可以在组件名里包含这些连接词，但是单词的顺序很重要。

同样要注意**在你的应用中所谓的“高级别”是跟语境有关的**。比如对于一个带搜索表单的应用来说，它可能包含这样的组件：

```
components/
    |- ClearSearchButton.vue
    |- ExcludeFromSearchInput.vue
    |- LaunchOnStartupCheckbox.vue
    |- RunSearchButton.vue
    |- SearchInput.vue
    |- TermsCheckbox.vue
```

你可能注意到了，我们很难看出来哪些组件是针对搜索的。现在我们来根据规则给组件重新命名：

```
components/
    |- SearchButtonClear.vue
    |- SearchButtonRun.vue
    |- SearchInputExcludeGlob.vue
    |- SearchInputQuery.vue
    |- SettingsCheckboxLaunchOnStartup.vue
    |- SettingsCheckboxTerms.vue
```

因为编辑器通常会按字母顺序组织文件，所以现在组件之间的重要关系一目了然。

你可能想换成多级目录的方式，把所有的搜索组件放到“search”目录，把所有的设置组件放到“settings”目录。我们只推荐在非常大型 (如有
100+ 个组件) 的应用下才考虑这么做，因为：

- 在多级目录间找来找去，要比在单个 `components` 目录下滚动查找要花费更多的精力。
- 存在组件重名 (比如存在多个 `ButtonDelete` 组件) 的时候在编辑器里更难快速定位。
- 让重构变得更难，因为为一个移动了的组件更新相关引用时，查找/替换通常并不高效。

:::

<div class="style-example style-example-bad">
<h3>Bad</h3>

```
components/
    |- ClearSearchButton.vue
    |- ExcludeFromSearchInput.vue
    |- LaunchOnStartupCheckbox.vue
    |- RunSearchButton.vue
    |- SearchInput.vue
    |- TermsCheckbox.vue
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```
components/
    |- SearchButtonClear.vue
    |- SearchButtonRun.vue
    |- SearchInputQuery.vue
    |- SearchInputExcludeGlob.vue
    |- SettingsCheckboxTerms.vue
    |- SettingsCheckboxLaunchOnStartup.vue
```

</div>

## 自闭合组件<sup class="vt-badge" data-text="强烈推荐" />{#self-closing-components-strongly-recommended}

**在[单文件组件](https://v2.cn.vuejs.org/v2/guide/single-file-components.html)
、字符串模板和 [JSX](https://v2.cn.vuejs.org/v2/guide/render-function.html#JSX) 中没有内容的组件应该是自闭合的——但在 DOM
模板里永远不要这样做。**

自闭合组件表示它们不仅没有内容，而且**刻意**没有内容。其不同之处就好像书上的一页白纸对比贴有“本页有意留白”标签的白纸。而且没有了额外的闭合标签，你的代码也更简洁。

不幸的是，HTML 并不支持自闭合的自定义元素——只有[官方的“空”元素](https://www.w3.org/TR/html/syntax.html#void-elements)
。所以上述策略仅适用于进入 DOM 之前 Vue 的模板编译器能够触达的地方，然后再产出符合 DOM 规范的 HTML。

<div class="style-example style-example-bad">
<h3>Bad</h3>

``` html
<!-- 在单文件组件、字符串模板和 JSX 中 -->
<MyComponent></MyComponent>
```

``` html
<!-- 在 DOM 模板中 -->
<my-component/>
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

``` html
<!-- 在单文件组件、字符串模板和 JSX 中 -->
<MyComponent/>
```

``` html
<!-- 在 DOM 模板中 -->
<my-component></my-component>
```

</div>

## 模板中的组件名大小写<sup class="vt-badge" data-text="强烈推荐" />{#component-name-casing-in-templates-strongly-recommended}

**对于绝大多数项目来说，在[单文件组件](https://v2.cn.vuejs.org/v2/guide/single-file-components.html)和字符串模板中组件名应该总是
PascalCase 的——但是在 DOM 模板中总是 kebab-case 的。**

PascalCase 相比 kebab-case 有一些优势：

- 编辑器可以在模板里自动补全组件名，因为 PascalCase 同样适用于 JavaScript。
- `<MyComponent>` 视觉上比 `<my-component>` 更能够和单个单词的 HTML 元素区别开来，因为前者的不同之处有两个大写字母，后者只有一个横线。
- 如果你在模板中使用任何非 Vue 的自定义元素，比如一个 Web Component，PascalCase 确保了你的 Vue 组件在视觉上仍然是易识别的。

不幸的是，由于 HTML 是大小写不敏感的，在 DOM 模板中必须仍使用 kebab-case。

还请注意，如果你已经是 kebab-case 的重度用户，那么与 HTML 保持一致的命名约定且在多个项目中保持相同的大小写规则就可能比上述优势更为重要了。在这些情况下，
**在所有的地方都使用 kebab-case 同样是可以接受的。**

<div class="style-example style-example-bad">
<h3>Bad</h3>

``` html
<!-- 在单文件组件和字符串模板中 -->
<mycomponent/>
```

``` html
<!-- 在单文件组件和字符串模板中 -->
<myComponent/>
```

``` html
<!-- 在 DOM 模板中 -->
<MyComponent></MyComponent>
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

``` html
<!-- 在单文件组件和字符串模板中 -->
<MyComponent/>
```

``` html
<!-- 在 DOM 模板中 -->
<my-component></my-component>
```

或者

``` html
<!-- 在所有地方 -->
<my-component></my-component>
```

</div>

## JS/JSX 中的组件名大小写<sup class="vt-badge" data-text="强烈推荐" /> {#component-name-casing-in-JS-JSX-strongly-recommended}

**JS/[JSX](https://v2.cn.vuejs.org/v2/guide/render-function.html#JSX) 中的组件名应该始终是 PascalCase
的，尽管在较为简单的应用中只使用 `Vue.component` 进行全局组件注册时，可以使用 kebab-case 字符串。**

::: details 详解

在 JavaScript 中，PascalCase 是类和构造函数 (本质上任何可以产生多份不同实例的东西) 的命名约定。Vue 组件也有多份实例，所以同样使用
PascalCase 是有意义的。额外的好处是，在 JSX (和模板) 里使用 PascalCase 使得代码的读者更容易分辨 Vue 组件和 HTML 元素。

然而，对于**只**通过 `Vue.component` 定义全局组件的应用来说，我们推荐 kebab-case 作为替代。原因是：

- 全局组件很少被 JavaScript 引用，所以遵守 JavaScript 的命名约定意义不大。
- 这些应用往往包含许多 DOM 内的模板，这种情况下是[**必须**使用 kebab-case](#模板中的组件名大小写-强烈推荐) 的。

:::

<div class="style-example style-example-bad">
<h3>Bad</h3>

``` js
Vue.component('myComponent', {
    // ...
})
```

``` js
import myComponent from './MyComponent.vue'
```

``` js
export default {
    name: 'myComponent',
    // ...
}
```

``` js
export default {
    name: 'my-component',
    // ...
}
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

``` js
Vue.component('MyComponent', {
    // ...
})
```

``` js
Vue.component('my-component', {
    // ...
})
```

``` js
import MyComponent from './MyComponent.vue'
```

``` js
export default {
    name: 'MyComponent',
    // ...
}
```

</div>

## 完整单词的组件名<sup class="vt-badge" data-text="强烈推荐" />{#full-word-component-names-strongly-recommended}

**组件名应该倾向于完整单词而不是缩写。**

编辑器中的自动补全已经让书写长命名的代价非常之低了，而其带来的明确性却是非常宝贵的。不常用的缩写尤其应该避免。

<div class="style-example style-example-bad">
<h3>Bad</h3>

```
components/
    |- SdSettings.vue
    |- UProfOpts.vue
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

```
components/
    |- StudentDashboardSettings.vue
    |- UserProfileOptions.vue
```

</div>

## Prop 名大小写<sup class="vt-badge" data-text="强烈推荐" /> {#prop-name-casing-strongly-recommended}

**在声明 prop 的时候，其命名应该始终使用
camelCase，而在模板和 [JSX](https://v2.cn.vuejs.org/v2/guide/render-function.html#JSX) 中应该始终使用 kebab-case。**

我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。

<div class="style-example style-example-bad">
<h3>Bad</h3>

``` js
props: {
    'greeting-text': String
}
```

``` html
<WelcomeMessage greetingText="hi"/>

```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

``` js
props: {
    greetingText: String
}
```

``` html
<WelcomeMessage greeting-text="hi"/>
```

</div>

## 多个 attribute 的元素<sup class="vt-badge" data-text="强烈推荐" /> {#multi-attribute-elements-strongly-recommended}

**多个 attribute 的元素应该分多行撰写，每个 attribute 一行。**

在 JavaScript 中，用多行分隔对象的多个 property
是很常见的最佳实践，因为这样更易读。模板和 [JSX](https://v2.cn.vuejs.org/v2/guide/render-function.html#JSX) 值得我们做相同的考虑。

<div class="style-example style-example-bad">
<h3>Bad</h3>

``` html
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo">
```

``` html
<MyComponent foo="a" bar="b" baz="c"/>
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

``` html
<img
    src="https://vuejs.org/images/logo.png"
    alt="Vue Logo"
>
```

``` html
<MyComponent
    foo="a"
    bar="b"
    baz="c"
/>
```

</div>

## 模板中简单的表达式<sup class="vt-badge" data-text="强烈推荐" />{#simple-expressions-in-templates-strongly-recommended}

**组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。**

复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的*是什么*，而非*如何*计算那个值。而且计算属性和方法使得代码可以重用。

<div class="style-example style-example-bad">
<h3>Bad</h3>

``` html
{{
    fullName.split(' ').map(function (word) {
        return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
}}
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

``` html
<!-- 在模板中 -->
{{ normalizedFullName }}
```

``` js
// 复杂表达式已经移入一个计算属性
computed: {
    normalizedFullName: function () {
        return this.fullName.split(' ').map(function (word) {
            return word[0].toUpperCase() + word.slice(1)
        }).join(' ')
    }
}
```

</div>

## 简单的计算属性<sup class="vt-badge" data-text="强烈推荐" />{#simple-computed-properties-strongly-recommended}

**应该把复杂计算属性分割为尽可能多的更简单的 property。**

::: details 详解

更简单、命名得当的计算属性是这样的：

- **易于测试**

  当每个计算属性都包含一个非常简单且很少依赖的表达式时，撰写测试以确保其正确工作就会更加容易。

- **易于阅读**

  简化计算属性要求你为每一个值都起一个描述性的名称，即便它不可复用。这使得其他开发者 (以及未来的你)
  更容易专注在他们关心的代码上并搞清楚发生了什么。

- **更好的“拥抱变化”**

  任何能够命名的值都可能用在视图上。举个例子，我们可能打算展示一个信息，告诉用户他们存了多少钱；也可能打算计算税费，但是可能会分开展现，而不是作为总价的一部分。

  小的、专注的计算属性减少了信息使用时的假设性限制，所以需求变更时也用不着那么多重构了。

:::

<div class="style-example style-example-bad">
<h3>Bad</h3>

``` js
computed: {
    price: function () {
        var basePrice = this.manufactureCost / (1 - this.profitMargin)
        return (
          basePrice -
          basePrice * (this.discountPercent || 0)
        )
    }
}
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

``` js
computed: {
    basePrice: function () {
        return this.manufactureCost / (1 - this.profitMargin)
    },
    discount: function () {
        return this.basePrice * (this.discountPercent || 0)
    },
    finalPrice: function () {
        return this.basePrice - this.discount
    }
}
```

</div>

## 带引号的 attribute 值<sup class="vt-badge" data-text="强烈推荐" />{#quoted-attribute-values-strongly-recommended}

**非空 HTML attribute 值应该始终带引号 (单引号或双引号，以 JS 中未使用的为准)。**

在 HTML 中不带空格的 attribute 值是可以没有引号的，但这鼓励了大家在特征值里*不写*空格，导致可读性变差。

<div class="style-example style-example-bad">
<h3>Bad</h3>

``` html
<input type=text>
```

``` html
<AppSidebar :style={width:sidebarWidth+'px'}>
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

``` html
<input type="text">
```

``` html
<AppSidebar :style="{ width: sidebarWidth + 'px' }">
```

</div>

## 指令缩写<sup class="vt-badge" data-text="强烈推荐" />{#Directive-shorthands-strongly-recommended}

**指令缩写 (用 `:` 表示 `v-bind:`、用 `@` 表示 `v-on:` 和用 `#` 表示 `v-slot:`) 应该要么都用要么都不用。**

<div class="style-example style-example-bad">
<h3>Bad</h3>

``` html
<input
    v-bind:value="newTodoText"
    :placeholder="newTodoInstructions"
>
```

``` html
<input
    v-on:input="onInput"
    @focus="onFocus"
>
```

``` html
<template v-slot:header>
    <h1>Here might be a page title</h1>
</template>

<template #footer>
    <p>Here's some contact info</p>
</template>
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

``` html
<input
    :value="newTodoText"
    :placeholder="newTodoInstructions"
>
```

``` html
<input
    v-bind:value="newTodoText"
    v-bind:placeholder="newTodoInstructions"
>
```

``` html
<input
    @input="onInput"
    @focus="onFocus"
>
```

``` html
<input
    v-on:input="onInput"
    v-on:focus="onFocus"
>
```

``` html
<template v-slot:header>
    <h1>Here might be a page title</h1>
</template>

<template v-slot:footer>
    <p>Here's some contact info</p>
</template>
```

``` html
<template #header>
    <h1>Here might be a page title</h1>
</template>

<template #footer>
    <p>Here's some contact info</p>
</template>
```

</div>
