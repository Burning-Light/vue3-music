<template>
    <div class="page5_Wrapper">
        <Singersort v-for="(item, index) in sortList" :key="index" :title="item.bigsort" :sort="item.smallsort">
        </Singersort>
        <Wrapper :mode="1" :data="singerList"></Wrapper>
    </div>
</template>

<script setup lang="ts">
import Singersort from './singersort.vue'
import Wrapper from '@/components/wrapper.vue'
import { ref, reactive } from 'vue'
const singerList: any = ref([
    { title: '推荐歌' },
    { title: '推荐歌' },
    { title: '推荐歌' },
    { title: '推荐歌' },
    { title: '推荐歌' },
    { title: '推荐歌' },
    { title: '推荐歌' },
    { title: '推荐歌' },
    { title: '推荐歌' },
    { title: '推荐歌' },
    { title: '推荐歌' },
    { title: '推荐歌' },
    { title: '推荐歌' },
])
const sortList: any = reactive([
    {
        bigsort: '语种', smallsort: [
            { name: '华语', path: '', isActive: false },
            { name: '华语', path: '', isActive: false },
            { name: '华语', path: '', isActive: false },
            { name: '华语', path: '', isActive: false },
        ]
    },
    {
        bigsort: '分类', smallsort: [
            { name: '华语', path: '', isActive: false },
            { name: '男歌手', path: '', isActive: false },
            { name: '女歌手', path: '', isActive: false },
            { name: '乐队组合', path: '', isActive: false },
        ]
    },
    {
        bigsort: '筛选', smallsort: [
            { name: '华语', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
            { name: 'A', path: '', isActive: false },
        ]
    },
])
</script>

<style lang="scss" scoped>
.page5_Wrapper {
    :deep(.list_wrapper .mode1_body_housing .mode1_body .mode1_item) {
        width: 16%;
        padding-bottom: 16%;
        margin-right: 0.8%;
        margin-bottom: 33px;

        &:nth-child(6n) {
            margin-right: 0;
        }
    }
}
</style>