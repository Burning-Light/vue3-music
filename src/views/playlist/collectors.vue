<template>
    <div class="collectors_container">
        <div class="collectors_item" v-for="(item, index) in subscribersList" :key="index">
            <Portrait :size="`100px`" :url="item.avatarUrl" @click="goSubscriberDetail(item.userId)"></Portrait>
            <div class="username" @click="goSubscriberDetail(item.userId)">{{ item.nickname }}</div>
        </div>

    </div>
    <Pagination :datalength="totalCount" @pagechange="pageChange"></Pagination>
</template>

<script setup lang="ts">
import { ref, toRaw } from 'vue'
import Portrait from '@/components/Portrait.vue';
import Pagination from '@/components/Pagination.vue'
import { useRoute, useRouter } from 'vue-router';
import { getplaylistsubscribers } from '@/apis/playlist'
const route = useRoute()
const router = useRouter()
let subscribersList = ref()
let totalCount = ref()
const pageChange = (e: any) => {
    getplaylistsubscribers(route.query.id, 100, (e - 1) * 20).then(res => {
        subscribersList.value = res.subscribers
        totalCount.value = res.total
    })
}
getplaylistsubscribers(route.query.id, 100, 0).then(res => {
    subscribersList.value = res.subscribers
    totalCount.value = res.total
})
const goSubscriberDetail = (id: any) => {
    console.log(id)
}
</script>

<style lang="scss" scoped>
.collectors_container {
    display: flex;
    width: 95%;
    margin: 15px auto;
    flex-wrap: wrap;

    .collectors_item {
        width: 250px;
        position: relative;
        margin: 15px 0;
        margin-right: 20px;

        .username {
            position: absolute;
            width: 140px;
            left: 105px;
            top: 50%;
            transform: translateY(-50%);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;
        }
    }
}
</style>