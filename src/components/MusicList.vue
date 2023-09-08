<template>
    <div class="musiclist_container">
        <div class="musiclist_top">
            <div class="top_item" v-for="(item, index) in musiclisttop" :key="index" :style="`width:${item.width}`">
                <span>{{ item.title }}</span>
            </div>
        </div>
        <div class="musiclist_body">
            <div class="musiclist_item" v-for="(item, index) in  props.data " :key="index"
                @dblclick="playback(item.id, item.name, item.dt, item.alpic)">
                <div class="item_num">
                    <span v-if="index + 1 < 10">0{{ index + 1 }}</span>
                    <span v-else>{{ index + 1 }}</span>
                </div>
                <div class="item_operate">
                    <i class="iconfont">&#xe69e;</i>
                    <i class="iconfont">&#xe60f;</i>
                </div>
                <div class="item_title">{{ item.name }}</div>
                <div class="item_singer">{{ item.arname }}</div>
                <div class="item_album">{{ item.alname }}</div>
                <div class="item_time">
                    <TimeFormat :time="item.dt" :mode="`xx:xx`" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TimeFormat from "./TimeFormat.vue";
import { checkmusic, getsongurl } from '@/apis/song'
import { useStore } from "vuex";
const store = useStore()
const props = defineProps({
    data: {
        type: Array,
        default: []
    }
})
const musiclisttop: any = ref([
    { title: '操作', width: '10%' },
    { title: '标题', width: '40%' },
    { title: '歌手', width: '23%' },
    { title: '专辑', width: '27%' },
    { title: '时间', width: '10%' }
])
const playback = (id: any, name: any, dt: any, alpic: any) => {
    store.commit('changePlayState', false)
    checkmusic(id).then(res => {
        if (res.success) {
            getsongurl(id).then(res => {
                // console.log(res.data[0])
                store.commit('getSong', { ...res.data[0], name, dt, alpic })
                setTimeout(() => {
                    store.commit('changePlayState', true)
                }, 0)
            })
        }
        else {
            alert(res.message)
        }
    })
}
</script>

<style lang="scss" scoped>
.musiclist_container {
    width: 100%;
    font-size: 14px;

    .musiclist_top {
        height: 30px;
        width: 100%;
        display: flex;

        color: #888888;
        background-color: #fff;

        .top_item {
            &:nth-last-child(-n+4) {
                display: flex;

                span {
                    margin: auto 5px;
                }

                &:hover {
                    background-color: #F2F2F3;
                }
            }

            &:first-child {
                display: flex;

                span {
                    margin: auto;
                }
            }
        }
    }

    .musiclist_body {
        width: 100%;

        .musiclist_item {
            width: 100%;
            height: 33px;
            display: flex;
            line-height: 33px;
            padding-left: 5px;
            box-sizing: border-box;

            &:nth-child(2n+1) {
                background-color: #FAFAFA;
            }

            >* {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            &:hover {
                background-color: #F2F2F3;
            }

            .item_num {
                width: 4%;
                color: #888888;
            }

            .item_operate {
                width: 6%;
                color: #888888;
                display: flex;
                justify-content: space-around;

                .iconfont {
                    cursor: pointer;
                }
            }

            .item_title {
                width: 40%;
            }

            .item_singer,
            .item_album {
                width: 23%;
                cursor: pointer;
                color: #646464;

                &:hover {
                    color: #000;
                }
            }

            .item_album {
                width: 27%;
            }

            .item_time {
                width: 10%;
                color: #888888;
            }
        }
    }
}
</style>