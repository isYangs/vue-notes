<template>
    <div class="app">
        <h1>{{ msg }}，用户名:{{ userName }}</h1>
        <!-- 通过父组件给子组件传递函数类的props实现：子给父传递数据 -->
        <Blog :getBlogName="getBlogName" />
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用@或v-on) -->
        <!-- <User @getUserName="getUserName" @demo="m1" /> -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用ref) -->
        <User ref="userinfo" @click.native="show" />
    </div>
</template>

<script>
import Blog from './components/BlogUser.vue';
import User from './components/UserInfo.vue';

export default {
    name: 'App',
    components: {
        User,
        Blog,
    },
    data() {
        return {
            msg: '你好',
            userName: '',
        };
    },
    methods: {
        getBlogName(name) {
            console.log('App收到了博客名', name);
        },
        getUserName(name, ...params) {
            console.log('App收到了用户名', name, params);
            this.userName = name;
        },
        m1() {
            console.log('demo事件被触发了');
        },
        show() {
            alert('Hello');
        },
    },
    mounted() {
        this.$refs.userinfo.$on('getUserName', this.getUserName); //绑定自定义事件
        // this.$refs.userinfo.$once('getUserName', this.getUserName); // 绑定自定义事件，只触发一次
    },
};
</script>

<style>
.app {
    background: #ddd;
    padding: 5px;
}
</style>