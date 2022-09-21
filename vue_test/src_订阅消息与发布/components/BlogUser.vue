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
import pubsub from 'pubsub-js';
export default {
    name: 'BlogUser',
    data() {
        return {
            name: "isYangs's Blog",
            address: 'https://xuewuzhibu.cn',
        };
    },
    mounted() {
        this.pubId = pubsub.subscribe('sendUserInfoName', (msg, data) => {
            console.log(msg, data);
        });
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pubId);
    },
};
</script>

<style scoped>
.blog {
    background: skyblue;
    padding: 5px;
}
</style>