<template>
    <div>
        <h2 @click="showName">博客名称：{{ name }}</h2>
        <h2>
            博客地址：点我去
            <a :href="address" target="_blank">{{ name }}</a>
            的博客
        </h2>
    </div>
</template>

<script>
// 引入一个mixin（混合）
// import { mixin, mixin2 } from '../mixin';
export default {
    name: 'BlogUser',
    data() {
        return {
            name: "isYangs's Blog",
            address: 'https://xuewuzhibu.cn',
            x: 666,
        };
    },
    // mixins: [mixin, mixin2],
};
</script>