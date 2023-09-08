<template>
    <MusicList :data="musicList"></MusicList>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MusicList from '@/components/MusicList.vue'
import { getplaylisttrackall } from '@/apis/playlist'
import { useRoute } from 'vue-router';
const route = useRoute()
let musicList: any = ref()
getplaylisttrackall(route.query.id, 1000, 0).then(res => {
    musicList.value = res.songs.map((item: any) => {
        return { ...item, alid: item.al.id, alname: item.al.name, alpic: item.al.picUrl, arid: item.ar[0].id, arname: item.ar[0].name }
    })
    // console.log(musicList.value)
})
</script>

<style scoped></style>