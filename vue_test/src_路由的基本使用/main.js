import Vue from 'vue';
import App from './App.vue';
// 引入VueRouter
import VueRouter from 'vue-router';
// 引入路由器
import router from '@/router';
// 应用插件
Vue.use(VueRouter);

// 关闭Vue的生产提示
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
