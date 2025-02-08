<script setup lang="ts">
import { FormButton, type FormButtonType } from '../../components/form-button'
import { getCurrentInstance } from 'vue'

const vm = getCurrentInstance()!

const handleClick = (type,message) =>{
    const { $message } = vm.appContext.config.globalProperties
    $message[type](message)
}
const formButton: FormButtonType[] = [
    {
        icon: 'el-icon-document-checked',
        name: 'primary',
        params: ['info', '这个是 primary'],
        click: handleClick,
    },
    {
        name: 'success',
        type: 'success',
        icon: 'el-icon-date',
        params: ['success', '这个是 success'],
        click: handleClick
    },
    {
        name: 'info',
        type: 'info',
        icon: 'el-icon-edit-outline',
        params: ['info', '这个是 info'],
        click: handleClick

    },
    {
        name: 'warning',
        type: 'warning',
        icon: 'el-icon-warning-outline',
        params: ['warning', '这个是 warning'],
        click: handleClick,
    },
    {
        name: 'danger',
        type: 'danger',
        icon: 'el-icon-delete',
        params: ['error', '这个是 danger'],
        click: handleClick,
    },
]
</script>

<template>
    <FormButton :form-button="formButton"></FormButton>
</template>

<style scoped>

</style>
