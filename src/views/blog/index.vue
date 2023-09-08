<template>
    <div class="blogcontainer">
        <el-backtop :right="100" :bottom="100" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
const load = () => {
    count.value += 2
}
</script>

<style scoped lang="scss">
.infinite-list {
    height: 300px;
    padding: 0;
    margin: 0;
    list-style: none;
}

.infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-primary-light-9);
    margin: 10px;
    color: var(--el-color-primary);
}

.infinite-list .infinite-list-item+.list-item {
    margin-top: 10px;
}

.blogcontainer {
    height: 100%;
    width: 100%;
}
</style>