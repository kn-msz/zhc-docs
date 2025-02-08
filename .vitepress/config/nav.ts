import type { Config as ThemeConfig } from '../../modules/theme'

export const nav: ThemeConfig['nav'] = [
    {
        text: '前端',
        activeMatch: `^/(frontend|style-guide|cookbook|examples)/`,
        items: [
            { text: '规范', link: '/frontend/style-guide/' },
            { text: '主题', link: '/frontend/theme/' },
            { text: '架构', link: '/frontend/architecture/' },
            { text: '组件', link: '/frontend/components/' },
        ]
    },
    {
        text: '后端',
        activeMatch: `^/(backend|style-guide|cookbook|examples)/`,
        items: [
            { text: '规范', link: '/backend/introduction' },
            { text: '架构', link: '/backend/architecture' },
            { text: '公共方法', link: '/backend/shared-methods/' },
        ]
    },
    {
        text: '实施',
        activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
        items: [
            { text: '常用sql', link: '/implementation/sql-guide' },
            { text: '部署文档', link: '/implementation/deployment' },
        ]
    },
    {
        text: '全览',
        activeMatch: `^/overview/`,
        link: '/overview/'
    },
    {
        text: '关于',
        activeMatch: `^/about/`,
        items: [
            {
                text: '写作',
                link: 'https://vitepress.dev/zh/guide/markdown'
            },
            { text: '常见问题', link: '/about/faq' },
            { text: '团队', link: '/about/team' },
            { text: '版本发布', link: '/about/releases' },
            {
                text: '社区指南',
                link: '/about/community-guide'
            },
            { text: '行为规范', link: '/about/coc' },
            { text: '隐私政策', link: '/about/privacy' },
        ]
    },
]
