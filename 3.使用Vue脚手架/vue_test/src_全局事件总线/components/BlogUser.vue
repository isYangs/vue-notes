<template>
    <div class="blog">
        <h2>博客名称：{{ name }}</h2>
        <h2>
            博客地址：点我去
            <a :href="address" target="_blank">{{ name }}</a>
            的博客
        </h2>
    </div>
</template>

<script>
export default {
    name: 'BlogUser',
    data() {
        return {
            name: "isYangs's Blog",
            address: 'https://xuewuzhibu.cn',
        };
    },
    mounted() {
        this.$bus.$on('getUserName', data => {
            console.log('BlogUser收到了', data);
        });
    },
    beforeDestroy() {
        this.$bus.$off('getUserName');
    },
};
</script>

<style scoped>
.blog {
    background: skyblue;
    padding: 5px;
}
</style>