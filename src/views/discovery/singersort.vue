<template>
    <div class="singersort_wrapper">
        <div class="bigsort">{{ title }}:</div>
        <div class="smallsort">
            <div class="item" v-for="(item, index) in sortData" :key="index" @click="choseItem(item)">
                <span :class="item.isActive ? 'itemActive' : ''">{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isactive: any = ref(false)
const choseItem = (item: any) => {
    props.sort.map((i: any) => {
        i.isActive = false
    })
    item.isActive = true
}
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    sort: {
        type: Array,
        default: []
    }
})
const sortData: any = props.sort
</script>

<style lang="scss" scoped>
.singersort_wrapper {
    width: 100%;
    font-size: 12px;
    display: flex;
    position: relative;



    .smallsort {
        display: flex;
        flex-wrap: wrap;
        max-width: 95%;

        .item {
            width: 85px;
            text-align: center;
            border-right: 1px solid #F2F2F2;
            color: #666666;
            margin-bottom: 10px;

            span {
                margin: 0 10px;
                padding: 3px 7px;
            }

            &:hover {
                color: #000;
            }

            &:last-child {
                border: none;
            }
        }

        .itemActive {
            color: #EC4141;
            background-color: #FEF5F5;
            border-radius: 10px;
        }
    }


}
</style>