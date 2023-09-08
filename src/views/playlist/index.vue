<template>
    <Visiblepart>
        <ListHead :data="headData" />
        <div class="index_tab">
            <Tab :data="tabList" />
            <InputBox :text="`搜索歌单音乐`" v-if="route.fullPath == `/playlist?id=${route.query.id}`"></InputBox>
        </div>
        <RouterView></RouterView>
    </Visiblepart>
</template>

<script setup lang="ts">
import { ref, toRaw, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import Tab from '@/components/Tab.vue'
import InputBox from '@/components/InputBox.vue'
import Visiblepart from '@/components/Visiblepart.vue';
import ListHead from './listhead.vue'
import { getplaylistdetail } from '@/apis/playlist'

const route = useRoute()
const router = useRouter()
let headData = ref()
let tabList: any = ref([
    { name: '歌曲列表', path: `/playlist?id=${route.query.id}`, query: { id: route.query.id } },
    { name: '评论', path: `/playlist/comment?id=${route.query.id}`, query: { id: route.query.id } },
    { name: '收藏者', path: `/playlist/collectors?id=${route.query.id}`, query: { id: route.query.id } }
])
getplaylistdetail(route.query.id).then(res => {
    headData.value = { ...res.playlist, avatarUrl: res.playlist.creator.avatarUrl, nickname: res.playlist.creator.nickname }
    tabList.value[1].name = `评论(${res.playlist.commentCount})`
    // console.log(headData)
})

</script>

<style lang="scss" scoped>
.index_tab {
    position: relative;

    :deep(.demo-tabs) {
        .el-tabs__item {
            font-size: 15px;

            &.is-active {
                font-size: 18px;
            }
        }
    }

    :deep(.inputbox) {
        position: absolute;
        top: 7px;
        right: 0;
        height: 26px;
        border-radius: 20px;
    }

}
</style>