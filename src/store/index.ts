import { createStore } from 'vuex'

export default createStore({
  state: {
    srollToTop: false,//页面返回顶部阀门
    isShowPlayback: false,//控制播放详情页展示阀门
    song: {},//歌曲信息
    playState: false,//播放状态
    audioVolume: 1,//音量，0-1
    audioCurrentTime: 0,//当前播放进度
    audioProgress: 0,//播放进度条，0-100
    audioDuration: 0,//音频总时长
    playType: 1,//播放类型
    playIndex: 0,//播放到列表哪一首
    lyricInfo: [],//歌词信息
    lyricIndex: 0,//歌词到哪一行
    dragProgress: 0,//拖动进度条表示的当前播放进度
  },
  getters: {
  },
  mutations: {
    //阀门控制页面自动上拉置顶
    scrolltotop(context, value) {
      context.srollToTop = true
      setTimeout(() => {
        context.srollToTop = false
      }, 1500)
    },
    //控制播放详情页的展示
    changeShowPlayback(context, value) {
      context.isShowPlayback = !context.isShowPlayback
    },
    //获取歌曲信息
    getSong(context, value) {
      context.song = value
      context.audioDuration = value.time
    },
    //改变播放状态
    changePlayState(context, value) {
      context.playState = value
    },
    // 改变音量
    updateAudioVolume(context, value) {
      context.audioVolume = value
    },
    // getAudioDuration(context, value) {
    //   context.audioDuration = value
    // },
    updateAudioProgress(context, value) {
      context.audioProgress = (context.audioCurrentTime / context.audioDuration) * 1000
      // console.log(context.audioProgress)
    },
    updateAudioCurrentTime(context, value) {
      context.audioCurrentTime = value
    },
    dragprogress(context, value) {
      context.dragProgress = value
    }
  },
  actions: {
  },
  modules: {
  }
})
