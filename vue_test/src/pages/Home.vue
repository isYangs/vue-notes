<template>
    <h2>我是Home组件</h2>
</template>

<script>
export default {
    name: 'Home',
    mounted() {
        console.log('Home组件即将被挂载', this);
    },
    /*beforeDestroy() {
        console.log('Home组件即将被销毁');
    },*/
};
</script>
