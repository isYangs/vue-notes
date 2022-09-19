<template>
    <div class="demo">
        <h1>{{ msg }}</h1>
        <h2>英文名：{{ name }}</h2>
        <h2>本人年龄：{{ user.age + 1 }}</h2>
        <h2>本人介绍：{{ introduce }}</h2>
        <button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>

<script>
export default {
    name: 'UserInfo',
    data() {
        return {
            msg: '我是本站的用户',
            user: {
                age: this.age,
            },
        };
    },
    methods: {
        updateAge() {
            this.user.age++;
        },
    },
    // 简单声明接受
    props: ['name', 'age', 'introduce'],
    // 接收的同时对数据进行类型校验
    /* props: {
        name: String,
        age: Number,
        introduce: String,
    }, */
    // 接收的同时对数据进行类型校验和默认值指定及必要性限制
    /* props: {
        name: {
            type: String, // 数据类型
            required: true, // 必须传递
        },
        age: {
            type: Number,
            required: true,
        },
        introduce: {
            type: String,
            default: '无业游民', // 默认值
        },
    }, */
};
</script>