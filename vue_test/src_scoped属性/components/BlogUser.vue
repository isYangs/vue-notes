<template>
    <div class="demo">
        <h2 class="title">博客名称：{{ name }}</h2>
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
};
</script>

<style scoped>
.demo{
    background: skyblue;
}
</style>