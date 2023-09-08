<template>
    <div class="page3Nav">
        <div class="nav_left" @click.prevent="showAllNav">{{ currentNav }}
            <i class="iconfont">&#xe687;</i>
        </div>
        <div class="nav_right">
            <div class="nav_right_item" :class="item.activity ? 'nav_right_item_active' : ''"
                v-for="(item, index) in hotplaylist" :key="index" @click="changeNav(item)">{{
                    item.name }}</div>
        </div>
        <div class="allNav" v-if="isShowAllNav">
            <div class="allNav_top">
                <span @click="toAllPlaylist" :class="isAllPlaylist ? 'nav_right_item_active' : ''">全部歌单</span>
            </div>
            <div class="allNav_body">
                <div class="catNav" v-for="(item, index) in allNavList" :key="index">
                    <div class="totalCat">
                        <i class="iconfont" v-html="item.icon"></i>
                        <span> {{ item.totalCat }}</span>
                    </div>
                    <div class="smallCat">
                        <div class="catNav_item" @click="changeNav(item1)" v-for="(item1, index) in item.itemCat"
                            :key="index">
                            <span class="itemname" :class="item1.activity ? 'nav_right_item_active' : ''">{{ item1.name
                            }} <span class="hottip" v-if="item1.hot">HOT</span></span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Wrapper :mode="1" :data="playlist1"></Wrapper>
    <Pagination :datalength="Pagination_Data_Length" :pagesize="100" @pagechange="pageChange" />
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount, computed, toRaw } from 'vue'
import Wrapper from '../../components/wrapper.vue'
import Pagination from '@/components/Pagination.vue'
import { getplaylistcatlist, getplaylisthot, gettopplaylist } from '@/apis/playlist'
const categories = ref([])
const sub = ref([])
const isAllPlaylist: any = ref(true)
const currentNav: any = ref('全部歌单')
const Pagination_Data_Length = ref(0)
let playlist1: any = ref([])
const allNavList: any = ref([
    { icon: '&#xe622;', totalCat: '', itemCat: [] },
    { icon: '&#xe61c;', totalCat: '', itemCat: [] },
    { icon: '&#xe61b;', totalCat: '', itemCat: [] },
    { icon: '&#xe653;', totalCat: '', itemCat: [] },
    { icon: '&#xe651;', totalCat: '', itemCat: [] },
])

getplaylistcatlist().then(res => {
    categories.value = Object.values(res.categories)
    for (let i = 0; i <= Object.values(res.categories).length - 1; i++) {
        allNavList.value[i].totalCat = Object.values(res.categories)[i]
        allNavList.value[i].category = i
    }
    res.sub.map((item: any) => {
        const index = item.category
        allNavList.value[index].itemCat.push({ ...item })
    })
    console.log(allNavList.value, res)
})
const hotplaylist: any = ref([])
getplaylisthot().then(res => {
    console.log(res.tags)
    hotplaylist.value = res.tags
})
const getplaylist1 = (params1: any, params2: any, params3: any) => {
    gettopplaylist(params1, params2, params3).then(res => {
        Pagination_Data_Length.value = res.total
        playlist1.value = res.playlists.map((item: any) => {
            return { title: item.name, user: item.creator.nickname, pic: item.coverImgUrl, ...item }
        })
    })
}
getplaylist1(100, toRaw(currentNav.value), 0)

const pageChange = (e: any) => {
    getplaylist1(100, toRaw(currentNav.value), (e - 1) * 100)
}



const changeNav = (Item: any) => {
    currentNav.value = Item.name
    getplaylist1(100, toRaw(currentNav.value), 0)
    isAllPlaylist.value = false
    clearActive()
    hotplaylist.value.map((item: any) => {
        if (Item.name == item.name) {
            item.activity = true
        }
    })
    allNavList.value.map((item: any) => {
        item.itemCat.map((i: any) => {
            if (Item.name == i.name) {
                i.activity = true
            }
        })
    })
}



