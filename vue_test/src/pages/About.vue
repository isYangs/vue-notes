<template>
    <h2>我是About组件</h2>
</template>

<script>
export default {
    name: 'About',
    mounted() {
        console.log('About组件即将被挂载', this);
    },
    /*beforeDestroy() {
        console.log('About组件即将被销毁');
    },*/
};
</script>
