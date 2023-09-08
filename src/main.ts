import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import installElement from './util/element'

const app = createApp(App)
installElement(app)
app.use(store)
app.use(router)
app.mount('#app')
