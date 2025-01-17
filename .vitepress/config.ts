import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import { headerPlugin } from './headerMdPlugin'
// import { textAdPlugin } from './textAdMdPlugin'
import type { Config as ThemeConfig } from '../modules/theme'
import baseConfig from '../modules/theme/vitepress/config/baseConfig'

const nav: ThemeConfig['nav'] = [
    {
        text: '前端',
        activeMatch: `^/(frontend|style-guide|cookbook|examples)/`,
        items: [
            { text: '规范', link: '/frontend/style-guide/introduction' },
            { text: '架构', link: '/frontend/architecture/introduction' },
            { text: '主题', link: '/frontend/theme/' },
            { text: '组件规范', link: '/frontend/components/introduction' },
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
    {
        text: '专家',
        badge: { text: '新' },
        activeMatch: `^/(partners|developers)/`,
        items: [
            { text: '合作伙伴', link: '/partners/' },
            { text: '开发者', link: '/developers/', badge: { text: '新' } }
        ]
    }
]

export const sidebar: ThemeConfig['sidebar'] = {
    '/frontend/theme/': [

        {
            text: '主题',
            items: [
                { text: '概述', link: '/frontend/theme/' },
                { text: '样式定制', link: '/frontend/theme/customization' },
                { text: '主题切换', link: '/frontend/theme/switching' },
                { text: '全局变量', link: '/frontend/theme/variables' },
                { text: '色彩体系', link: '/frontend/theme/colors' },
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
        // {
        //     text: '组件规范',
        //     items: [
        //         { text: '简介', link: '/frontend/components/introduction' },
        //         { text: 'Props 规范', link: '/frontend/components/props' },
        //         { text: '事件处理', link: '/frontend/components/events' },
        //         { text: '插槽使用', link: '/frontend/components/slots' },
        //         { text: '测试与文档', link: '/frontend/components/testing' },
        //     ]
        // },
    ],
    '/frontend/style-guide': [
        {
            text: '前端规范',
            items: [
                { text: '简介', link: '/frontend/style-guide/introduction' },
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
        // {
        //     text: 'Vue3规范',
        //     items: [
        //         {
        //             text: '概述',
        //             link: '/frontend/style-guide/vue3'
        //         },
        //         {
        //             text: 'A - 必要的',
        //             link: '/frontend/style-guide/vue3/rules-essential'
        //         },
        //         {
        //             text: 'B - 强烈建议',
        //             link: '/frontend/style-guide/vue3/rules-strongly-recommended'
        //         },
        //         {
        //             text: 'C - 推荐',
        //             link: '/frontend/style-guide/vue3/rules-recommended'
        //         },
        //         {
        //             text: 'D - 谨慎使用',
        //             link: '/frontend/style-guide/vue3/rules-use-with-caution'
        //         }
        //     ]
        // },
    ],
    'vue-style': [
        { text: 'vue2 规范', link: '/frontend/style-guide/vue2.md' },
    ],
    '/guide/': [
        {
            text: '开始',
            items: [
                { text: '简介', link: '/guide/introduction' },
                {
                    text: '快速上手',
                    link: '/guide/quick-start'
                }
            ]
        },
        {
            text: '基础',
            items: [
                {
                    text: '创建一个应用',
                    link: '/guide/essentials/application'
                },
                {
                    text: '模板语法',
                    link: '/guide/essentials/template-syntax'
                },
                {
                    text: '响应式基础',
                    link: '/guide/essentials/reactivity-fundamentals'
                },
                {
                    text: '计算属性',
                    link: '/guide/essentials/computed'
                },
                {
                    text: '类与样式绑定',
                    link: '/guide/essentials/class-and-style'
                },
                {
                    text: '条件渲染',
                    link: '/guide/essentials/conditional'
                },
                { text: '列表渲染', link: '/guide/essentials/list' },
                {
                    text: '事件处理',
                    link: '/guide/essentials/event-handling'
                },
                { text: '表单输入绑定', link: '/guide/essentials/forms' },
                {
                    text: '生命周期',
                    link: '/guide/essentials/lifecycle'
                },
                { text: '侦听器', link: '/guide/essentials/watchers' },
                { text: '模板引用', link: '/guide/essentials/template-refs' },
                {
                    text: '组件基础',
                    link: '/guide/essentials/component-basics'
                }
            ]
        },
        {
            text: '深入组件',
            items: [
                {
                    text: '注册',
                    link: '/guide/components/registration'
                },
                { text: 'Props', link: '/guide/components/props' },
                { text: '事件', link: '/guide/components/events' },
                { text: '组件 v-model', link: '/guide/components/v-model' },
                {
                    text: '透传 Attributes',
                    link: '/guide/components/attrs'
                },
                { text: '插槽', link: '/guide/components/slots' },
                {
                    text: '依赖注入',
                    link: '/guide/components/provide-inject'
                },
                {
                    text: '异步组件',
                    link: '/guide/components/async'
                }
            ]
        },
        {
            text: '逻辑复用',
            items: [
                {
                    text: '组合式函数',
                    link: '/guide/reusability/composables'
                },
                {
                    text: '自定义指令',
                    link: '/guide/reusability/custom-directives'
                },
                { text: '插件', link: '/guide/reusability/plugins' }
            ]
        },
        {
            text: '内置组件',
            items: [
                { text: 'Transition', link: '/guide/built-ins/transition' },
                {
                    text: 'TransitionGroup',
                    link: '/guide/built-ins/transition-group'
                },
                { text: 'KeepAlive', link: '/guide/built-ins/keep-alive' },
                { text: 'Teleport', link: '/guide/built-ins/teleport' },
                { text: 'Suspense', link: '/guide/built-ins/suspense' }
            ]
        },
        {
            text: '应用规模化',
            items: [
                { text: '单文件组件', link: '/guide/scaling-up/sfc' },
                { text: '工具链', link: '/guide/scaling-up/tooling' },
                { text: '路由', link: '/guide/scaling-up/routing' },
                {
                    text: '状态管理',
                    link: '/guide/scaling-up/state-management'
                },
                { text: '测试', link: '/guide/scaling-up/testing' },
                {
                    text: '服务端渲染 (SSR)',
                    link: '/guide/scaling-up/ssr'
                }
            ]
        },
        {
            text: '最佳实践',
            items: [
                {
                    text: '生产部署',
                    link: '/guide/best-practices/production-deployment'
                },
                {
                    text: '性能优化',
                    link: '/guide/best-practices/performance'
                },
                {
                    text: '无障碍访问',
                    link: '/guide/best-practices/accessibility'
                },
                {
                    text: '安全',
                    link: '/guide/best-practices/security'
                }
            ]
        },
        {
            text: 'TypeScript',
            items: [
                { text: '总览', link: '/guide/typescript/overview' },
                {
                    text: 'TS 与组合式 API',
                    link: '/guide/typescript/composition-api'
                },
                {
                    text: 'TS 与选项式 API',
                    link: '/guide/typescript/options-api'
                }
            ]
        },
        {
            text: '进阶主题',
            items: [
                {
                    text: '使用 Vue 的多种方式',
                    link: '/guide/extras/ways-of-using-vue'
                },
                {
                    text: '组合式 API 常见问答',
                    link: '/guide/extras/composition-api-faq'
                },
                {
                    text: '深入响应式系统',
                    link: '/guide/extras/reactivity-in-depth'
                },
                {
                    text: '渲染机制',
                    link: '/guide/extras/rendering-mechanism'
                },
                {
                    text: '渲染函数 & JSX',
                    link: '/guide/extras/render-function'
                },
                {
                    text: 'Vue 与 Web Components',
                    link: '/guide/extras/web-components'
                },
                {
                    text: '动画技巧',
                    link: '/guide/extras/animation'
                }
                // {
                //   text: '为 Vue 构建一个库',
                //   link: '/guide/extras/building-a-library'
                // },
                // {
                //   text: 'Vue for React 开发者',
                //   link: '/guide/extras/vue-for-react-devs'
                // }
            ]
        }
    ],
    '/api/': [
        {
            text: '全局 API',
            items: [
                { text: '应用实例', link: '/api/application' },
                {
                    text: '通用',
                    link: '/api/general'
                }
            ]
        },
        {
            text: '组合式 API',
            items: [
                { text: 'setup()', link: '/api/composition-api-setup' },
                {
                    text: '响应式: 核心',
                    link: '/api/reactivity-core'
                },
                {
                    text: '响应式: 工具',
                    link: '/api/reactivity-utilities'
                },
                {
                    text: '响应式: 进阶',
                    link: '/api/reactivity-advanced'
                },
                {
                    text: '生命周期钩子',
                    link: '/api/composition-api-lifecycle'
                },
                {
                    text: '依赖注入',
                    link: '/api/composition-api-dependency-injection'
                },
                {
                    text: '辅助',
                    link: '/api/composition-api-helpers'
                }
            ]
        },
        {
            text: '选项式 API',
            items: [
                { text: '状态选项', link: '/api/options-state' },
                { text: '渲染选项', link: '/api/options-rendering' },
                {
                    text: '生命周期选项',
                    link: '/api/options-lifecycle'
                },
                {
                    text: '组合选项',
                    link: '/api/options-composition'
                },
                { text: '其他杂项', link: '/api/options-misc' },
                {
                    text: '组件实例',
                    link: '/api/component-instance'
                }
            ]
        },
        {
            text: '内置内容',
            items: [
                { text: '指令', link: '/api/built-in-directives' },
                { text: '组件', link: '/api/built-in-components' },
                {
                    text: '特殊元素',
                    link: '/api/built-in-special-elements'
                },
                {
                    text: '特殊 Attributes',
                    link: '/api/built-in-special-attributes'
                }
            ]
        },
        {
            text: '单文件组件',
            items: [
                { text: '语法定义', link: '/api/sfc-spec' },
                { text: '<script setup>', link: '/api/sfc-script-setup' },
                { text: 'CSS 功能', link: '/api/sfc-css-features' }
            ]
        },
        {
            text: '进阶 API',
            items: [
                { text: '自定义元素', link: '/api/custom-elements' },
                { text: '渲染函数', link: '/api/render-function' },
                { text: '服务端渲染', link: '/api/ssr' },
                { text: 'TypeScript 工具类型', link: '/api/utility-types' },
                { text: '自定义渲染', link: '/api/custom-renderer' },
                { text: '编译时标志', link: '/api/compile-time-flags' }
            ]
        }
    ],
    '/examples/': [
        {
            text: '基础',
            items: [
                {
                    text: '你好，世界',
                    link: '/examples/#hello-world'
                },
                {
                    text: '处理用户输入',
                    link: '/examples/#handling-input'
                },
                {
                    text: 'Attribute 绑定',
                    link: '/examples/#attribute-bindings'
                },
                {
                    text: '条件与循环',
                    link: '/examples/#conditionals-and-loops'
                },
                {
                    text: '表单绑定',
                    link: '/examples/#form-bindings'
                },
                {
                    text: '简单组件',
                    link: '/examples/#simple-component'
                }
            ]
        },
        {
            text: '实战',
            items: [
                {
                    text: 'Markdown 编辑器',
                    link: '/examples/#markdown'
                },
                {
                    text: '获取数据',
                    link: '/examples/#fetching-data'
                },
                {
                    text: '带有排序和过滤器的网格',
                    link: '/examples/#grid'
                },
                {
                    text: '树状视图',
                    link: '/examples/#tree'
                },
                {
                    text: 'SVG 图像',
                    link: '/examples/#svg'
                },
                {
                    text: '带过渡动效的模态框',
                    link: '/examples/#modal'
                },
                {
                    text: '带过渡动效的列表',
                    link: '/examples/#list-transition'
                },
                {
                    text: 'TodoMVC',
                    link: '/examples/#todomvc'
                }
            ]
        },
        {
            // https://eugenkiss.github.io/7guis/
            text: '7 GUIs',
            items: [
                {
                    text: '计数器',
                    link: '/examples/#counter'
                },
                {
                    text: '温度转换器',
                    link: '/examples/#temperature-converter'
                },
                {
                    text: '机票预订',
                    link: '/examples/#flight-booker'
                },
                {
                    text: '计时器',
                    link: '/examples/#timer'
                },
                {
                    text: 'CRUD',
                    link: '/examples/#crud'
                },
                {
                    text: '画圆',
                    link: '/examples/#circle-drawer'
                },
                {
                    text: '单元格',
                    link: '/examples/#cells'
                }
            ]
        }
    ],
    '/style-guide/': [
        {
            text: 'Style Guide',
            items: [
                {
                    text: 'Overview',
                    link: '/style-guide/'
                },
                {
                    text: 'A - Essential',
                    link: '/style-guide/rules-essential'
                },
                {
                    text: 'B - Strongly Recommended',
                    link: '/style-guide/rules-strongly-recommended'
                },
                {
                    text: 'C - Recommended',
                    link: '/style-guide/rules-recommended'
                },
                {
                    text: 'D - Use with Caution',
                    link: '/style-guide/rules-use-with-caution'
                }
            ]
        }
    ]
}

const i18n: ThemeConfig['i18n'] = {
    search: '搜索',
    menu: '菜单',
    toc: '本页目录',
    returnToTop: '返回顶部',
    appearance: '外观',
    previous: '前一篇',
    next: '下一篇',
    pageNotFound: '页面未找到',
    deadLink: {
        before: '你打开了一个不存在的链接：',
        after: '。'
    },
    deadLinkReport: {
        before: '不介意的话请提交到',
        link: '这里',
        after: '，我们会跟进修复。'
    },
    footerLicense: {
        before: '',
        after: ''
    },
    ariaAnnouncer: {
        before: '',
        after: '已经加载完毕'
    },
    ariaDarkMode: '切换深色模式',
    ariaSkipToContent: '直接跳到内容',
    ariaToC: '当前页面的目录',
    ariaMainNav: '主导航',
    ariaMobileNav: '移动版导航',
    ariaSidebarNav: '侧边栏导航'
}

export default defineConfigWithTheme<ThemeConfig>({

    extends: baseConfig,


    lang: 'zh-CN',
    title: '文档管理',
    description: 'Vue.js - 渐进式的 JavaScript 框架',
    srcDir: 'src',
    head: [
        ['meta', { name: 'theme-color', content: '#3c8772' }],
        ['meta', { property: 'og:url', content: 'https://vuejs.org/' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: 'Vue.js' }],
        [
            'meta',
            {
                property: 'og:description',
                content: 'Vue.js - 渐进式的 JavaScript 框架'
            }
        ],
        [
            'meta',
            {
                property: 'og:image',
                content: 'https://vuejs.org/images/logo.png'
            }
        ],
        ['meta', { name: 'twitter:site', content: '@vuejs' }],
        ['meta', { name: 'twitter:card', content: 'summary' }],
        [
            'link',
            {
                rel: 'preconnect',
                href: 'https://sponsors.vuejs.org'
            }
        ],
        [
            'script',
            {},
            fs.readFileSync(
                path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
                'utf-8'
            )
        ],
        [
            'script',
            {},
            fs.readFileSync(
                path.resolve(__dirname, './inlined-scripts/uwu.js'),
                'utf-8'
            )
        ],
        [
            'script',
            {
                src: 'https://cdn.usefathom.com/script.js',
                'data-site': 'ZPMMDSYA',
                'data-spa': 'auto',
                defer: ''
            }
        ],
        [
            'script',
            {
                src: 'https://vueschool.io/banner.js?affiliate=vuejs&type=top',
                async: 'true'
            }
        ]
    ],

    themeConfig: {
        nav,
        sidebar,
        i18n,

        // algolia: {
        //     indexName: 'vuejs_cn2',
        //     appId: 'UURH1MHAF7',
        //     apiKey: 'c23eb8e7895f42daeaf2bf6f63eb4bf6',
        //     searchParameters: {
        //         facetFilters: ['version:v3']
        //     },
        //     placeholder: '搜索文档',
        //     translations: {
        //         button: {
        //             buttonText: '搜索'
        //         },
        //         modal: {
        //             searchBox: {
        //                 resetButtonTitle: '清除查询条件',
        //                 resetButtonAriaLabel: '清除查询条件',
        //                 cancelButtonText: '取消',
        //                 cancelButtonAriaLabel: '取消'
        //             },
        //             startScreen: {
        //                 recentSearchesTitle: '搜索历史',
        //                 noRecentSearchesText: '没有搜索历史',
        //                 saveRecentSearchButtonTitle: '保存到搜索历史',
        //                 removeRecentSearchButtonTitle: '从搜索历史中移除',
        //                 favoriteSearchesTitle: '收藏',
        //                 removeFavoriteSearchButtonTitle: '从收藏中移除'
        //             },
        //             errorScreen: {
        //                 titleText: '无法获取结果',
        //                 helpText: '你可能需要检查你的网络连接'
        //             },
        //             footer: {
        //                 selectText: '选择',
        //                 navigateText: '切换',
        //                 closeText: '关闭',
        //                 searchByText: '搜索供应商'
        //             },
        //             noResultsScreen: {
        //                 noResultsText: '无法找到相关结果',
        //                 suggestedQueryText: '你可以尝试查询',
        //                 reportMissingResultsText: '你认为这个查询应该有结果？',
        //                 reportMissingResultsLinkText: '向我们反馈'
        //             }
        //         }
        //     }
        // },


        editLink: {
            repo: 'kn-msz/zhc-docs',
            text: '在 github 上编辑此页'
        },

        footer: {
            license: {
                text: '版权声明',
                link: 'https://github.com/vuejs-translations/docs-zh-cn#%E7%89%88%E6%9D%83%E5%A3%B0%E6%98%8E'
            },
            copyright:
                '本中文文档采用 知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议  (CC BY-NC-SA 4.0) 进行许可。'
        }
    },

    markdown: {
        theme: 'github-dark',
        config(md) {
            md.use(headerPlugin)
            // .use(textAdPlugin)
        }
    },
    vite: {
        define: {
            __VUE_OPTIONS_API__: false
        },
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: path.resolve(process.cwd(), '.', 'modules')
                },
            ]
        },
        optimizeDeps: {
            include: ['gsap', 'dynamics.js'],
            exclude: ['@vue/repl']
        },
        // @ts-ignore
        ssr: {
            external: ['@vue/repl']
        },
        server: {
            port: 3000,
            host: true,
        },
        build: {
            chunkSizeWarningLimit: Infinity
        },
        json: {
            stringify: true
        }
    }
})
