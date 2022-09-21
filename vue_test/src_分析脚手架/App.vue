<template>
    <div>
        <img src="./assets/logo.png" alt="">
        <User />
        <Blog />
    </div>
</template>

<script>
// 引入组件
import User from './components/UserInfo.vue';
import Blog from './components/BlogUser.vue';

export default {
    name: 'App',
    components: {
        User,
        Blog,
    },
};
</script>