/* 
  该文件是整个项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象vm
new Vue({
  // render函数的功能：将App组件渲染到页面上
  // 简写形式
  render: h => h(App),
  // 完整形式
  /* render(createElement){
    return createElement('h2',{class:'box'},'hello world')
  } */
}).$mount('#app')