const toAllPlaylist = () => {
    isAllPlaylist.value = true
    currentNav.value = '全部歌单'
    clearActive()
}


const clearActive = () => {
    hotplaylist.value.map((item: any) => {
        item.activity = false
    })
    allNavList.value.map((item: any) => {
        item.itemCat.map((i: any) => {
            i.activity = false
        })
    })
    isShowAllNav.value = false
}
const isShowAllNav: any = ref(false)
const showAllNav = () => {
    isShowAllNav.value = !isShowAllNav.value
}
const watchpopover = (event: any) => {
    const el1: any = document.querySelector('.allNav') || document.documentElement.querySelector('.allNav') || document.body.querySelector('.allNav')
    const el2: any = document.querySelector('.nav_left') || document.documentElement.querySelector('.nav_left') || document.body.querySelector('.nav_left')
    if (el1 !== null && !(event.target == el2) && !el1.contains(event.target)) {
        isShowAllNav.value = false
    }
}
onMounted(() => {
    document.addEventListener('click', watchpopover)
})
onBeforeUnmount(() => {
    document.removeEventListener('click', watchpopover)
})
</script>

<style lang="scss" scoped>
.page3Nav {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;

    .nav_left {
        font-size: 13px;
        height: 30px;
        padding: 0 20px;
        border-radius: 20px;
        border: 1px solid #c7c7c7;
        margin: auto 0;
        display: flex;
        line-height: 30px;
        cursor: pointer;

        .iconfont {
            margin-left: 5px;
            color: #949494;
            z-index: -5;
        }

        &:hover {
            background-color: #e6e6e6a2;
        }
    }

    .nav_right {
        width: 60%;
        display: flex;
        justify-content: space-between;
        font-size: 10px;
        margin: auto 0;
        color: #a8a8a8;


    }

    .nav_right_item {
        padding: 2px 5px;
        border-radius: 20%;

        &:hover {
            color: #000;
        }
    }

    .nav_right_item_active {
        background-color: #f1dbad81;
        color: #faad07;

        &:hover {
            color: #faad07;
        }
    }

    .allNav {
        position: absolute;
        top: 45px;
        border: 1px solid #d4d4d488;
        background-color: #fff;
        z-index: 11;
        height: auto;
        width: 578px;
        border-radius: 5px;
        font-size: 13px;
        padding-bottom: 70px;

        .allNav_top {

            width: 100%;
            height: 50px;
            position: relative;
            border-bottom: 1px solid #d4d4d488;

            span {
                position: absolute;
                left: 20px;
                top: 50%;
                transform: translateY(-50%);
                padding: 6px 10px;
                border-radius: 20px;
            }
        }

        .allNav_body {
            width: 100%;
            height: calc(100% - 50px);
            padding: 0 20px;
            box-sizing: border-box;

            .catNav {
                display: flex;
                justify-content: space-between;

                .totalCat {
                    padding: 12px 0;
                    color: #d4d4d4;
                    display: flex;

                    .iconfont {
                        font-size: 32px;
                        margin-top: -8px;
                    }
                }

                .smallCat {
                    width: 86%;
                    display: flex;
                    flex-flow: wrap;

                    .catNav_item {
                        width: 10%;
                        margin: 5px 18px;
                        font-size: 10px;
                        padding: 2px 5px;
                        border-radius: 20%;
                        position: relative;

                        .itemname {
                            white-space: nowrap;
                            padding: 2px 5px;
                            border-radius: 20%;
                            position: relative;

                            .hottip {
                                position: absolute;
                                right: -20px;
                                top: 0;
                                color: #faad07;
                                transform: scale(60%);
                            }
                        }



                        &:hover {
                            color: #faad07;
                        }
                    }
                }

            }
        }
    }
}

@media(max-width:991px) {
    .page3Nav .nav_right {
        width: 73%;
    }
}
</style>