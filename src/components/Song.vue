<template>
    <div class="audioWapper">
        <audio controls :src="store.state.song.url" ref="audio" :volume="store.state.audioVolume"></audio>
    </div>
</template>

<script setup lang="ts">
import { watch, ref, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex';
const store = useStore()
const audio: any = ref(null)
let timeStamp: any = ref()
watch(() => store.state.dragProgress, () => {
    audio.value.currentTime = store.state.dragProgress / 1000
})
onMounted(() => {
    audio.value.addEventListener("timeupdate", watchtimeStamp);
    audio.value.addEventListener("ended", watchifended);
})
const watchtimeStamp = (event: any) => {
    store.commit('updateAudioCurrentTime', audio.value.currentTime * 1000)
    store.commit('updateAudioProgress')
}
const watchifended = (event: any) => {
    console.log(event)
    store.commit('changePlayState', false)
    store.commit('updateAudioCurrentTime', 0)
    setTimeout(() => {
        store.commit('changePlayState', true)
    }, 100)
}
onUnmounted(() => {
    audio.value.removeEventListener("timeupdate", watchtimeStamp)
    audio.value.addEventListener("ended", watchifended);
})
//播放状态
watch(() => store.state.playState, () => {
    if (store.state.playState) {
        audio.value.play()
    }
    else {
        audio.value.pause()
    }
}, { deep: true })

watch(() => store.state.audioCurrentTime, () => {

    // audio.value.currentTime = store.state.audioCurrentTime / 1000
    // console.log(store.state.audioCurrentTime)
})

</script>

<style lang="scss" scoped>
.audioWapper {
    position: fixed;
    z-index: 20;
    top: 300px;
    left: 300px;
}
</style>