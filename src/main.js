import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router.js";
import initWeb3 from './utils/tronwebFn'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import VueI18n from './language'
import './assets/init.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(VueI18n)
app.config.globalProperties.$initWeb3 = initWeb3
app.mount('#app')


