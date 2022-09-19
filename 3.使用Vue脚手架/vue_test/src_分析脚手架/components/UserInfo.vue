<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>英文名：{{ name }}</h2>
        <h2>本人年龄：{{ age }}</h2>
        <h2>本人介绍：{{ introduce }}</h2>
    </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等等）
export default {
    name: 'UserInfo',
    data() {
        return {
            name: 'isYangs',
            age: 18,
            introduce: '我是一个前端工程师',
        };
    },
};
</script>

<style scoped>
/* 组件的样式 */
.demo {
    width: 400px;
    height: 300px;
    background: #08d839;
}
</style>