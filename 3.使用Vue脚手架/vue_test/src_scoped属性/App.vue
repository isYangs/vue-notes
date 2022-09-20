<template>
    <div>
        <h1 class="title">Hello,World!</h1>
        <Blog />
        <User />
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
};
</script>

<style>
.title {
    color: red;
}
</style>