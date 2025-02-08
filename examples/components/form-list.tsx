import { defineComponent } from 'vue'

import { FormButton, formButtonProps } from './form-button'
import { FormData } from './form-data'
import { formSelectProps } from './form-select'
import { formTabProps } from './form-tab'

import './form-list.css'

export const FormList = defineComponent({
    props: {
        ...formButtonProps,
        ...formSelectProps,
        ...formTabProps
    },
    setup(props, { slots }) {
        return () => {
            return <el-card>
                {
                    slots?.sidebar?.() && (
                        <div class="list-sidebar">{ slots.sidebar() }</div>
                    )
                }
                <div class="list-content">
                    <FormButton { ...props }></FormButton>
                    <FormData { ...props }></FormData>
                    <div
                        class="list-table"
                    >
                        { slots?.table?.() }
                    </div>
                    <div class="list-pagination">
                        { slots?.pagination?.() }
                    </div>
                </div>
            </el-card>
        }
    }
})
