<template>
    <div class="writespace">
        <el-input v-model="textarea" maxlength="140" :autosize="{ minRows: 2, maxRows: 4 }" show-word-limit
            type="textarea" />
        <div class="tool">
            <div class="toolleft">
                <i class="iconfont">&#xe784;</i>
                <i class="iconfont">&#xe60d;</i>
                <i class="iconfont">&#xe608;</i>
            </div>
            <div class="toolright">评论</div>
        </div>
    </div>
    <Commentplace :data="hotComments" :loadmodel="1" :title="`精彩评论`" v-if="currentPage == 1 && hotComments?.length" />
    <Commentplace :data="comments" :loadmodel="2" :title="`最新评论`" :totaldatalength="total" v-if="comments?.length" />
    <div class="wordage" v-if="!hotComments?.length && !comments?.lengt">还没有评论，快来抢沙发~</div>
</template>

<script setup lang="ts">
import Commentplace from '@/components/Commentplace.vue';
import { ref, reactive, provide } from 'vue'
import { getcommentplaylist } from '@/apis/playlist'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute()
let hotComments: any = ref()
let comments: any = ref()
let total: any = ref()
const textarea = ref('')
let currentPage: any = ref(1)
const getCurrentPage = (value: any) => {
    currentPage.value = value
    getcommentplaylist(route.query.id, 100, (value - 1) * 100).then(res => {
        commentlistChange(comments, res.comments)
    })
}
provide('getCurrentPage', getCurrentPage)
getcommentplaylist(route.query.id, 100, 0).then(res => {
    commentlistChange(hotComments, res.hotComments)
    commentlistChange(comments, res.comments)
    total = res.total
    console.log(res)
})

const commentlistChange = (value1: any, value2: any) => {
    value1.value = value2.map((item: any) => {
        if (item.beReplied.length) {
            return {
                ...item, nickname: item.user.nickname, avatarUrl: item.user.avatarUrl, beRepliedCommentId: item.beReplied[0].beRepliedCommentId, replynickname: item.beReplied[0].user.nickname, replycontent: item.beReplied[0].content
            }
        }
        else {
            return {
                ...item, nickname: item.user.nickname, avatarUrl: item.user.avatarUrl
            }
        }
    })
}

</script>

<style lang="scss" scoped>
.writespace {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    :deep(.el-textarea) {
        --el-input-focus-border-color: #cccccc86;

        .el-textarea__inner {
            resize: none;
        }

        ::-webkit-scrollbar-track {
            background-color: #ffffff00;
        }

        ::-webkit-scrollbar {
            width: 5px;
        }

        ::-webkit-scrollbar-thumb {
            width: 5px;
            background-color: #cccccc86;
            border-radius: 5px;

            &:hover {
                background-color: #b2b2b288;
            }
        }
    }

    .tool {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;

        .toolleft {
            .iconfont {
                font-size: 20px;
                margin-right: 5px;
            }
        }

        .toolright {
            font-size: 15px;
            border: 1px solid #D9D9D9;
            padding: 3px 17px;
            cursor: pointer;
            border-radius: 20px;

            &:hover {
                background-color: #F2F2F2;
            }
        }
    }
}

.wordage {
    width: 100%;
    display: flex;
    justify-content: center;
    color: #D9D9D9;
}
</style>