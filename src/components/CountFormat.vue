<template>
    <span
        v-html="(props.count / 100000000) >= 1 ? `${Math.ceil(props.count / 100000000)}亿` : (props.count / 10000) >= 1 ? `${Math.ceil(props.count / 10000)}万` : `${props.count}`"></span>
</template>

<script setup lang="ts">
const props = defineProps({
    count: {
        type: Number,
        default: 0
    }
})
</script>

<style lang="scss" scoped></style>