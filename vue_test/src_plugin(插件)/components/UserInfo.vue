<template>
    <div class="demo">
        <h2>英文名：{{ name }}</h2>
        <h2>个人介绍：{{ introduce }}</h2>
        <input type="text" v-fbind:name="name">
    </div>
</template>

<script>
export default {
    name: 'UserInfo',
    data() {
        return {
            name: 'isYangs',
            introduce: '我是前端开发工程师',
        };
    },
};
</script>
