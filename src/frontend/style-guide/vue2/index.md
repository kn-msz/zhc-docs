---
outline: deep
---

# vue2 规范 {#vue-standard}

这里是官方的 Vue 特有代码的风格指南。如果在工程中使用
Vue，为了回避错误、小纠结和反模式，该指南是份不错的参考。不过我们也不确信风格指南的所有内容对于所有的团队或工程都是理想的。所以根据过去的经验、周围的技术栈、个人价值观做出有意义的偏差是可取的。

对于其绝大部分，我们也总体上避免就 JavaScript 或 HTML 的本身提出建议。我们不介意你是否使用分号或结尾的逗号。我们不介意你在
HTML attribute 中使用单引号还是双引号。不过当我们发现在 Vue 的情景下有帮助的特定模式时，也会存在例外。

## 规则归类{#rule-categories}

### 优先级 A：必要的{#priority-a-essential}

这些规则会帮你规避错误，所以学习并接受它们带来的全部代价吧。这里面可能存在例外，但应该非常少，且只有你同时精通 JavaScript 和
Vue 才可以这样做。

- [查看所有 A 级规则](./rules-essential)

### 优先级 B：强烈推荐{#priority-b-strongly-recommended}

这些规则能够在绝大多数工程中改善可读性和开发体验。即使你违反了，代码还是能照常运行，但例外应该尽可能少且有合理的理由。

- [查看所有 B 级规则](./rules-strongly-recommended)


### 优先级 C：推荐{#priority-c-recommended}

当存在多个同样好的选项，选任意一个都可以确保一致性。在这些规则里，我们描述了每个选项并建议一个默认的选择。也就是说只要保持一致且理由充分，你可以随意在你的代码库中做出不同的选择。请务必给出一个好的理由！通过接受社区的标准，你将会：

1. 训练你的大脑，以便更容易的处理你在社区遇到的代码；
2. 不做修改就可以直接复制粘贴社区的代码示例；
3. 能够经常招聘到和你编码习惯相同的新人，至少跟 Vue 相关的东西是这样的。

- [查看所有 C 级规则](./rules-recommended)

### 优先级 D：谨慎使用{#priority-d-use-with-caution}

有些 Vue 特性的存在是为了照顾极端情况或帮助老代码的平稳迁移。当被过度使用时，这些特性会让你的代码难于维护甚至变成 bug
的来源。这些规则是为了给有潜在风险的特性敲个警钟，并说明它们什么时候不应该使用以及为什么。

- [查看所有 D 级规则](./rules-use-with-caution)
