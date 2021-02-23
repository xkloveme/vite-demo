import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import 'element-plus/lib/theme-chalk/index.css';
import "./element-variables.scss";
import locale from "element-plus/lib/locale/lang/zh-cn";

const app = createApp(App)
            .use(store)
            .use(router)
            .use(ElementPlus, { locale })
app.mount('#app')
