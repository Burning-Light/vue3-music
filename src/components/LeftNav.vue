<template>
    <el-scrollbar class="nav_wrapper">

        <div class="main_nav">
            <RouterLink class="item" v-for="item in mainnav" :key="item.id" :to="item.path" @click="mainNavChange(item)"
                :class="item.path == route.path ? 'itemactive' : ''">
                <span>{{ item.name }}</span>
            </RouterLink>
        </div>
        <ul class="my_music">
            <div class="title">我的音乐</div>
            <li class="item" v-for="item in mymusiclist" :key="item.id" @click="mainNavChange(item)"
                :class="item.path == route.path ? 'itemactive' : ''">
                <span>{{ item.name }}</span>
            </li>
        </ul>
        <ul class="createdList">
            <div class="title">创建的歌单<i class="iconfont arrow" @click.stop="createdarrow = !createdarrow"
                    v-html="createdarrow ? '&#xe688;' : '&#x1010b;'"></i><i class="iconfont add">&#xe727;</i></div>
            <li class="item" v-for="item in createdList" :key="item.id" @click="mainNavChange(item)"
                :class="item.path == route.path ? 'itemactive' : ''" v-show="createdarrow">
                <span>{{ item.name }}</span>
            </li>
        </ul>
        <ul class="favoriteList">
            <div class="title">收藏的歌单<i class="iconfont arrow" @click.stop="favoritearrow = !favoritearrow"
                    v-html="favoritearrow ? '&#xe688;' : '&#x1010b;'"></i><i class="iconfont add">&#xe727;</i></div>
            <li class="item" v-for="item in favoriteList" :key="item.id" @click="mainNavChange(item)"
                :class="item.path == route.path ? 'itemactive' : ''" v-show="favoritearrow">
                <span>{{ item.name }}</span>
            </li>
        </ul>

    </el-scrollbar>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
watch(route, () => {
}, { deep: true, immediate: true })
const mainnav: any = ref([
    { id: 0, name: '发现音乐', path: '/discovery' },
    { id: 1, name: '博客', path: '/blog' },
    { id: 2, name: '视频', path: '/video' },
    { id: 3, name: '关注', path: '/follow' },
    { id: 4, name: '直播', path: '' },
    { id: 5, name: '私人漫游', path: '/roam' }
])
const mymusiclist: any = ref([
    { id: 0, name: '我喜欢的音乐', path: '/playlist' },
    { id: 1, name: '本地与下载', path: '' },
    { id: 2, name: '最近播放', path: '' },
    { id: 3, name: '我的音乐云盘', path: '' },
    { id: 4, name: '我的博客', path: '' },
    { id: 5, name: '我的收藏', path: '' }
])
const createdList: any = ref([
    { id: 0, name: 'createdList', path: '' },
    { id: 1, name: 'createdList', path: '' },
    { id: 2, name: 'createdList', path: '' },
    { id: 3, name: 'createdList', path: '' },
    { id: 4, name: 'createdList', path: '' },
    { id: 5, name: 'createdList', path: '' }
])
const favoriteList: any = ref([
    { id: 0, name: 'favoriteList', path: '' },
    { id: 1, name: 'favoriteList', path: '' },
    { id: 2, name: 'favoriteList', path: '' },
    { id: 3, name: 'favoriteList', path: '' },
    { id: 4, name: 'favoriteList', path: '' },
    { id: 5, name: 'favoriteList', path: '' }
])
const createdarrow: any = ref(false)
const favoritearrow: any = ref(false)
// const clearActive = () => {
//     mainnav.value.map((item: any) => {
//         item.isactive = false
//     })
//     mymusiclist.value.map((item: any) => {
//         item.isactive = false
//     })
//     createdList.value.map((item: any) => {
//         item.isactive = false
//     })
//     favoriteList.value.map((item: any) => {
//         item.isactive = false
//     })
// }
const mainNavChange = (item: any) => {
    router.push({
        path: item.path
    })
}
</script>

<style lang="scss" scoped>
li {
    list-style: none;
}

a {
    text-decoration: none;
}

.nav_wrapper {
    width: 190px;
    height: calc(100vh - 140px);
    position: fixed;
    top: 60px;
    border-right: 1px solid #e2e2e2;
    padding-left: 10px;

    // &::-webkit-scrollbar {
    //     display: none;
    //     width: 7px;
    //     height: 7px;
    // }

    // &::-webkit-scrollbar-thumb {
    //     /*滚动条里面小方块*/
    //     border-radius: 10px;
    //     background-color: rgb(209, 209, 209);
    // }

    // &:hover {
    //     &::-webkit-scrollbar {
    //         display: block;
    //     }
    // }

    .item {
        width: 180px;
        height: 43px;
        margin-bottom: 2px;
        border-radius: 7px;
        font-size: 15px;
        display: block;

        span {
            line-height: 43px;
            margin-left: 10px;
            color: #000;

        }

        &:hover {
            cursor: pointer;
            background-color: #F6F6F7;
        }
    }

    .itemactive {
        background-color: #F6F6F7;
    }

    .main_nav {
        margin: 10px 0;

        .itemactive {
            background-color: #F6F6F7;
            font-size: 17px;
            font-weight: 600;
        }
    }

    .my_music,
    .createdList,
    .favoriteList {
        .title {
            font-size: 14px;
            color: #b8b8b8;
            margin-bottom: 10px;
            position: relative;

            .arrow,
            .add {
                cursor: pointer;
                position: absolute;
                left: 70px;
                top: 50%;
                transform: translateY(-50%);
            }

            .add {
                left: 160px;
            }
        }

    }
}

// @media(max-width: 876px) {
//     .nav_wrapper {
//         height: 600px;
//     }
// }
</style>