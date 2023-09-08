<template>
    <div class="diypagination">
        <el-pagination small background layout="prev, pager, next" :total="datalength" :default-page-size="pagesize"
            v-model:current-page="currentpage" @current-change="pageChange" />
        <!-- :default-page-size="100" -->
    </div>
</template>

<script setup lang="ts">
import { ref, toRaw, inject } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const props = defineProps({
    datalength: {
        type: Number,
        default: 500
    },
    pagesize: {
        type: Number,
        default: 100
    }
})
const transferPage: any = inject('getCurrentPage', () => { })
const emit = defineEmits(["pagechange"])
const currentpage = ref(1)

const pageChange = () => {
    store.commit('scrolltotop')
    emit('pagechange', toRaw(currentpage.value))
    if (transferPage) {
        transferPage(toRaw(currentpage.value))
    }

}

</script>

<style lang="scss" scoped>
.diypagination {
    display: flex;
    margin: 0 auto;

    :deep(.el-pagination) {
        margin: 25px auto;
        --el-pagination-hover-color: #000;
        --el-pagination-border-radius: 5px;

        .btn-next,
        .btn-prev,
        .el-pager li {
            border: 1px solid #E5E5E5;
            background-color: #fff;

            &:hover {
                background-color: #F5F5F5;
            }
        }

        .el-pager li.is-active {
            background-color: #EED297;
        }
    }
}
</style>