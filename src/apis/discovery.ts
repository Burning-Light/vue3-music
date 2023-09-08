import http from './index'
export const getHomepageBp = () => {
    return http.get('/homepage/block/page', { refresh: true })
}
export const getHomepageDb = () => {
    return http.get('/homepage/dragon/ball')
}