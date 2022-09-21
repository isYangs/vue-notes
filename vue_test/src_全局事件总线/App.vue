<template>
    <div class="app">
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
.app {
    background: #ddd;
    padding: 5px;
}
</style>