import { defineComponent, getCurrentInstance } from 'vue'

export type FormTabType = {
    list: {
        label: string,
        isShow?: boolean,
        name: string,
    },
    prop: string,
}

export type FormTabPropsType = {
    formTab: FormTabType,
    dataForm: any
}

export const formTabProps = {
    formTab: {
        type: Object,
        default: () => {
            return {
                prop: '',
                list: []
            }
        }
    },
    dataForm: Object,
    query: Function
}

export const FormTab = defineComponent<FormTabPropsType>({
    props: formTabProps,
    setup(props, { slots }) {
        const beforeLeave = (value: string) => {
            props.dataForm[props.formTab.prop] = value
            props.query(value)
            return true
        }
        return () => {
            const showTab = props.formTab.list.filter(item => item.hasOwnProperty('isShow') ? item.isShow : true)
            const content = slots?.default?.() ? slots?.default?.() : (
                <el-tabs before-leave={ beforeLeave } modelValue={ props.dataForm[props.formTab.prop] }>
                    {
                        showTab.map(({ label, name }) => (<el-tab-pane label={ label } name={ name }></el-tab-pane>))
                    }
                </el-tabs>
            )
            return (<div class="form-tab">{content}</div>)

        }

    }
})
