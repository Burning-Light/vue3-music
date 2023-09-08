import http from './index'
export const getpersonalized = () => {
    return http.get('/personalized?limit=200')
}

// 歌单分类
export const getplaylistcatlist = () => {
    return http.get('/playlist/catlist')
}

//热门歌单分类
export const getplaylisthot = () => {
    return http.get('/playlist/hot')
}

//获取网友精选碟歌单
export const gettopplaylist = (limit: number, cat: any, offset: any) => {
    return http.get(`/top/playlist?limit=${limit}&cat=${cat}&offset=${offset}`)
}

//获取歌单详情
export const getplaylistdetail = (id: any) => {
    return http.get(`/playlist/detail?id=${id}`)
}

//获取歌单收藏者
export const getplaylistsubscribers = (id: any, limit: any, offset: any) => {
    return http.get(`/playlist/subscribers?id=${id}&limit=${limit}&offset=${offset}`)
}

//获取歌单评论
export const getcommentplaylist = (id: any, limit: any, offset: any) => {
    return http.get(`/comment/playlist?id=${id}&limit=${limit}&offset=${offset}`)
}

//获取歌单所有歌曲
export const getplaylisttrackall = (id: any, limit: any, offset: any) => {
    return http.get(`/playlist/track/all?id=${id}&limit=${limit}&offset=${offset}`)
}