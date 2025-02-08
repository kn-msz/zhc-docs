import './styles/index.css'
import VPApp from './components/VPApp.vue'
import { Theme } from 'vitepress'
import { withConfigProvider } from './composables/config'
import { App } from 'vue'
import { globals } from './globals'

const VPTheme: Theme = {

    Layout: withConfigProvider(VPApp),
    enhanceApp({ app }: { app: App }) {
        globals.forEach(([name, Comp]) => {
            app.component(name, Comp)
        })
    }
}

export { VPTheme }

export type { Config } from './config'
