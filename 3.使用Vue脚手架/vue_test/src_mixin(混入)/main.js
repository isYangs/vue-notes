// 引入Vue
import Vue from 'vue';
// 引入App组件
import App from './App.vue';
// 引入全局mixin（混合）
import { mixin, mixin2 } from './mixin';
Vue.mixin(mixin);
Vue.mixin(mixin2);
// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 创建Vue实例对象vm
new Vue({
    render: h => h(App),
}).$mount('#app');
