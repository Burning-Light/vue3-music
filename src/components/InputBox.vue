<template>
    <div class="inputbox">
        <i class="iconfont">&#xe7da;</i>
        <input type="text" :placeholder="text">
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        default: '搜索'
    }
})
</script>

<style lang="scss" scoped>
.inputbox {
    height: 32px;
    background-color: #ededed98;
    padding: 0 10px;
    display: flex;
    border-radius: 7px;
    margin: auto 0;
    margin-right: 30px;

    input {
        margin: auto 0;
        margin-left: 7px;
        width: 150px;
        outline: none;
        border: none;
        padding: 5px 0;
        background-color: #ededed00;
    }

    .iconfont {
        margin: auto 0;
        font-weight: 600;
        color: #b6b6b6;
        cursor: default;

        &:hover {
            &:hover {
                color: #5e5e5e;
            }
        }
    }
}
</style>