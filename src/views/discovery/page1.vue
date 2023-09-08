<template>
    <el-carousel :interval="4000" type="card" height="200px" indicator-position="outside">
        <el-carousel-item v-for="(item, index) in bannerList" :key="item.bannerId">
            <img :src="item.pic" alt="">
        </el-carousel-item>
    </el-carousel>
    <Wrapper :title="`推荐歌单`" :mode="1" :titleclick="true" :data="recommend" :path="`/discovery/page3`" />
    <Wrapper :title="`热门博客`" :mode="2" :titleclick="true" :data="hotblog" :path="`/blog`" />
    <Wrapper :title="`最新音乐`" :mode="3" :titleclick="true" :path="`/discovery/page6`" />
    <Wrapper :title="`推荐MV`" :mode="4" :titleclick="true" :path="`/discovery/page3`" />
</template>

<script setup lang="ts">
import { ref, toRaw, reactive } from 'vue'
import Wrapper from '../../components/wrapper.vue'
import { getHomepageBp } from '@/apis/discovery'
const hotblog: any = ref([
    { title: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客热门博客', author: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客', tag: '热门博客热门博客热门博客热门博客' },
    { title: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客热门博客', author: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客', tag: '热门博客热门博客热门博客热门博客' },
    { title: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客热门博客', author: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客', tag: '热门博客热门博客热门博客热门博客' },
    { title: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客热门博客', author: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客', tag: '热门博客热门博客热门博客热门博客' },
    { title: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客热门博客', author: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客', tag: '热门博客热门博客热门博客热门博客' },
    { title: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客热门博客', author: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客', tag: '热门博客热门博客热门博客热门博客' },
    { title: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客热门博客', author: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客', tag: '热门博客热门博客热门博客热门博客' },
    { title: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客热门博客', author: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客', tag: '热门博客热门博客热门博客热门博客' },
    { title: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客热门博客', author: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客', tag: '热门博客热门博客热门博客热门博客' },
    { title: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客热门博客', author: '热门博客热门博客热门博客热门博客热门博客热门博客热门博客', tag: '热门博客热门博客热门博客热门博客' },
])
let recommend: any = reactive([
])
let bannerList: any = reactive([])

getHomepageBp().then(res => {
    const data = res.data.blocks[0].extInfo.banners
    bannerList.push(...data)
    let transferRCMD: any = []
    res.data.blocks[1].creatives.map((item: any) => {
        transferRCMD.push(...item.resources)
    })
    transferRCMD.map((item: any) => {
        recommend.push({ title: item.uiElement.mainTitle.title, pic: item.uiElement.image.imageUrl, playCount: item.resourceExtInfo.playCount, ...item })
    })
})

</script>

<style lang="scss" scoped>
.el-carousel__item {
    img {
        height: 100%;
        width: 100%;
    }
}
</style>