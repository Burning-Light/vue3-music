<template>
    <div class="wrapper" ref="wrapper">

        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
const wrapper: any = ref(null)
const store = useStore()

watch(store.state, () => {
    wrapper._value.scrollTop = 0
}, { deep: true })


</script>

<style lang="scss" scoped>
.wrapper {
    position: fixed;
    top: 61px;
    left: 200px;
    height: calc(100vh - 137px);
    width: calc(100vw - 200px);
    min-width: 600px;
    padding: 0 20px;
    box-sizing: border-box;
    overflow-y: scroll;
}

// @media(max-width: 876px) {
//     .wrapper {
//         height: 600px;
//     }
// }
</style>