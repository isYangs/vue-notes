export default {
    install(Vue,x,y,z) {
        console.log(x,y,z);
        // 全局过滤器
        Vue.filter('mySlice', function (val) {
            return val.slice(0,7);
        });

        // 全局指令
        Vue.directive('fbind', {
            //指令与元素成功绑定时（一上来）
            bind(element, binding) {
                element.value = binding.value;
            },
            //指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus();
            },
            //指令所在的模板被重新解析时
            update(element, binding) {
                element.value = binding.value;
            },
        });

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    msg: 'hello',
                };
            },
        });

        // 给Vue原型上添加一个方法（vm和vc都能用了）
        Vue.prototype.hello = () => {
            alert('hello');
        };
    },
};
