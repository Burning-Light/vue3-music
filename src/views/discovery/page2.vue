<template>
    <div class="page2Container" v-infinite-scroll="load" :infinite-scroll-disabled="disabled"
        :infinite-scroll-immediate="false" :infinite-scroll-distance="50" ref="scrollRef">

        <Wrapper :title="`Anemone的雷达歌单`" :mode="1" :left="left" :data="playlist1" :iswrap="false">
            <div class="tool">
                <div class="tip">根据你的红心收藏为你推荐更多宝藏歌单</div>
                <div class="arrow">
                    <i class="iconfont" @click="back" :class="left == 0 ? 'icondisabled' : ''">&#xe686;</i>
                    <i class="iconfont" @click="forward"
                        :class="left == playlist1.length - 6 ? 'icondisabled' : ''">&#xe687;</i>
                </div>
            </div>
        </Wrapper>
        <Wrapper :title="`午后音乐红茶`" :mode="1" :data="playlist2"></Wrapper>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed, reactive, toRaw } from 'vue'
import Wrapper from '../../components/wrapper.vue'
import { getHomepageBp } from '@/apis/discovery'
import { getpersonalized } from '@/apis/playlist'
const count: any = ref(0)
const loading = ref(false)
const noMore = computed(() => count.value >= 90)
const disabled = computed(() => loading.value || noMore.value)
const playlist1: any = reactive([])
const playlist2: any = reactive([])
let personalized: any = sessionStorage.getItem('personalized') || []
if (typeof (personalized) == 'object') {
    getpersonalized().then(res => {
        pushPL2(res.result)
    })
}
else if (typeof (personalized) == 'string') {
    for (let i = 0; i <= 9; i++) {
        playlist2.push(JSON.parse(personalized)[i])
    }
}


let BLOCK_MGC_PLAYLIST: any = sessionStorage.getItem('HOMEPAGE_BLOCK_MGC_PLAYLIST') || []
if (typeof (BLOCK_MGC_PLAYLIST) == 'object') {
    getHomepageBp().then(res => {
        pushPL1(res)
    })
}
else if (typeof (BLOCK_MGC_PLAYLIST) == 'string') {
    JSON.parse(BLOCK_MGC_PLAYLIST).map((item: any) => {
        playlist1.push(item)
    })
}



const load = () => {
    count.value += 10
    if (typeof (personalized) == 'object') {
        for (let i = count.value; i <= count.value + 9; i++) {
            playlist2.push(personalized[i])
        }
    }
    else {
        for (let i = count.value; i <= count.value + 9; i++) {
            playlist2.push(JSON.parse(personalized)[i])
        }
    }
    // loading.value = true
    // setTimeout(() => {
    //     loading.value = false
    // }, 500)
}

let left: any = ref(0)
const back = () => {
    if (left.value >= 1) {
        left.value = left.value - 1
    } else return
}

const forward = () => {
    if (left.value <= playlist1.length - 6) {
        left.value = left.value + 1
    } else return
}
const pushPL1 = (params: any) => {
    params.data.blocks[4].creatives.map((item: any) => {
        item.resources.map((i: any) => {
            playlist1.push({ title: i.uiElement.mainTitle.title, pic: i.uiElement.image.imageUrl, creativeId: item.creativeId })
            playlist1.push({ title: i.uiElement.mainTitle.title, pic: i.uiElement.image.imageUrl, creativeId: item.creativeId })
        })
    })
    BLOCK_MGC_PLAYLIST = JSON.stringify(toRaw(playlist1))
    sessionStorage.setItem('HOMEPAGE_BLOCK_MGC_PLAYLIST', BLOCK_MGC_PLAYLIST)
}
const pushPL2 = (params: any) => {
    if (!personalized) {
        let isId = JSON.parse(personalized).map((i: any) => {
            return i.id
        })
        params.map((item: any) => {
            if (!isId.includes(item.id)) {
                JSON.parse(personalized).push({ title: item.name, pic: item.picUrl, id: item.id, ...item })
            }
        })
        sessionStorage.setItem('personalized', personalized)
    }
    else {
        params.map((item: any) => {
            personalized.push({ title: item.name, pic: item.picUrl, id: item.id, ...item })
        })
        sessionStorage.setItem('personalized', JSON.stringify(personalized))
    }
    for (let i = count.value + 1; i <= count.value + 10; i++) {
        playlist2.push(personalized[i])
    }
}


</script>

<style lang="scss" scoped>
.page2Container {
    .tool {
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
        box-sizing: border-box;

        .tip {
            color: #bebebe;
            font-size: 14px;
        }

        .arrow .iconfont {
            background-color: #F5F5F5;
            border-radius: 50%;
            color: #9D9D9D;
            font-size: 20px;
            padding: 5px;
            cursor: pointer;

            &:first-child {
                margin-right: 10px;
            }

            &:hover {
                background-color: #D6D6D6;
                color: #353535;
            }

        }

        .arrow .icondisabled {
            pointer-events: none;
            color: #D6D6D6;
        }
    }
}
</style>