// # 仅运行于浏览器
import { createApp } from './app';


const { app, router, store } = createApp();

// actually mount to DOM
app.$mount('#app');