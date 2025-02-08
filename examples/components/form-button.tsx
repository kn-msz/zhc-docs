import { computed, defineComponent, VNode } from 'vue'

export type FormButtonType = {
    disabled?: boolean,
    isShow?: boolean,
    type?: 'text' | 'default' | 'success' | 'warning' | 'info' | 'primary' | 'danger',
    size?: 'large' | 'default' | 'small',
    click: (...args?: any) => void,
    params: any[],
    render: () => VNode,
    icon?: string,
    name: string
}
type FormButtonPropsType = {
    formButton: FormButtonType[],
}

export const formButtonProps = {
    formButton: Array
}

export const FormButton = defineComponent<FormButtonPropsType>({
    props: formButtonProps,
    setup(props) {
        const filterButton = computed(() => props.formButton?.filter(item => item.hasOwnProperty('isShow') ? item.isShow : true))
        return () => (
            <div class="form-button">
                {
                    filterButton.value?.map((btn, index) => {
                        return btn.render
                            ? btn.render()
                            : (
                                <el-button
                                    disabled={ btn.disabled }
                                    size={ btn.size || 'small' }
                                    onClick={ () => btn.params ? btn?.click?.(...btn.params) : btn?.click?.() }
                                    type={ btn.type || (index === 0 ? 'primary' : 'default') }
                                    key={ index }
                                >
                                    {{
                                        default: () => btn.name,
                                        icon: btn.icon ? () => <i class={ btn.icon }></i> : null
                                    }}
                                </el-button>
                            )
                    })
                }
            </div>
        )
    }
})
