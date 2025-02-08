<script setup lang="ts">
import { FormList } from '../components/form-list'
import type { ComponentSize } from 'element-plus'

import { ref, getCurrentInstance } from 'vue'
import type { FormTabPropsType } from '../components/form-tab'

const vm = getCurrentInstance()
const formButton = {
    formButton: [
        {
            name: '新增',
            type: 'primary'
        },
        {
            name: '确认',
            icon: 'el-icon-date'
        },
        {
            name: '删除',
            icon: 'el-icon-delete'
        }
    ]
}

const dataForm = ref({
    type: 'all'
})


const formSelect = {
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
        const { $message } = vm.appContext.config.globalProperties
        $message.success(`查询值为:${ value }`)
    },
    debounce: 500
}

const formTab = {
    formTab: {
        prop: 'type',
        list: [
            {
                label: '全部',
                name: 'all'
            },
            {
                label: '已审核',
                name: '2'
            },
        ]
    },
}


const currentPage = ref(5)
const pageSize = ref(20)
const disabled = ref(false)
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    }
]


const bindData = { ...formTab, ...formButton, ...formSelect }

</script>

<template>
    <FormList
        v-bind="bindData"
        :data-form="dataForm"
    >
        <template #sidebar>

        </template>
        <template #table>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
            </el-table>
        </template>
        <template #pagination>
            <el-pagination
                v-model:current-page="currentPage"
                v-model:page-size="pageSize"
                :page-sizes="[10, 20, 50, 100]"
                :disabled="disabled"
                layout="prev,pager, next,sizes,"
                :total="100"
            />

        </template>
    </FormList>
</template>

<style scoped>

</style>
