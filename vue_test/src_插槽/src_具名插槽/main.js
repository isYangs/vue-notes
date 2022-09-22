import Vue from 'vue';
import App from './App.vue';
// 导入vue-resource
import vueResource from 'vue-resource';

//使用插件
Vue.use(vueResource);

// 关闭Vue的生产提示
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
}).$mount('#app');
