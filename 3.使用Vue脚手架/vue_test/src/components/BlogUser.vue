<template>
    <!-- 组件的结构 -->
    <div>
        <h2>博客名称：{{ name }}</h2>
        <h2>
            博客地址：点我去
            <a :href="address" target="_blank">{{ name }}</a>
            的博客
        </h2>
    </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等等）
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