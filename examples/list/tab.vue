<script setup lang="ts">
import { FormTab, type FormTabPropsType } from '../components/form-tab'
import { getCurrentInstance } from 'vue'


const vm = getCurrentInstance()
const formTab: FormTabPropsType = {
    formTab: {
        prop: 'type',
        list: [
            {
                label: '全部',
                name: 'all'
            },
            {
                label: '待审核',
                name: '1'
            },
            {
                label: '已审核',
                name: '2'
            },

            {
                label: '已结项',
                name: '3',
            },
            {
                label: '隐藏',
                name: '4',
                isShow: false // 不显示
            }
        ]
    },
    dataForm: {
        type: 'all'
    },
    query(name){
        const { $message } = vm.appContext.config.globalProperties
        $message.success(`当前选中: ${this.formTab.list.find(item => item.name === name).label}`)
    }
}

</script>

<template>
    <FormTab v-bind="formTab"></FormTab>
</template>

<style scoped>

</style>
