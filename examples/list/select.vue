<script setup lang="ts">
import { FormSelect, type FormSelectPropsType } from '../components/form-select'
import { getCurrentInstance, ref } from 'vue'

const vm = getCurrentInstance()!


const dataForm = ref({
    text: '',
    number: '',
    select_dict_type: '',
    select_dict_data: '',
    applyDateMin: '',
    applyDateMax: ''
})
const formSelectProps: FormSelectPropsType = {
    formItem: [
        { prop: 'text', label: '文字', type: 'text' },
        { prop: 'number', label: '数字', type: 'number' },
        { prop: 'select_dict_type', label: '下拉选择 字典', type: 'select', dictType: 'alarm_time_config' },
        {
            prop: 'select_dict_data',
            label: '下拉|不使用字典', // 不使用字典
            type: 'select',
            dictDataList: [
                { dictLabel: '已结项', dictValue: 1 },
                { dictLabel: '未结项', dictValue: 0 }
            ]
        },
        { prop: 'applyAmountMax', label: '下拉树形选择', type: 'tree-select', dataUrl: '/sys/dept/list' },
        { prop: 'applyDateMin', label: '日期', type: 'date' },
        { prop: 'applyDateMax', label: '年', type: 'year' }
    ],
    query(value: any) {
        console.log(this)
        const { $message } = vm.appContext.config.globalProperties
        $message.success(`查询值为:${value}`, )
    },
    debounce: 500
}

</script>

<template>
    <FormSelect v-bind="formSelectProps" :dataForm="dataForm"></FormSelect>
</template>

<style scoped>
</style>
