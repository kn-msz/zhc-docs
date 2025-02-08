import { defineComponent } from 'vue'
import './data-title.css'
export const DataTitle = defineComponent({
    props: {
        title: String
    },
    setup(props, { slots }) {
        return () => (
            <div class="data-title">
                <div>{ slots?.left?.() }</div>
                <h3 class="title">
                    { props.title }
                    { slots?.default?.() }
                </h3>
                <div>{ slots?.right?.() }</div>
            </div>
        )
    }
})
