<template>
    <div>
        <h2>博客名称：{{ name | mySlice }}</h2>
        <h2>
            博客地址：点我去
            <a :href="address" target="_blank">{{ name }}</a>
            的博客
        </h2>
        <button @click="testHello">点我测试一下hello方法</button>
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
    methods: {
        testHello() {
            this.hello();
        },
    },
};
</script>
