<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in tabData" :key="index" :label="item.name" :name="item.name"></el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
import { ref, toRaw, watch } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
const props = defineProps({
    data: {
        type: Array,
        default: []
    }
})
//tabData=[{name:'',path:''}]
const tabData: any = props.data

let activeName = ref()
watch([route, props.data], (newVal, oldval) => {
    toRaw(tabData).map((i: any) => {
        if (i.path == route.fullPath) {
            activeName.value = i.name
        }
    })
}, { deep: true, immediate: true })
const handleClick = (tab: TabsPaneContext, event: Event) => {
    let path = ''
    let query
    toRaw(tabData).map((i: any) => {
        if (i.name == toRaw(tab.props.name)) {
            path = i.path
            query = i.query
            return
        }
        return
    })
    router.push({ path, query })
}
</script>

<style lang="scss" scoped>
.demo-tabs {
    width: 95%;
    margin: 15px auto;

    &:deep(.el-tabs__item) {
        font-size: 18px;

        &.is-active {
            font-size: 18px;
            color: #000;
            font-weight: 600;
        }

        &:hover {
            color: #000;
        }
    }

    & :deep(.el-tabs__active-bar) {
        background-color: #F1DBAD;
        height: 4px;
    }

    &:deep(.el-tabs__nav-wrap::after) {
        display: none;
    }
}
</style>