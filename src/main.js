import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import { createStore } from 'vuex'
import storeConfig from './vuex/store'
import router from './router'

const store = createStore(storeConfig)

const app = createApp(App)

app.use(router)
app.use(store)
app.mount("#app")


