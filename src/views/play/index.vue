<template>
    <div class="playBackIntenface" ref="playBackIntenface" :class="!props.isShow ? 'slidein' : ''">
        <!-- <GlobalTop /> -->

        <div class="container">
            <div class="play_container">
                <div class="play_body">
                    <div class="left">
                        <img class="play_bar_support" src="../../assets/image/play-bar-support.png" alt="">
                        <img class="play_bar" :class="store.state.playState ? 'play_bar_rotate' : ''"
                            src="../../assets//image/play-bar.png" alt="">
                        <div class="cd_wrapper">
                            <img :src="store.state.song.alpic" alt="">
                        </div>
                    </div>
                    <div class="right"></div>
                </div>
                <Commentplace :data="commentlist" :loadmodel="1" :title="`全部评论`"></Commentplace>
                <Commentplace :data="commentlist" :loadmodel="2" :title="`最新评论`"></Commentplace>
            </div>
        </div>
        <div class="actionComment">
            <i class="iconfont">&#xe8ae;</i>
            <span>快来说点什么吧</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import GlobalTop from '@/components/GlobalTop.vue';
import { ref, onMounted, reactive, watch } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import Commentplace from '@/components/Commentplace.vue';
import { useStore } from 'vuex'
const store = useStore()
let isplay = ref(false)
const playBackIntenface: any = ref(null)
const commentlist: any = reactive([
    { portrait: 'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/live/876b76a0c63bd4c204f0dc47ef0ff7a6.mp4.jpg?x-oss-process=image/resize,type_6,m_fill,h_228,w_406', username: '用户用户用户', commentcontent: '内容内容内容内容内容内容内容', time: 1571988586320, replyinfo: { username: '回复用户', commentcontent: '回复内容回复内容回复内容回复内容' } },
    { portrait: 'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/live/876b76a0c63bd4c204f0dc47ef0ff7a6.mp4.jpg?x-oss-process=image/resize,type_6,m_fill,h_228,w_406', username: '用户用户用户', commentcontent: '内容内容内容内容内容内容内容', time: 1571988586320 },
    { portrait: 'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/live/876b76a0c63bd4c204f0dc47ef0ff7a6.mp4.jpg?x-oss-process=image/resize,type_6,m_fill,h_228,w_406', username: '用户用户用户', commentcontent: '内容内容内容内容内容内容内容', time: 1571988586320 },
    { portrait: 'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/live/876b76a0c63bd4c204f0dc47ef0ff7a6.mp4.jpg?x-oss-process=image/resize,type_6,m_fill,h_228,w_406', username: '用户用户用户', commentcontent: '内容内容内容内容内容内容内容', time: 1571988586320 },
    { portrait: 'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/live/876b76a0c63bd4c204f0dc47ef0ff7a6.mp4.jpg?x-oss-process=image/resize,type_6,m_fill,h_228,w_406', username: '用户用户用户', commentcontent: '内容内容内容内容内容内容内容', time: 1571988586320 },
    { portrait: 'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/live/876b76a0c63bd4c204f0dc47ef0ff7a6.mp4.jpg?x-oss-process=image/resize,type_6,m_fill,h_228,w_406', username: '用户用户用户', commentcontent: '内容内容内容内容内容内容内容', time: 1571988586320 },
    { portrait: 'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/live/876b76a0c63bd4c204f0dc47ef0ff7a6.mp4.jpg?x-oss-process=image/resize,type_6,m_fill,h_228,w_406', username: '用户用户用户', commentcontent: '内容内容内容内容内容内容内容', time: 1571988586320, replyinfo: { username: '回复用户', commentcontent: '回复内容回复内容回复内容回复内容' } },
])
onMounted(() => {
    setTimeout(() => {
        isplay.value = true
    }, 5000)
})

const props = defineProps({
    isShow: {
        type: Boolean,
        default: false
    }
})
watch(() => props.isShow, () => {
    if (props.isShow) {
        playBackIntenface.value.style.display = 'block'
        setTimeout(() => {
            playBackIntenface.value.style.top = `0`
        }, 0)

    }
    else {
        playBackIntenface.value.style.top = `calc(${100}vh - ${76}px)`
        setTimeout(() => {
            playBackIntenface.value.style.display = 'none'
        }, 200)
    }
}, { deep: true })


</script>

<style lang="scss" scoped>
.playBackIntenface {
    position: fixed;
    position: relative;
    top: 0;
    box-sizing: border-box;
    left: 0;
    width: 100%;
    height: calc(100vh - 76px);
    background-color: #fff;
    transition: top .3s ease;
    z-index: 11;
    display: none;
    // :deep(.GlobalTop_wrapper) {
    //     background-color: #ffffff00;
    //     border: none;
    //     // opacity: 0;
    //     transition: opacity 2s .3s ease;

    //     .left img,
    //     .right .userInfo,
    //     .right .clothes {
    //         opacity: 0;
    //     }

    //     .left .arrow .iconfont {
    //         pointer-events: none;
    //         background-color: #c2c2c227;
    //     }
    // }


    .container {
        position: absolute;
        top: 61px;
        left: 0;
        box-sizing: border-box;
        width: 100%;
        height: calc(100vh - 137px);
        overflow-y: scroll;

        .play_container {
            position: absolute;
            top: 0;
            left: 50%;
            box-sizing: border-box;
            transform: translateX(-50%);
            width: 810px;
            height: calc(100vh - 137px);

            .play_body {
                height: 550px;
                width: 100%;
                display: flex;

                .left {
                    position: relative;
                    width: 60%;

                    .play_bar_support {
                        transform: scale(0.3);
                        position: absolute;
                        top: -36px;
                        left: 207px;
                        z-index: 6;
                    }

                    .play_bar {
                        position: absolute;
                        left: 236px;
                        top: 3px;
                        transform-origin: 0 0;
                        transition: transform 1s ease;
                        transform: scale(0.5) rotate(-30deg);
                        z-index: 5;
                    }

                    .play_bar_rotate {

                        transform: scale(0.5) rotate(0);
                    }

                    .cd_wrapper {
                        position: absolute;
                        top: 73px;
                        left: 85px;
                        width: 280px;
                        height: 280px;
                        background-color: #000;
                        border: 16px solid #e4e4e4ee;
                        border-radius: 50%;
                        display: flex;

                        img {
                            width: 70%;
                            height: 70%;
                            margin: auto;
                            border-radius: 50%;
                            animation-name: imgrotate;
                            animation-duration: 30s;
                            animation-iteration-count: infinite;
                            animation-timing-function: linear;
                            animation-play-state: running;

                            @keyframes imgrotate {
                                from {
                                    transform: rotate(0deg);
                                }

                                to {
                                    transform: rotate(360deg);
                                }
                            }
                        }
                    }
                }

                .right {
                    width: 40%;
                    background-color: #ec7d7d;
                }
            }

            :deep(.commentplace_container .loadmore2) {
                padding-bottom: 100px;
            }
        }
    }

    .actionComment {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 7px 13px;
        border-radius: 20px;
        background-color: #F1F1F1;
        cursor: pointer;
        font-size: 13px;
        transition: all .3s ease;

        &:hover {
            background-color: #E1E1E1;
        }
    }
}

.slidein {
    top: calc(100vh - 76px);

    // :deep(.GlobalTop_wrapper) {
    //     opacity: 1;
    // }
}
</style>