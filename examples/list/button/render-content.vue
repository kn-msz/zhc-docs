<script setup lang="tsx">
import { FormButton, type FormButtonType } from '../../components/form-button'
import { getCurrentInstance } from 'vue'

const vm = getCurrentInstance()!

const formButton: FormButtonType[] = [
    {
        render() {
            return (<el-dropdown trigger="click">
                { {
                    default: () => (<el-button size="small" style="margin-right: 12px">下拉</el-button>),
                    dropdown: () => (<el-dropdown-menu>
                        <el-dropdown-item>001</el-dropdown-item>
                        <el-dropdown-item>002</el-dropdown-item>
                        <el-dropdown-item>003</el-dropdown-item>
                    </el-dropdown-menu>)
                } }
            </el-dropdown>)
        }
    },
    {
        render() {
            return (<el-tooltip
                content="提示信息"
            >
                <el-button size="small">提示</el-button>
            </el-tooltip>)
        }
    },
    {
        render() {
            return (<el-popconfirm title="是否要删除?">
                {{
                    reference: () => <el-button type="danger" size="small">气泡确认</el-button>
                }}
            </el-popconfirm>)
        }
    }
]
</script>

<template>
    <FormButton :form-button="formButton"></FormButton>
</template>

<style scoped>

</style>
