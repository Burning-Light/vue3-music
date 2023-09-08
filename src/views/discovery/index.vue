<template>
    <Visiblepart>
        <Tab :data="tabList" />
        <div class="discovery_body">
            <RouterView></RouterView>
        </div>
        <!-- <div class="back"></div> -->
    </Visiblepart>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Tab from '@/components/Tab.vue'
import Visiblepart from '@/components/Visiblepart.vue';

const tabList: any = ref([
    { name: '个性推荐', path: '/discovery' },
    { name: '专属定制', path: '/discovery/page2' },
    { name: '歌单', path: '/discovery/page3' },
    { name: '排行榜', path: '/discovery/page4' },
    { name: '歌手', path: '/discovery/page5' },
    { name: '最新音乐', path: '/discovery/page6' },
])


</script>

<style lang="scss" scoped>
// .back {
//     background-color: #fff;
//     position: absolute;
//     top: 144px;
//     right: 0;
//     height: 100%;
//     width: 100%;
//     z-index: 20;
// }

.discovery_body {
    margin: 0 auto;
    margin-top: 5px;
    max-width: 900px;
    height: auto;
}
</style>