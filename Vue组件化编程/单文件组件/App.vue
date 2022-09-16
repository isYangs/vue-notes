<template>
    <div>
        <User />
        <Blog />
    </div>
</template>

<script>
// 引入组件
import User from './User';
import Blog from './Blog';

export default {
    name: 'App',
    components: {
        User,
        Blog,
    },
};
</script>