<template>
    <h2>我是About组件</h2>
</template>

<script>
export default {
    name: 'About',
    // 通过路由规则，进入该组件时被调用
    beforeRouteEnter(to, from, next) {
        console.log('About组件中的beforeRouteEnter', to, from);
        // 判断是否需要鉴权
        if (to.meta.isAuth) {
            if (localStorage.getItem('name') === 'isYangs') {
                next();
            } else {
                alert('你还没有权限访问这个组件');
            }
        } else {
            next();
        }
    },
    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave(to, from, next) {
        console.log('About组件中的beforeRouteLeave', to, from);
        next();
    },
};
</script>
