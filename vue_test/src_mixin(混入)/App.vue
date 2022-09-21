<template>
    <div>
        <Blog />
        <hr />
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