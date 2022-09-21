<template>
    <div class="user">
        <h2>英文名：{{ name }}</h2>
        <h2>个人介绍：{{ introduce }}</h2>
        <button @click="sendUserInfoName">把name给BlogUser组件</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
    name: 'UserInfo',
    data() {
        return {
            name: 'isYangs',
            introduce: '我是前端开发工程师',
        };
    },
    methods: {
        sendUserInfoName() {
            pubsub.publish('sendUserInfoName', this.name);
        },
    },
};
</script>

<style scoped>
.user {
    background: orange;
    padding: 5px;
    margin-top: 30px;
}
</style>