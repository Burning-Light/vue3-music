<template>
    <Wrapper :mode="5" :title="`官方榜`" :data="officialList"></Wrapper>
    <Wrapper :mode="1" :title="`全球榜`" :data="globalList"></Wrapper>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import Wrapper from '@/components/wrapper.vue';
import { getHomepageBp } from '@/apis/discovery'
const globalList: any = ref([
    { title: '推荐歌单推荐歌单推荐' },
    { title: '推荐歌单推荐歌单推荐' },
    { title: '推荐歌单推荐歌单推荐' },
    { title: '推荐歌单推荐歌单推荐' },
    { title: '推荐歌单推荐歌单推荐' },
    { title: '推荐歌单推荐歌单推荐' },
    { title: '推荐歌单推荐歌单推荐' },
    { title: '推荐歌单推荐歌单推荐' },
    { title: '推荐歌单推荐歌单推荐' },
    { title: '推荐歌单推荐歌单推荐' },
])
const officialList: any = reactive([
    {
        catgories: '官方榜', path: '', info: [
            { heat: '200%', music: '歌名', author: '作者' },
            { heat: '200%', music: '歌名', author: '作者' },
            { heat: '200%', music: '歌名', author: '作者' },
            { heat: '200%', music: '歌名', author: '作者' },
            { heat: '200%', music: '歌名', author: '作者' },
        ]
    },
    {
        catgories: '官方榜', path: '', info: [
            { heat: '200%', music: '歌名', author: '作者' },
            { heat: '200%', music: '歌名', author: '作者' },
            { heat: '200%', music: '歌名', author: '作者' },
            { heat: '200%', music: '歌名', author: '作者' },
            { heat: '200%', music: '歌名', author: '作者' },
        ]
    },
    {
        catgories: '官方榜', path: '', info: [
            { heat: '200%', music: '歌名', author: '作者' },
            { heat: '200%', music: '歌名', author: '作者' },
            { heat: '200%', music: '歌名', author: '作者' },
            { heat: '200%', music: '歌名', author: '作者' },
            { heat: '200%', music: '歌名', author: '作者' },
        ]
    },
    {
        catgories: '官方榜', path: '', info: [
            { heat: '200%', music: '歌名', author: '作者' },
            { heat: '200%', music: '歌名', author: '作者' },
            { heat: '200%', music: '歌名', author: '作者' },
            { heat: '200%', music: '歌名', author: '作者' },
            { heat: '200%', music: '歌名', author: '作者' },
        ]
    }
])
getHomepageBp().then(res => {
    // res.data.blocks[3].creatives.map((item: any) => {
    //     item.resources.map((i: any) => {
    //         playlist1.push({ title: i.uiElement.mainTitle.title, pic: i.uiElement.image.imageUrl, ...i })
    //     })

    // })
    console.log(res.data.blocks)
})
</script>

<style lang="scss" scoped></style>