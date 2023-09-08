<template>
  <GlobalTop />
  <LeftNav />
  <router-view />
  <GlobalBottom />
  <playBackIntenface :isShow="store.state.isShowPlayback"></playBackIntenface>
  <Song />
</template>

<script setup lang="ts">
import GlobalTop from './components/GlobalTop.vue';
import playBackIntenface from '@/views/play/index.vue'
import LeftNav from './components/LeftNav.vue'
import GlobalBottom from './components/GlobalBottom.vue';
import Song from './components/Song.vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute()
</script>

<style lang="scss">
@import "./assets/iconfont.css";
</style>
