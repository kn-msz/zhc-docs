---
outline: deep
---

# 优先级 D 的规则：谨慎使用 {#priority-d-rules-use-with-caution}

有些 Vue 特性的存在是为了照顾极端情况或帮助老代码的平稳迁移。当被过度使用时，这些特性会让你的代码难于维护甚至变成 bug
的来源。这些规则是为了给有潜在风险的特性敲个警钟，并说明它们什么时候不应该使用以及为什么。

## 没有在 `v-if`/`v-else-if`/`v-else` 中使用
`key` <sup class="vt-badge" data-text="谨慎使用" />{#v-if-v-else-if-v-else-without-key-use-with-caution}

**如果一组 `v-if` + `v-else` 的元素类型相同，最好使用 `key` (比如两个 `<div>` 元素)。**

默认情况下，Vue 会尽可能高效的更新
DOM。这意味着其在相同类型的元素之间切换时，会修补已存在的元素，而不是将旧的元素移除然后在同一位置添加一个新元素。如果本不相同的元素被识别为相同，则会出现[意料之外的结果](https://codesandbox.io/s/github/vuejs/v2.vuejs.org/tree/master/src/v2/examples/vue-20-priority-d-rules-unintended-consequences)。

<div class="style-example style-example-bad">
<h3>Bad</h3>

``` html
<div v-if="error">
    错误：{{ error }}
</div>
<div v-else>
    {{ results }}
</div>
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

``` html
<div
    v-if="error"
    key="search-status"
>
    错误：{{ error }}
</div>
<div
    v-else
    key="search-results"
>
    {{ results }}
</div>
```

</div>

## `scoped` 中的元素选择器<sup class="vt-badge" data-text="谨慎使用" />{#element-selectors-with-scoped-use-with-caution}

**元素选择器应该避免在 `scoped` 中出现。**

在 `scoped` 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。

::: details 详解

为了给样式设置作用域，Vue 会为元素添加一个独一无二的 attribute，例如 `data-v-f3f3eg9`。然后修改选择器，使得在匹配选择器的元素中，只有带这个
attribute 才会真正生效 (比如 `button[data-v-f3f3eg9]`)。

问题在于大量的元素和 attribute 组合的选择器 (比如 `button[data-v-f3f3eg9]`) 会比类和 attribute 组合的选择器 (比如
`.btn-close[data-v-f3f3eg9]`) 慢，所以应该尽可能选用类选择器。

:::

<div class="style-example style-example-bad">
<h3>Bad</h3>

``` html
<template>
    <button>X</button>
</template>

<style scoped>
button {
    background-color: red;
}
</style>
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

``` html
<template>
    <button class="btn btn-close">X</button>
</template>

<style scoped>
.btn-close {
    background-color: red;
}
</style>
```

</div>

## 隐性的父子组件通信<sup class="vt-badge" data-text="谨慎使用" />{#implicit-parent-child-communication-use-with-caution}

**应该优先通过 prop 和事件进行父子组件之间的通信，而不是 `this.$parent` 或变更 prop。**

一个理想的 Vue 应用是 prop 向下传递，事件向上传递的。遵循这一约定会让你的组件更易于理解。然而，在一些边界情况下 prop 的变更或
`this.$parent` 能够简化两个深度耦合的组件。

问题在于，这种做法在很多*简单*的场景下可能会更方便。但请当心，不要为了一时方便 (少写代码) 而牺牲数据流向的简洁性 (
易于理解)。

<div class="style-example style-example-bad">
<h3>Bad</h3>

``` js
Vue.component('TodoItem', {
    props: {
        todo: {
          type: Object,
          required: true
        }
    },
    template: '<input v-model="todo.text">'
})
```

``` js
Vue.component('TodoItem', {
    props: {
        todo: {
          type: Object,
          required: true
        }
    },
    methods: {
        removeTodo () {
            var vm = this
            vm.$parent.todos = vm.$parent.todos.filter(function (todo) {
                return todo.id !== vm.todo.id
            })
        }
    },
    template: `
    <span>
        {{ todo.text }}
        <button @click="removeTodo">
            X
        </button>
    </span>
  `
})
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

``` js
Vue.component('TodoItem', {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    template: `
        <input
          :value="todo.text"
          @input="$emit('input', $event.target.value)"
        >
    `
})
```

``` js
Vue.component('TodoItem', {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    template: `
        <span>
            {{ todo.text }}
            <button @click="$emit('delete')">
                X
            </button>
        </span>
    `
})
```

</div>

## 非 Flux 的全局状态管理<sup class="vt-badge" data-text="谨慎使用" /> {#non-flux-state-management-use-with-caution}

**应该优先通过 [Vuex](https://github.com/vuejs/vuex) 管理全局状态，而不是通过 `this.$root` 或一个全局事件总线。**

通过 `this.$root` 和/或[全局事件总线](https://v2.cn.vuejs.org/v2/guide/migration.html#dispatch-和-broadcast-替换)
管理状态在很多简单的情况下都是很方便的，但是并不适用于绝大多数的应用。

Vuex 是 Vue 的[官方类 flux 实现](https://v2.cn.vuejs.org/v2/guide/state-management.html#类-Flux-状态管理的官方实现)
，其提供的不仅是一个管理状态的中心区域，还是组织、追踪和调试状态变更的好工具。它很好地集成在了 Vue 生态系统之中 (
包括完整的 [Vue DevTools](https://v2.cn.vuejs.org/v2/guide/installation.html#Vue-Devtools) 支持)。

:::

<div class="style-example style-example-bad">
<h3>Bad</h3>

``` js
// main.js
new Vue({
  	data: {
    	todos: []
  	},
  	created: function () {
    	this.$on('remove-todo', this.removeTodo)
  	},
  	methods: {
    	removeTodo: function (todo) {
      		var todoIdToRemove = todo.id
      		this.todos = this.todos.filter(function (todo) {
        		return todo.id !== todoIdToRemove
      		})
    	}
  	}
})
```

</div>

<div class="style-example style-example-good">
<h3>Good</h3>

``` js
// store/modules/todos.js
export default {
    state: {
        list: []
    },
    mutations: {
        REMOVE_TODO (state, todoId) {
            state.list = state.list.filter(todo => todo.id !== todoId)
        }
    },
    actions: {
        removeTodo ({ commit, state }, todo) {
            commit('REMOVE_TODO', todo.id)
        }
    }
}
```

``` html
<!-- TodoItem.vue -->
<template>
    <span>
        {{ todo.text }}
        <button @click="removeTodo(todo)">
            X
        </button>
    </span>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
  	},
  	methods: mapActions(['removeTodo'])
}
</script>
```

</div>
