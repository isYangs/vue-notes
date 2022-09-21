<template>
    <div class="user">
        <h2>英文名：{{ name }}</h2>
        <h2>个人介绍：{{ introduce }}</h2>
        <h2>当前求和为：{{ num }}</h2>
        <button @click="add">点我num++</button>
        <button @click="sendUserName">把博客名给App</button>
        <button @click="unbind">解绑getUserName事件</button>
        <button @click="death">销毁当前UserInfo组件的实例对象(vc)</button>
    </div>
</template>

<script>
export default {
    name: 'UserInfo',
    data() {
        return {
            name: 'isYangs',
            introduce: '我是前端开发工程师',
            num: 0,
        };
    },
    methods: {
        add() {
            console.log('add回调被调用了')
            this.num++;
        },
        sendUserName() {
            // 触发UserInfo组件实例身上的自定义事件getUserName
            this.$emit('getUserName', this.name, 666, 999, 333);
            // this.$emit('demo');
        },
        unbind() {
            // 解绑UserInfo组件实例身上的自定义事件getUserName
            this.$off('getUserName'); // 解绑一个自定义事件
            // this.$off(['getUserName', 'demo']); // 解绑多个自定义事件
            // this.$off(); // 解绑所有自定义事件
        },
        death() {
            // 销毁了当前UserInfo组件的实例对象(vc)，销毁后所有UserInfo实例的自定义事件都会被解绑
            this.$destroy();
        },
    },
};
</script>

<style scoped>
.user {
    background: orange;
    padding: 5px;
    margin-top: 30px;
}
</style>