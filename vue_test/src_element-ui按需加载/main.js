import Vue from 'vue';
import App from './App.vue';

// 完整引入ElementUI
/*// 引入ElementUI组件库
import ElementUI from 'element-ui';
// 引入ElementUI的全部样式
import 'element-ui/lib/theme-chalk/index.css';
// 应用ElementUI
Vue.use(ElementUI);*/

// 按需引入ElementUI
import { Button, Row, DatePicker } from 'element-ui';

Vue.config.productionTip = false;

// 使用ElementUI

Vue.use(Button, Row, DatePicker);
/* 或写为
 * Vue.use(Button)
 * Vue.component(Button.name, Button);
 */

new Vue({
    el: '#app',
    render: h => h(App),
});
