import Vue from 'vue';
import App from './App.vue';

// 引入nanoid
import { nanoid } from 'nanoid';
// 引入插件
import plugins from './plugins';

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 使用插件
Vue.use(plugins, nanoid);

new Vue({
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this;
    }
}).$mount('#app');
