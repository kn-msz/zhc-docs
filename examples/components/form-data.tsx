import { computed, defineComponent, VNode } from 'vue'
import { formSelectProps, FormSelect } from './form-select'
import { formTabProps, FormTab } from './form-tab'


export const FormData = defineComponent({
    props: {
        ...formSelectProps,
        ...formTabProps
    },

    setup(props) {

        return () => <div class="form-data">
            <FormTab { ...props }></FormTab>
            <FormSelect { ...props }></FormSelect>
        </div>
    }
})
