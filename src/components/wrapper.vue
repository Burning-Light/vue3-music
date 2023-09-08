<template>
    <div class="list_wrapper">
        <div class="list_wrapper_top" v-if="title">
            <div class="wrapper_top" :style="titleclick ? 'cursor: pointer;' : ''" @click="routeChange">
                <div class="title">{{ title }}</div>
                <i class="iconfont" v-if="titleclick">&#xe687;</i>
            </div>
        </div>
        <slot></slot>
        <div class="mode1_body_housing" v-if="mode == 1" :style="iswrap ? `` : `overflow: hidden;`">
            <div class="mode1_body" :style="[iswrap ? `` : `flex-wrap:nowrap`]">
                <div class="mode1_item" v-for="(item, index) in Data" :key="index"
                    :style="iswrap ? `` : `margin-right:2.5%`" @click="godetail(item)">
                    <div class="mode1_img">
                        <div class="play_count">
                            <i class="iconfont counticon">&#xe6cf;</i>
                            <CountFormat :count="item.playCount" />
                        </div>
                        <div class="userinfo" v-if="item.user">
                            <i class="iconfont">&#xe60e;</i>
                            <span>{{ item.user }}</span>
                        </div>
                        <i class="iconfont playicon">&#xea82;</i>
                        <img :src="item.pic" alt="">
                    </div>
                    <span class="mode1_item_title">
                        {{ item.title }}
                    </span>
                </div>
            </div>
        </div>
        <div class="mode2_body" v-else-if="mode == 2">
            <div class="mode2_item" v-for="(item, index) in 6" :key="index" :style="`width:${width}`">
                <div class="item_img">
                    <i class="iconfont">&#xea82;</i>
                    <img src="https://img-baofun.zhhainiao.com/pcwallpaper_ugc/live/876b76a0c63bd4c204f0dc47ef0ff7a6.mp4.jpg?x-oss-process=image/resize,type_6,m_fill,h_228,w_406"
                        alt="">
                </div>
                <div class="info">
                    <div class="mode2_item_title">热门博客热门博客热门博客热门博客</div>
                    <div class="mode2_tag">热门博客热门博客热门博客</div>
                    <div class="mode2_author">热门博客热门博客热门博客热门博客</div>
                </div>
            </div>
        </div>
        <div class="mode3_body" v-else-if="mode == 3">
            <div class="mode3_item" v-for="(item, index) in 12" :key="index" :style="`width:${width}`"
                @click="godetail(item)">
                <div class="item_img">
                    <i class="iconfont">&#xea82;</i>
                    <img src="https://img-baofun.zhhainiao.com/pcwallpaper_ugc/live/876b76a0c63bd4c204f0dc47ef0ff7a6.mp4.jpg?x-oss-process=image/resize,type_6,m_fill,h_228,w_406"
                        alt="">
                </div>
                <div class="mode3_info">
                    <div class="mode3_item_title">最新音乐最新音乐最新音乐最新音乐最新音乐最新音乐最新音乐最新音乐</div>
                    <div class="mode3_author">最新音乐最新音乐最新音乐最新音乐最新音乐最新音乐</div>
                </div>
            </div>
        </div>
        <div class="mode4_body" v-else-if="mode == 4">
            <div class="mode4_item" v-for="(item, index) in 8" :key="index" :style="`width:${width}`"
                @click="godetail(item)">
                <div class="play_count">
                    <i class="iconfont">&#xe6cf;</i>
                    <span>220万</span>
                </div>
                <div class="item_img">
                    <img src="https://img-baofun.zhhainiao.com/pcwallpaper_ugc/live/876b76a0c63bd4c204f0dc47ef0ff7a6.mp4.jpg?x-oss-process=image/resize,type_6,m_fill,h_228,w_406"
                        alt="">
                </div>
                <div class="mode4_info">
                    <div class="mode4_item_title">最新音乐最新音乐最新音乐最新音乐最新音乐最新音乐最新音乐最新音乐</div>
                    <div class="mode4_author">最新音乐最新音乐最新音乐最新音乐最新音乐最新音乐</div>
                </div>
            </div>
        </div>
        <div class="mode5_body" v-else-if="mode == 5">
            <div class="mode5_item" v-for="(item, index) in Data" :key="index" :style="`width:${width}`">
                <div class="item_img">
                    <img src="https://img-baofun.zhhainiao.com/pcwallpaper_ugc/live/876b76a0c63bd4c204f0dc47ef0ff7a6.mp4.jpg?x-oss-process=image/resize,type_6,m_fill,h_228,w_406"
                        alt="">
                    <div class="catgories">
                        <span>{{ item.catgories }}</span>
                        <div class="time">8月14日更新</div>
                    </div>

                </div>
                <div class="des_list">
                    <div class="des_list_item" v-for="(item1, index) in item.info" :key="index" :style="`width:${width}`">
                        <span class="item_rank">{{ index + 1 }}</span>
                        <span class="percentage">{{ item1.heat }}</span>
                        <span class="music_name">{{ item1.music }}</span>
                        <span class="music_author">{{ item1.author }}</span>
                    </div>
                    <div class="godetail">
                        <span>查看全部</span>
                        <i class="iconfont">&#xe687;</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, toRaw, onUnmounted } from 'vue'
