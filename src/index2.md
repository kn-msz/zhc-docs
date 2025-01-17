---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 正成科技
  text: 文档管理
  tagline: 文档
  actions:
    - theme: brand
      text: 代码规范
      link: /code-guidelines
    - theme: alt
      text: 实施指南
      link: /implementation-guide

  image:
    src: /vitepress-logo-large.webp
    alt: 正成科技

features:
  - icon: 📝
    title: 代码规范
    details: 严格规范前后端代码风格、命名规则和文件结构，保障项目的高可读性与可维护性。
  - icon: ⚙️
    title: 前端架构&主题
    details: 深入解析前端架构设计与主题开发，涵盖模块化、组件化及性能优化，助力高效开发。
  - icon: 📈
    title: 实施指南
    details: 提供清晰的项目实施流程，包括需求分析、开发步骤、测试部署及常见问题解决方案。
  - icon: 🛠️
    title: 组件规范
    details: 统一组件开发标准，从目录结构到数据流管理，全面提升组件复用性与一致性。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
