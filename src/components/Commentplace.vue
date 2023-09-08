<template>
    <div class="commentplace_container">
        <div class="commentplace_title">
            {{ title }}
        </div>
        <div class="comment_item" v-for="(item, index) in commentlist" :key="index">
            <div class="portrait">
                <img :src="item.avatarUrl" alt="">
            </div>
            <div class="iteminfo">
                <span class="itemcontent"><span class="username">{{ item.nickname }}:</span>{{ item.content }}</span>
                <div class="reply" v-if="item.beRepliedCommentId"><span class="username">{{ item.replynickname }}:</span>{{
                    item.replycontent }}</div>
                <span class="itemtime">
                    <TimeFormat :time="item.time" />
                </span>
            </div>
            <div class="commenttool">
                <div class="itemtool">举报</div>
                <div class="itemtool"><i class="iconfont">&#xe609;</i>{{ item.likedCount ? item.likedCount : '' }}</div>
                <div class="itemtool"><i class="iconfont">&#xe658;</i></div>
                <div class="itemtool"><i class="iconfont">&#xe6e0;</i></div>
            </div>
        </div>
        <div class="loadmore1" v-if="loadmodel == 1"><span></span></div>
        <div class="loadmore2" v-else-if="loadmodel == 2">
            <Pagination :datalength="props.totaldatalength"></Pagination>
        </div>
    </div>
</template>

<script setup lang="ts">
import Pagination from '@/components/Pagination.vue'
import TimeFormat from './TimeFormat.vue';
import { watch, inject } from 'vue'
const props = defineProps({
    title: {
        type: String,
        default: '评论'
    },
    data: {
        type: Array,
        default: []
    },
    loadmodel: {
        type: Number,
        default: 1
    },
    totaldatalength: {
        type: Number,
        default: 1
    }
})
let commentlist: any

watch(() => props.data, () => {
    commentlist = props.data
}, { deep: true, immediate: true })

</script>

<style lang="scss" scoped>
.commentplace_container {
    margin-top: 30px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    .commentplace_title {
        width: 100%;
        font-weight: 600;
    }

    .comment_item {
        border-bottom: 1px solid #F2F2F2;
        display: flex;
        padding: 17px 0;
        position: relative;

        .portrait {
            height: 35px;
            width: 35px;
            border-radius: 50%;
            border: 1px solid #E5E5E5;
            box-sizing: border-box;
            cursor: pointer;

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }

        .iteminfo {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 14px;

            .itemcontent {
                font-size: 14px;
                cursor: text;
                margin-bottom: 6px;

                .username {
                    color: #6270f0;
                    cursor: pointer;

                    &:hover {
                        color: #2034e6;
                    }
                }
            }

            .reply {
                font-size: 14px;
                padding: 5px 7px;
                border-radius: 5px;
                background-color: #F5F5F5;
                margin-bottom: 6px;
                width: calc(100% - 14px);
                cursor: text;

                .username {
                    color: #6270f0;
                    cursor: pointer;

                    &:hover {
                        color: #2034e6;
                    }
                }
            }

            .itemtime {
                font-size: 10px;
                color: #999999;
            }
        }

        .commenttool {
            position: absolute;
            right: 0;
            bottom: 10px;
            display: flex;
            font-size: 13px;

            .itemtool {
                color: #636363;
                border-right: 1px solid #DCDDED;
                padding: 0 8px;
                align-items: center;
                cursor: pointer;

                &:first-child {
                    display: none;
                }

                &:last-child {
                    border: none;
                }

                &:hover {
                    color: #000;
                }
            }
        }

        &:hover {
            .itemtool:first-child {
                display: block;
            }
        }
    }

    .loadmore1 {
        display: flex;

        span {
            padding: 5px 20px;
            margin: 25px auto;
        }
    }
}
</style>