import './styles/index.css'
import { h, App } from 'vue'
import { VPTheme } from '@modules/theme'
import PreferenceSwitch from './components/PreferenceSwitch.vue'
import SecurityUpdateBtn from './components/SecurityUpdateBtn.vue'
import {
    preferComposition,
    preferSFC,
    filterHeadersByPreference
} from './components/preferences'
import ElementPlus from 'element-plus'
import SponsorsAside from './components/SponsorsAside.vue'
import WwAds from './components/WwAds.vue'

export default Object.assign({}, VPTheme, {
    Layout: () => {
        // @ts-ignore
        return h(VPTheme.Layout, null, {
            // banner: () => h(Banner),
            'sidebar-top': () => h(PreferenceSwitch),
            // 'sidebar-bottom': () => h(SecurityUpdateBtn),
            // 'aside-mid': () => h(SponsorsAside),
            // 'aside-bottom': () => h(WwAds)
        })
    },
    enhanceApp({ app }: { app: App }) {

        app.use(ElementPlus)
        app.provide('prefer-composition', preferComposition)
        app.provide('prefer-sfc', preferSFC)
        app.provide('filter-headers', filterHeadersByPreference)

        VPTheme.enhanceApp({ app })

        // app.component('VueSchoolLink', VueSchoolLink)
        // app.component('TextAd', TextAd)
    }
})
