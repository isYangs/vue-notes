<template>
    <div class="demo">
        <span>这是用户信息</span>
        <h2 class="title">英文名：{{ name }}</h2>
        <h2>个人介绍：{{ introduce }}</h2>
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

<style lang="less">
.demo {
    background: orange;
    span{
        color: palegreen;
        font-size: 50px;
    }
}
</style>