import { divmove } from '@/util/divmove'
import { useRouter } from 'vue-router';
import CountFormat from '@/components/CountFormat.vue';
const router = useRouter()
const props = defineProps({
    path: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    iswrap: {
        type: Boolean,
        default: true
    },
    titleclick: {
        type: Boolean,
        default: false
    },
    data: {
        type: Array,
        default: []
    },
    left: {
        type: Number,
        default: 0
    },
    mode: {
        type: Number,
        default: 1
    },
    width: {
        type: String,
        default: ''
    }
})
let Data: any = ref([])
const screenWidth = ref(window.innerWidth)
watch(() => props.left, (newval, oldval) => {
    divmove('.mode1_body', '.mode1_item', props.left, 'row')
}, { deep: true })
watch(() => props.data, (newval, oldval) => {
    Data.value = props.data
    setTimeout(() => {
        const el1: any = document.querySelector('.mode1_body_housing')
        const el2: any = document.querySelector('.mode1_body')
        el1.style.height = el2.offsetHeight + 'px'
    }, 0)
}, { deep: true, immediate: true })

onMounted(() => {
    window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
const godetail = (item: any) => {
    console.log(item.id)
    router.push({
        path: `/playlist?id=${item.id}`,
        query: {
            id: item.id
        }
    })
}
const handleResize = () => {
    setTimeout(() => {
        screenWidth.value = window.innerWidth
        const el1: any = document.querySelector('.mode1_body_housing')
        const el2: any = document.querySelector('.mode1_body')
        el1.style.height = el2.offsetHeight + 'px'
    }, 1000)

}


const routeChange = () => {
    const { path } = props
    router.push({
        path
    })
}
</script>

<style lang="scss" scoped>
.list_wrapper {
    width: 100%;
    height: auto;

    .list_wrapper_top {
        display: flex;

        .wrapper_top {
            display: flex;
            padding-top: 10px;

            .title {
                font-weight: 600;
                font-size: 20px;
                color: #000000cb;

                &:hover {
                    color: #000;
                }
            }

            .iconfont {
                margin: auto 0;
            }
        }

    }

    .mode1_body_housing {
        width: 100%;
        position: relative;

        .mode1_body {
            position: absolute;
            left: 0;
            top: 0;
            transition: left ease .5s;
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            background-color: #fff;

            .mode1_item {
                flex-shrink: 0;
                margin-top: 10px;
                margin-bottom: 60px;
                width: 18%;
                padding-bottom: 18%;
                background-color: #475669;
                position: relative;
                border-radius: 7px;
                cursor: pointer;
                margin-right: 2.5%;

                &:nth-child(5n) {
                    margin-right: 0;
                }

                .mode1_img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 7px;

                    .userinfo {
                        position: absolute;
                        color: #fff;
                        display: flex;
                        bottom: 8px;
                        left: 8px;
                        width: 60%;

                        .iconfont,
                        span {
                            margin: auto 0;
                        }

                        span {
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: block;
                        }
                    }

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 7px;
                    }

                    .playicon {
                        position: absolute;
                        right: 10px;
                        bottom: 10px;
                        z-index: 10;
                        color: #f1dbad00;
                        font-size: 35px;
                        transition: color ease .5s;
                    }

                    .play_count {
                        position: absolute;
                        right: 8px;
                        top: 5px;
                        font-size: 10px;
                        color: #fff;
                        z-index: 10;

                        .counticon {
                            margin-right: 2px;

                        }
                    }

                    &:hover {
                        .playicon {
                            color: #F1DBAD;
                        }
                    }
                }

                .mode1_item_title {
                    position: absolute;
                    color: #475669;
                    top: 105%;
                    width: 100%;
                    word-break: break-all;
                    overflow: hidden;
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;

                }

                span {
                    font-size: 13px;
                }
            }
        }
    }


    .mode2_body,
    .mode3_body,
    .mode4_body {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-bottom: 40px;


        .mode2_item,
        .mode3_item,
        .mode4_item {
            width: 49%;
            padding-bottom: 8%;
            position: relative;
            border-radius: 7px 0 0 7px;
            margin-top: 10px;


            .item_img {
                position: absolute;
                height: 100%;
                width: 17%;
                border-radius: 7px;
                border: 1px solid #EBEBEB;
                box-sizing: border-box;
                cursor: pointer;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 7px;
                }

                .iconfont {
                    position: absolute;
                    right: 5px;
                    bottom: 5px;
                    color: #F1DBAD;
                    font-size: 20px;
                }
            }

            .info,
            .mode3_info,
            .mode4_info {
                color: #acacac;
                height: 100%;
                width: 50%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                position: absolute;
                left: 19%;
                font-size: 10px;

                .mode2_item_title {
                    font-size: 13px;
                }

                .mode2_item_title,
                .mode2_author,
                .mode2_tag,
                .mode3_item_title,
                .mode3_author,
                .mode4_item_title,
                .mode4_author {
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                .mode2_item_title,
                .mode3_item_title {
                    color: #000;
                }
            }

            &:hover {
                background-color: #EBEBEB;
            }
        }

        .mode2_item {
            margin-right: 2%;

            &:nth-child(2n) {
                margin-right: 0;
            }
        }

        .mode3_item {
            width: 33%;
            padding-bottom: 6%;
            margin-right: 0.5%;


            &:nth-child(3n) {
                margin-right: 0;
            }

            &:nth-last-child(-n+9) {
                margin-top: 10px;
            }

            .item_img {
                width: 18%;

                .iconfont {
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }

            .mode3_info {
                font-size: 7px;
                left: 20%;
            }
        }

        .mode4_item {
            width: 22%;
            padding-bottom: 19%;
            margin-right: 4%;


            &:nth-child(4n) {
                margin-right: 0;
            }

            .play_count {
                position: absolute;
                right: 8px;
                top: 5px;
                font-size: 10px;
                color: #fff;
                z-index: 10;

                .iconfont {
                    margin-right: 2px;
                }
            }

            .item_img {
                width: 100%;
                height: 70%;
            }

            .mode4_info {
                height: 30%;
                left: 0;
                bottom: 0;
                width: 70%;

                .mode4_item_title {
                    color: #000;
                    font-size: 13px;
                    cursor: pointer;
                }

                .mode4_author {
                    cursor: pointer;
                }
            }

            &:hover {
                background-color: #fff;
            }
        }
    }

    .mode5_body {
        width: 100%;

        .mode5_item {
            margin: 10px 0 50px 0;
            width: 100%;
            padding-bottom: 19%;
            position: relative;

            .item_img {
                position: absolute;
                left: 0;
                width: 20%;
                height: 100%;
                border-radius: 10px;
                overflow: hidden;
                cursor: pointer;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                    filter: blur(9px);

                }

                .catgories {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 100%;
                    transform: translate(-50%, -50%);
                    font-weight: 600;
                    color: #fff;
                    text-align: center;
                    font-size: 30px;

                    .time {
                        font-weight: 400;
                        font-size: 10px;
                    }
                }
            }

            .des_list {
                width: 75%;
                height: 100%;
                position: absolute;
                right: 0;
                font-size: 10px;

                .des_list_item {
                    height: 20%;
                    background-color: #fff;
                    display: flex;
                    position: relative;
                    padding: 0 10px;
                    margin-bottom: 1px;
                    border-radius: 5px;

                    span {
                        margin: auto 10px auto 0;
                        color: #B6B796;
                    }

                    .music_name {
                        color: #000;
                    }

                    &:nth-child(-n+3) {
                        .item_rank {
                            color: #ff0000;
                        }


                    }


                    .music_author {
                        position: absolute;
                        right: 0;
                        top: 50%;
                        transform: translateY(-50%);
                    }



                    &:nth-child(2n) {
                        background-color: #FAFAFA;
                    }

                    &:hover {
                        background-color: #F5F5F5;
                    }
                }

                .godetail {
                    color: #aaaaaa;
                    height: 18px;
                    cursor: pointer;

                    .iconfont,
                    span {
                        font-size: 10px;
                        line-height: 18px;
                    }
                }
            }
        }
    }
}
</style>