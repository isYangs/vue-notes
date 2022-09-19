<template>
    <div class="demo">
        <h2 @click="showName">英文名：{{ name }}</h2>
        <h2>个人介绍：{{ introduce }}</h2>
    </div>
</template>

<script>
// import { mixin } from '../mixin';

export default {
    name: 'UserInfo',
    data() {
        return {
            name: 'isYangs',
            introduce: '我是前端开发工程师',
        };
    },
    // mixins: [mixin],
    /* mounted() {
        console.log(`Hello,${this.name}`);
    }, */
};
</script>