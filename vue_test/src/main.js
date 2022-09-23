import Vue from 'vue';
import App from './App.vue';

// 引入store
import store from './store';

// 关闭Vue的生产提示
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
}).$mount('#app');
