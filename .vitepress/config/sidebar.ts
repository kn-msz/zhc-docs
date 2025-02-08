import type { Config as ThemeConfig } from '@modules/theme'

export const sidebar: ThemeConfig['sidebar'] = {
    '/frontend/theme/': [
        {
            text: '主题',
            items: [
                { text: '概述', link: '/frontend/theme/' },
                { text: 'Color 色彩', link: '/frontend/theme/color' },
                { text: 'Corner 边角', link: '/frontend/theme/corner' },
                { text: 'Font 字体', link: '/frontend/theme/font' },
                { text: 'Line 线条', link: '/frontend/theme/line' },
                { text: 'Shadow 阴影', link: '/frontend/theme/shadow' },
                { text: '切换主题', badge: { text: '待完善', type: 'warning' }, link: '' },
            ]
        },
        // {
        //     text: '架构',
        //     items: [
        //         { text: '简介', link: '/frontend/architecture/introduction' },
        //         { text: '目录结构', link: '/frontend/architecture/structure' },
        //         { text: '模块化设计', link: '/frontend/architecture/modules' },
        //         { text: '组件设计', link: '/frontend/architecture/components' },
        //         { text: '性能优化', link: '/frontend/architecture/performance' },
        //     ]
        // },
    ],
    '/frontend/style-guide': [
        {
            text: '前端规范',
            items: [
                { text: '概述', link: '/frontend/style-guide/' },
                { text: 'HTML 规范', link: '/frontend/style-guide/html' },
                { text: 'CSS 规范', link: '/frontend/style-guide/css' },
                { text: 'JavaScript 规范', link: '/frontend/style-guide/javascript' },
                { text: 'TypeScript 规范', link: '/frontend/style-guide/typescript' },
            ]
        },
        {
            text: 'Vue规范',
            items: [
                {
                    text: '概述',
                    link: '/frontend/style-guide/vue2'
                },
                {
                    text: 'A - 必要的',
                    link: '/frontend/style-guide/vue2/rules-essential'
                },
                {
                    text: 'B - 强烈建议',
                    link: '/frontend/style-guide/vue2/rules-strongly-recommended'
                },
                {
                    text: 'C - 推荐',
                    link: '/frontend/style-guide/vue2/rules-recommended'
                },
                {
                    text: 'D - 谨慎使用',
                    link: '/frontend/style-guide/vue2/rules-use-with-caution'
                }
            ]
        },
    ],
    '/frontend/components/': [
        {
            text: '组件',
            items: [
                { text: '概述', link: '/frontend/components/' },
                { text: '列表', link: '/frontend/components/list' },
                { text: '标题', link: '/frontend/components/title' },
                { text: '弹窗', link: '/frontend/components/select-model', badge: { text: '新', type: 'primary' }, },
            ]
        },
    ],
}
