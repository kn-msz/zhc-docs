import type { MarkdownRenderer } from 'vitepress'
import mdContainer from 'markdown-it-container'
import createDemoContainer from '../plugins/demo'
import tableWrapper from '../plugins/table-wrapper'
import tooltip from '../plugins/tooltip'

import { headerPlugin } from './headerMdPlugin'
// import { textAdPlugin } from './textAdMdPlugin'

export const mdPlugin = (md: MarkdownRenderer) => {
    md.use(headerPlugin)
    md.use(tableWrapper)
    md.use(tooltip)
    md.use(mdContainer, 'demo', createDemoContainer(md))
}
