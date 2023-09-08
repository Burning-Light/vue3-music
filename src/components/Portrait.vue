<template>
    <div class="Portrait" :style="`height:${size};width:${size}`">
        <img :src="$props.url" alt="">
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    size: {
        type: String,
        default: '35px'
    },
    url: {
        type: String,
        default: 'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/live/876b76a0c63bd4c204f0dc47ef0ff7a6.mp4.jpg?x-oss-process=image/resize,type_6,m_fill,h_228,w_406'
    }
})
</script>

<style lang="scss" scoped>
.Portrait {
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
</style>