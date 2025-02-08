import { onMounted, defineComponent, ref, Ref, computed, getCurrentInstance, watch, nextTick } from 'vue'
import datasource from './datasource.json'

import { debounce } from 'lodash';


type FormItemType = {
    prop: string
    label: string
    type: 'text' | 'tree-select' | 'select' | 'switch' | 'number' | 'date' | 'year'
}


export type FormSelectPropsType = {
    formItem: FormItemType[]
    dataForm: any
    debounce: number
    query: (value: string) => void
}

export const formSelectProps = {
    formItem: Array,
    dataForm: Object,
    debounce: {
        type: Number,
        default: 500
    },
    query: Function
}

const RenderFormItem = defineComponent<FormSelectPropsType>({
    props: {
        ...formSelectProps,
        size: {
            type: String,
            default: 'small'
        },
        prop: String
    },
    setup(props) {

        const debouncedGetData = debounce(props.query, props.debounce)
        const { proxy } = getCurrentInstance()
        const filterFormItem = computed(() => props.formItem.filter(item => (item.hasOwnProperty('isShow') ? item.isShow : true)))
        const formItem = computed(() => filterFormItem.value.find(item => item.prop === props.prop))

        return () => {
            const {
                prop,
                type,
                label,
                placeholder = label,
                dictType,
                dictDataList = [],
                dataUrl
            } = formItem.value || {}
            const size = 'small'


            const onUpdateValue = (value: any) => {
                props.dataForm[prop] = value
                proxy.$forceUpdate()
                debouncedGetData(value)
            }
            switch (type) {
                case 'text':
                case 'number': {
                    return <el-input
                        size={ size }
                        model-value={ props.dataForm[prop] }
                        placeholder={ placeholder }
                        onUpdate:modelValue={ onUpdateValue }
                    >
                    </el-input>
                }

                case 'select': {
                    let dictData = dictDataList
                    if (dictType) {
                        dictData = datasource.dictList.find(item => item.dictType === dictType)?.dataList
                    }
                    return <el-select
                        teleported={ false }
                        size={ size }
                        model-value={ props.dataForm[prop] }
                        placeholder={ placeholder }
                        onUpdate:modelValue={ onUpdateValue }
                    >
                        {
                            dictData.map(option => {
                                return (
                                    <el-option key={ option.dictValue } label={ option.dictLabel } value={ option.dictValue }></el-option>
                                )
                            })
                        }
                    </el-select>
                }

                case 'tree-select': {
                    let treeData = datasource.treeData[dataUrl]
                    return <el-tree-select
                        teleported={ false }
                        props={ {
                            label: 'name'
                        } }
                        node-key="id"
                        size={ size }
                        data={ treeData }
                        model-value={ props.dataForm[prop] }
                        placeholder={ placeholder }
                        onUpdate:modelValue={ onUpdateValue }
                    >
                    </el-tree-select>
                }
                case 'date':
                case 'year': {
                    return <el-date-picker
                        type={ type }
                        size={ size }
                        model-value={ props.dataForm[prop] }
                        placeholder={ placeholder }
                        style="width: 100%"
                        onUpdate:modelValue={ onUpdateValue }
                    >
                    </el-date-picker>
                }
                default : {
                    return <div>无该类型 { type }</div>
                }
            }
        }
    }
})

const RenderSelect = defineComponent<FormSelectPropsType>({
    props: {
        ...formSelectProps,
        activeProp: Object as Ref<string>
    },
    setup(props) {
        const filterFormItem = computed(() => props.formItem.filter(item => (item.hasOwnProperty('isShow') ? item.isShow : true)))
        return () => (
            <div class="form-select-filter">
                <el-select class="form-select-filter-select" filterable size="small" v-model={ props.activeProp.value }>
                    {
                        filterFormItem.value.map(option => {
                            return (
                                <el-option key={ option.prop } label={ option.label } value={ option.prop }></el-option>
                            )
                        })
                    }
                </el-select>
                <RenderFormItem
                    style="max-width: 160px"
                    { ...props }
                    prop={ props.activeProp.value }
                ></RenderFormItem>
                <el-button size="small">
                    { {
                        icon: () => <i class="el-icon-search"></i>
                    } }
                </el-button>
            </div>
        )
    }
})

const RenderPopover = defineComponent<FormSelectPropsType>({
    props: formSelectProps,
    setup(props) {
        const filterFormItem = computed(() => props.formItem.filter(item => (item.hasOwnProperty('isShow') ? item.isShow : true)))

        const visible = ref(false)
        const dataForm = ref(null)

        const debouncedGetData = props.query

        const { proxy } = getCurrentInstance()


        const resetFormData = () => {
            console.log(dataForm.value.resetFields)
            dataForm.value.resetFields()
            console.log(props.dataForm)
            proxy.$forceUpdate()
        }

        return () => (
            <el-popover
                width="800"
                visible={ visible.value }
            >
                {{
                    default: () => <>
                        <el-form
                            model={ props.dataForm }
                            class="dataForm"
                            label-width="120px"
                            ref={ dataForm }
                            size="small"
                        >
                            <el-row>
                                {
                                    filterFormItem.value.map(({ label, prop }) => {
                                        return <el-col span={ 12 }>
                                            <el-form-item label={ label } prop={ prop }>
                                                <RenderFormItem
                                                    { ...props }
                                                    prop={ prop }
                                                ></RenderFormItem>
                                            </el-form-item>
                                        </el-col>
                                    })
                                }

                            </el-row>
                        </el-form>
                        <div class="footer">
                            <el-button size="small" onClick={ resetFormData }>重置</el-button>
                            <el-button size="small" onClick={ () => {
                                debouncedGetData('整体查询')
                                visible.value = false
                            }} type="primary">查询</el-button>
                        </div>
                    </>,
                    reference: () => <el-button
                        size="small" class="more-button"
                        onClick={ () => visible.value = !visible.value }
                    >
                        {{
                            icon: () => <i class="el-icon-more"></i>
                        }}
                    </el-button>
                } }
            </el-popover>
        )
    }
})


export const FormSelect = defineComponent<FormSelectPropsType>({
    props: formSelectProps,
    setup(props) {
        const activeProp = ref('')
        nextTick(() => {
            activeProp.value = props.formItem?.[0]?.prop
        })

        return () => (
            <div class="form-select">
                <RenderSelect { ...props } activeProp={ activeProp }></RenderSelect>
                <RenderPopover { ...props } activeProp={ activeProp }></RenderPopover>
            </div>
        )
    }
})
