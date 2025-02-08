<script setup lang="ts">
import { FormButton, type FormButtonType } from '../../components/form-button'
import { getCurrentInstance, ref } from 'vue'


const vm = getCurrentInstance()!
const disabled = ref(true)
const show = ref(true)

const formButton  = ref<FormButtonType[]>([
    {
        name: 'primary',
        type: 'primary',
        icon: 'el-icon-plus',
    },
    {
        name: 'success',
        type: 'success',
        icon: 'el-icon-date',
    },
    {
        name: 'info',
        type: 'info',
        icon: 'el-icon-edit-outline',

    },
    {
        name: 'warning',
        type: 'warning',
        icon: 'el-icon-warning-outline',
    },
    {
        name: 'danger',
        type: 'danger',
        icon: 'el-icon-delete',
    },
])

const updateShow = (value: boolean) => {
    formButton.value[2].isShow = value
}
const updateDisabled = (value: boolean) => {
    formButton.value[3].disabled = !value
}
</script>

<template>
    <el-switch
        size="small"
        v-model="disabled"
        active-text="启用"
        inactive-text="禁用"
        @change="updateDisabled"
    >
    </el-switch>
    <el-divider direction="vertical"></el-divider>
    <el-switch
        size="small"
        v-model="show"
        @change="updateShow"
        active-text="显示"
        inactive-text="隐藏"
    >
    </el-switch>
    <el-divider></el-divider>
    <FormButton :form-button="formButton"></FormButton>
</template>

<style scoped>

</style>
