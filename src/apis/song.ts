import http from './index'
//检查音乐是否可用
export const checkmusic = (id: number, br?: number) => {
    if (br) {
        return http.get(`/check/music?id=${id}&br=${br}`)
    }
    else {
        return http.get(`/check/music?id=${id}`)
    }
}
//获取音乐url
export const getsongurl = (id: number, br?: number) => {
    if (br) {
        return http.get(`/song/url?id=${id}&br=${br}`)
    }
    else {
        return http.get(`/song/url?id=${id}`)
    }
}