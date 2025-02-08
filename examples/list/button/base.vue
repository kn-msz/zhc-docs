<script setup lang="ts">
import { FormButton, type FormButtonType } from '../../components/form-button'

const formButton: FormButtonType[] = [
    {
        name: 'primary',
        type: 'primary',
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
]
</script>

<template>
    <FormButton :form-button="formButton"></FormButton>
</template>

<style scoped>

</style>
