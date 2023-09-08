<template>
    <div class="GlobalTop_wrapper">
        <div class="left">
            <img src="http://www.oceanrainbow.top/img/robot5.png" alt="" v-if="!store.state.isShowPlayback">
            <div class="arrow_down" v-if="store.state.isShowPlayback" @click="closePlayback">
                <i class="iconfont">&#x1010f;</i>
            </div>
            <div class="arrow" v-if="!store.state.isShowPlayback">
                <i class="iconfont" @click="back">&#xe686;</i>
                <i class="iconfont" @click="forward">&#xe687;</i>
            </div>
        </div>
        <div class="right">
            <InputBox />
            <div class="userInfo" v-if="!store.state.isShowPlayback">
                <img src="https://img-baofun.zhhainiao.com/pcwallpaper_ugc/live/876b76a0c63bd4c204f0dc47ef0ff7a6.mp4.jpg?x-oss-process=image/resize,type_6,m_fill,h_228,w_406"
                    alt="">
                <div class="username">Anemone</div>
                <i class="iconfont">&#x1010b;</i>
            </div>
            <i class="iconfont clothes" v-if="!store.state.isShowPlayback">&#xe647;</i>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, toRaw } from 'vue';
import InputBox from '@/components/InputBox.vue'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()
const route = useRoute()
const back = () => {
    router.back()
}
const forward = () => {
    router.forward()
}
const closePlayback = () => {
    store.commit('changeShowPlayback')
}
</script>

<style lang="scss" scoped>
.GlobalTop_wrapper {
    height: 60px;
    width: 100%;
    background-color: #ffffff;
    border-bottom: 1px solid #e2e2e2;
    position: fixed;
    top: 0;

    z-index: 12;
    display: flex;
    justify-content: space-between;

    .left {
        position: relative;
        display: flex;
        color: #c5c5c5;
        height: 100%;
        width: 200px;
        justify-content: space-between;

        .arrow_down {
            margin: auto 0;
            width: 60px;
            margin-left: 100px;

            .iconfont {
                font-size: 23px;
                color: #000;
                cursor: pointer;
            }
        }

        img {
            height: 40px;
            width: auto;
            margin: auto 0;
        }

        .arrow {
            margin: auto 0;

            .iconfont {
                padding: 7px;
                font-size: 23px;
                cursor: pointer;
                border-radius: 50%;

                &:hover {
                    background-color: #c2c2c227;
                }

                &:first-child {
                    margin-right: 15px;
                }
            }

        }
    }

    .right {
        height: 100%;
        display: flex;

        .userInfo {
            height: 32px;
            display: flex;
            margin: auto 0;
            margin-right: 20px;
            cursor: pointer;

            img {
                height: 32px;
                width: 32px;
                border-radius: 50%;
            }

            .username {
                line-height: 35px;
                color: #c5c5c5;
                margin-left: 10px;

                &:hover {
                    color: #5e5e5e;
                }
            }

            .iconfont {
                line-height: 35px;
                color: #c5c5c5;

                &:hover {
                    color: #5e5e5e;
                }
            }
        }

        .clothes {
            color: #c5c5c5;
            margin: auto 0;
            margin-right: 50px;
            font-size: 22px;
            cursor: pointer;

            &:hover {
                color: #5e5e5e;
            }
        }
    }
}
</style>