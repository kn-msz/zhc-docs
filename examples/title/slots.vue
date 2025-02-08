<script setup lang="ts">
import { DataTitle } from '../components/data-title'
</script>

<template>
    <DataTitle>
        <template #left>左插槽</template>
        标题
        <template #right>右插槽</template>
    </DataTitle>
</template>
