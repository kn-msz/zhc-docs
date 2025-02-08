---
outline: deep
---

# 列表

## 基础使用
:::demo 使用 `formButton` 来定义 按钮栏
list/base
:::


## 按钮栏

### 基础使用

:::demo 使用 `formButton` 来定义 按钮栏
list/button/base
:::

### 隐藏与禁用

:::demo 使用 `isShow` `disabled` 来定义 是否显示 是否禁用
list/button/is-show
:::

### 携带参数

:::demo 使用 `params` 来传递参数
list/button/params
:::

### 自定义内容

:::demo 使用 `render` 来定义 内容
list/button/render-content
:::

## 筛选栏

:::demo 使用 `formTab` 来定义 筛选栏
list/tab
:::

## 搜索栏

:::demo 使用 `formItem`, `dataForm`, `debounce`, `query` 来定义 筛选栏
list/select
:::

## List API

### FormButton Props

| 属性名    | 说明    | 类型                                                                           | 默认值     |
|--------|-------|------------------------------------------------------------------------------|---------|
| name   | 内容    | ^[string]                                                                    | /       |
| type   | 按钮类型  | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text'` | default |
| icon   | 图标    | ^[string]                                                                    | /       |
| size   | 大小    | ^[string]                                                                    | small   |
| isShow | 是否显示  | ^[boolean]                                                                   | —       |
| render | 自定义内容 | ^[Function]`() => VNode`                                                     | —       |

### FormTab Props

| 属性名      | 说明                                      | 类型                                  | 默认值 |
|----------|-----------------------------------------|-------------------------------------|-----|
| formTab  | 内容 类型见 [FormTabType](#formtabtype-type) | ^[FormTabType]                      | /   |
| dataForm | 绑定值                                     | ^[object]                           | /   |
| query    | 切换事件                                    | ^[Function]`(name: string) => void` | /   |

### FormTabType Type

### FormSelect Props

| 属性名      | 说明                                | 类型                                  | 默认值 |
|----------|-----------------------------------|-------------------------------------|-----|
| formItem | 内容 类型见 [FormItem](#formItem-type) | ^[FormTabType]                      | /   |
| dataForm | 绑定值                               | ^[object]                           | /   |
| query    | 搜索事件                              | ^[Function]`(name: string) => void` | /   |
| debounce | 延迟                                | ^[number]                           | 500 |

``` typescript
type FormTabType = {
    list: {
        label: string,
        isShow?: boolean,
        name: string,
    },
    prop: string,
}
```

### FormItem Type

``` typescript
type FormItemType = {
    prop: string
    label: string
    type: 'text' | 'tree-select' | 'select' | 'switch' | 'number' | 'date' | 'year'
}
```


