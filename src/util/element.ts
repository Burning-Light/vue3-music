import 'element-plus/dist/index.css'
// 按需引入element组件
import {
    ElScrollbar,
    ElIcon,
    ElTabs,
    ElPagination,
    ElCarousel,
    ElSlider,
    ElInfiniteScroll,
    ElInput,
    ElBacktop,
    ElLoading,
    ElDropdown
} from 'element-plus'

// 按需引入elelment图标
import { Edit, Tools, Location, Setting } from '@element-plus/icons-vue'

export default function (app: any) {
    app.use(ElScrollbar)
    app.use(ElIcon)
    app.use(ElBacktop)
    app.use(ElPagination)
    app.use(ElInput)
    app.use(ElDropdown)
    app.use(ElSlider)
    app.use(ElCarousel)
    app.use(ElTabs)
    app.use(ElInfiniteScroll)
    app.component('Edit', Edit)
    app.component('Tools', Tools)
    app.component('Location', Location)
    app.component('Setting', Setting)
}
