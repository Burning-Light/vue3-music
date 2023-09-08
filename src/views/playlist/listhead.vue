<template>
    <div class="listhead_container">
        <div class="image">
            <img :src="props.data.coverImgUrl" alt="">
        </div>
        <div class="listhead_main">
            <div class="title">
                <div class="tag">歌单</div>
                <span>{{ props.data.name }}</span>
            </div>
            <div class="author">
                <div class="author_img">
                    <img :src="props.data.avatarUrl" alt="">
                </div>
                <span class="autorInfo">{{ props.data.nickname }}</span>
                <span class="createTime">
                    <TimeFormat :time="props.data.createTime" />创建
                </span>
            </div>
            <div class="operator">
                <div class="operator_button playall"><i class="iconfont">&#xe6a4;</i>播放全部</div>
                <div class="operator_button">
                    <i class="iconfont">&#xe615;</i>收藏(
                    <CountFormat :count="props.data.subscribedCount" />)
                </div>
                <div class="operator_button">
                    <i class="iconfont">&#xe658;</i>分享(
                    <CountFormat :count="props.data.shareCount" />)
                </div>
                <div class="operator_button"><i class="iconfont">&#xe659;</i>下载全部</div>
            </div>
            <div class="listhead_main_tag">
                标签:
                <span class="tag_item" v-for="(item, index) in props.data.tags" :key="index">{{ item }}<span class="symbol"
                        v-if="index != 2"> /
                    </span></span>
            </div>
            <div class="listhead_main_count">
                <span>歌曲:35</span>
                <!-- props.data.playCount -->
                <span>播放:
                    <CountFormat :count="props.data.playCount" />
                </span>
            </div>
            <div class="intro">
                <span class="intro_title">简介:</span>
                <span class="intro_content" :class="isExpand ? 'intro_expand' : ''" v-html="props.data.description"></span>
                <i class="iconfont" @click="isExpand = !isExpand" v-html="isExpand ? '&#x1010e;' : '&#x1010b;'"></i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CountFormat from '@/components/CountFormat.vue';
import TimeFormat from '@/components/TimeFormat.vue';
import { ref } from 'vue'
const props = defineProps({
    data: {
        type: Object,
        default: {}
    }
})
const isExpand = ref(false)
</script>

<style lang="scss" scoped>
.listhead_container {
    display: flex;
    padding: 20px 0;
    box-sizing: border-box;
    width: 100%;

    .image {
        width: 180px;
        height: 180px;
        border-radius: 5px;
        margin-right: 20px;

        img {
            width: 180px;
            height: 180px;
            border-radius: 5px;
        }
    }

    .listhead_main {
        width: calc(100% - 200px);

        .title {
            display: flex;
            font-size: 23px;
            font-weight: 600;
            margin-bottom: 10px;

            .tag {
                font-size: 13px;
                margin: auto 0;
                padding: 1px 3px;
                border-radius: 5px;
                margin-right: 7px;
                color: #EED297;
                font-weight: 200;
                border: 1px solid #EED297;
            }
        }

        .author {
            font-size: 10px;
            margin-bottom: 10px;
            display: flex;
            color: #a5a5a5;

            .author_img {
                height: 26px;
                width: 26px;
                border-radius: 50%;
                cursor: pointer;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }

            span {
                margin: auto 0;
            }

            .autorInfo {
                cursor: pointer;
                color: #507DAF;
                margin: auto 10px;
            }
        }

        .operator {
            margin-bottom: 10px;
            display: flex;

            flex-wrap: wrap;

            .operator_button {
                font-size: 15px;
                padding: 4px 17px;
                margin: 5px 0;
                border: 1px solid #D9D9D9;
                margin-right: 10px;
                border-radius: 20px;
                cursor: pointer;


                &:hover {
                    background-color: #F2F2F2;
                }
            }


            .playall {
                background-color: #F1DBAD;
                color: #fff;

                &:hover {
                    background-color: #EED297;
                }
            }
        }

        .listhead_main_tag {
            font-size: 13px;
            margin-bottom: 5px;

            .tag_item {
                color: #507DAF;
                cursor: pointer;

                .symbol {
                    cursor: auto;
                    color: #000;
                }
            }
        }

        .listhead_main_count {
            font-size: 13px;
            margin-bottom: 5px;

            span {
                margin-right: 20px;
            }
        }

        .intro {
            font-size: 13px;
            width: 100%;
            position: relative;
            display: flex;
            line-height: 27px;

            .intro_content {
                width: 80%;
                color: #666666;
                white-space: nowrap;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;

            }

            .intro_expand {
                white-space: normal;
                overflow: auto;
                text-overflow: none;
            }

            .iconfont {
                cursor: pointer;
                color: #8D8D8D;
                position: absolute;
                right: 2%;
                top: 0;
                font-size: 28px;
            }
        }
    }
}
</style>