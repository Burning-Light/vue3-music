<template>
    <div class="wrapper">
        <div class="audio_progress" v-if="store.state.song?.url">
            <el-slider v-model="value2" size="small" :show-tooltip="false" :max="1000" @input="progressChange" />
        </div>
        <div class="wrapper_left" v-if="store.state.song?.url">
            <div class="pic" @click="showplay">
                <img :src="store.state.song.alpic" alt="">
                <div class="picmask">
                    <i class="iconfont" :class="store.state.isShowPlayback ? 'iconrotate' : ''">&#xe695;</i>
                </div>
            </div>
            <div class="attachment">
                <div class="title">{{ store.state.song.name }}</div>
                <div class="duration">
                    <span>
                        <TimeFormat :time="store.state.audioCurrentTime" :mode="`xx:xx`" />
                    </span>/<span>
                        <TimeFormat :time="store.state.song.time" :mode="`xx:xx`" />
                    </span>

                </div>
            </div>

        </div>

        <div class="wrapper_middle" :class="store.state.song?.url ? '' : 'withoutmusic'">
            <i class="iconfont back">&#xe607;</i>
            <i class="iconfont action" v-html="!store.state.playState ? '&#xea82;' : `&#xe611;`"
                @click="changePlayState"></i>
            <i class="iconfont next">&#x1010d;</i>
        </div>

        <div class="wrapper_right" v-if="store.state.song?.url">
            <i class="iconfont">&#xe606;</i>
            <div class="slider-demo-block">
                <el-slider v-model="value1" size="small" />
            </div>
            <!-- <i class="iconfont expand">&#xe629;</i> -->
            <el-dropdown placement="top" trigger="click">
                <span class="el-dropdown-link">
                    <i class="iconfont expand">&#xe629;</i>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import TimeFormat from './TimeFormat.vue';
const store = useStore()
const router = useRouter()
const value1 = ref(100)
const value2 = ref(0)
const likechange = ref(false)
const progressChange = (e: any) => {
    store.commit('dragprogress', e / 1000 * store.state.audioDuration)
}
watch(() => value1.value, () => {
    store.commit('updateAudioVolume', value1.value / 100)
})
watch(() => store.state.audioProgress, () => {
    value2.value = store.state.audioProgress
})

const showplay = () => {
    store.commit('changeShowPlayback')
}

const changePlayState = () => {
    if (store.state.playState) {
        store.commit('changePlayState', false)
    }
    else {
        store.commit('changePlayState', true)
    }

}
</script>

<style lang="scss" scoped>
.wrapper {
    position: fixed;
    bottom: 0;
    height: 55px;
    width: calc(100vw - 20px);
    border-top: 1px solid #e2e2e2;
    background-color: #fff;
    z-index: 12;
    display: flex;
    justify-content: space-between;
    padding: 10px;

    :deep(.el-slider__button) {
        border: none;
        background-color: #F1DBAD;
        width: 16px;
        height: 16px;
    }

    :deep(.el-slider__bar) {
        background-color: #F1DBAD;
    }

    .audio_progress {
        position: absolute;
        left: 0;
        top: -13px;
        width: 100%;

        :deep(.el-slider__button) {
            width: 10px;
            height: 10px;
        }

        :deep(.el-slider__runway) {
            height: 2px;

            .el-slider__bar {
                top: -2px;
            }

            .el-slider__button-wrapper {
                top: -17px;
            }
        }
    }

    .wrapper_left {
        height: 100%;
        position: relative;

        .pic {
            height: 55px;
            width: 55px;
            border-radius: 10px;
            cursor: pointer;
            position: relative;


            img,
            .picmask {
                height: 100%;
                width: 100%;
                border-radius: 10px;

            }

            .picmask {
                display: flex;
                position: absolute;
                top: 0;
                left: 0;
                z-index: -5;
                background-color: rgba(0, 0, 0, 0.4);
                overflow: hidden;
                flex-direction: column;

                .iconfont {
                    margin: auto;
                    color: #fff;
                    transition: transform .5s ease;
                }

                .iconrotate {
                    transform: rotate(180deg);
                }
            }

            &:hover {
                .picmask {
                    z-index: 10;
                }

                img {
                    filter: blur(1px);
                }
            }
        }

        .attachment {
            position: absolute;
            left: 70px;
            height: 50px;
            display: flex;
            bottom: 0;
            max-width: 120px;
            overflow: hidden;
            margin: auto 0;
            flex-direction: column;
            justify-content: space-between;

            .title {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .duration {
                font-size: 13px;
            }
        }

        .iconfont {
            margin-left: 5px;
            margin-top: 10px;
            font-size: 22px;
            cursor: pointer;
            color: #e2e2e2;
        }
    }

    .wrapper_middle {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 100%;
        display: flex;
        justify-content: center;

        .iconfont {
            color: #F1DBAD;
            cursor: pointer;

            &:hover {
                color: #eed297;
            }
        }

        .back,
        .next {
            font-size: 27px;
            margin: auto 0;
        }

        .action {
            font-size: 40px;
            margin: auto 15px;
        }

    }

    .withoutmusic {
        pointer-events: none;

        .iconfont {
            color: #f1dbad93;
        }
    }

    .wrapper_right {
        height: 100%;
        display: flex;

        .iconfont {
            margin: auto 0;
            font-size: 25px;
            margin-left: 20px;
        }

        .expand {
            margin-right: 20px;
            cursor: pointer;
        }

        .slider-demo-block {
            display: flex;
            align-items: center;
            margin: auto 0;
            width: 180px;
        }

        .slider-demo-block .el-slider {
            margin-top: 0;
            margin-left: 12px;
        }

        .example-showcase .el-dropdown-link {
            cursor: pointer;
            color: var(--el-color-primary);
            display: flex;
            align-items: center;
        }
    }


}
</style>