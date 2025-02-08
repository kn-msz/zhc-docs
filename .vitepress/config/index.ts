import type { Config as ThemeConfig } from '../../modules/theme'
import baseConfig from '../../modules/theme/vitepress/config/baseConfig'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { MarkdownTransform } from '../plugins/markdown-transform'
import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import { mdPlugin } from './plugins'
import { nav } from './nav'
import { sidebar } from './sidebar'
import { i18n } from './i18n'

export default defineConfigWithTheme<ThemeConfig>({
    extends: baseConfig,
    appearance: 'dark',
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
                path.resolve(__dirname, '../inlined-scripts/restorePreference.js'),
                'utf-8'
            )
        ],
        [
            'script',
            {},
            fs.readFileSync(
                path.resolve(__dirname, '../inlined-scripts/uwu.js'),
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
        config: (md) => mdPlugin(md)
    },
    vite: {
        define: {
            __VUE_OPTIONS_API__: false
        },
        resolve: {
            alias: [
                {
                    find: '@modules',
                    replacement: path.resolve(process.cwd(), '.', 'modules')
                },
                {
                    find: '@',
                    replacement: path.resolve(process.cwd(), '.', 'src')
                },
                {
                    find: '@internal',
                    replacement: path.resolve(process.cwd(), '.', 'internal')
                },
                {
                    find: '@examples',
                    replacement: path.resolve(process.cwd(), '.', 'examples')
                },
            ]
        },
        plugins: [
            vueJsx(),
            MarkdownTransform()
        ],
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
