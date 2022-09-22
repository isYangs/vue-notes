import Vue from 'vue';
import App from './App.vue';

// 关闭Vue的生产提示
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
}).$mount('#app');
