<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM" ref="btn">点我输出上方元素的DOM元素</button>
        <User ref="sch"/>
    </div>
</template>

<script>
import User from './components/UserInfo.vue';

export default {
    name: 'App',
    data() {
        return {
            msg: '欢迎学习Vue',
        };
    },
    components: {
        User,
    },
    methods: {
        showDOM() {
            console.log(this.$refs.title); // 真实DOM元素
            console.log(this.$refs.btn); // 真实DOM元素
            console.log(this.$refs.sch); // UserInfo组件实例对象(vc)
        },
    },
};
</script>