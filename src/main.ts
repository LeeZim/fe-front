import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { install } from '@icon-park/vue-next/es/all'
import App from './App.vue'

import router from '@/router'
import store from '@/store'
import 'element-plus/dist/index.css'
import layout from '@/components'
import 'normalize.css/normalize.css'
import '@/mock'
import 'lib-flexible/flexible.js'
import '@icon-park/vue-next/styles/index.css'

const app = createApp(App)
install(app, 'i')
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(layout)
app.mount('#app')
