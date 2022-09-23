<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <h3>当前求和放大10倍为：{{ $store.getters.bigSum }}</h3>
        <h3>我是{{ name }}，正在学习{{ subject }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex';
export default {
    name: 'Count',
    data() {
        return {
            n: 1, //用户选择的数字
        };
    },
    methods: {
        increment() {
            this.$store.commit('INCREMENT', this.n);
        },
        decrement() {
            this.$store.commit('DECREMENT', this.n);
        },
        incrementOdd() {
            this.$store.dispatch('incrementOdd', this.n);
        },
        incrementWait() {
            this.$store.dispatch('incrementWait', this.n);
        },
    },
    computed: {
        // 借助mapState生成计算属性，从state中读取数据。（对象写法）
        // ...mapState({ sum: 'sum', name: 'name', subject: 'subject' }),
        
        // 借助mapState生成计算属性，从state中读取数据。（数组写法）
        ...mapState(['sum', 'name', 'subject']),

        // 借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
        // ...mapGetters({ bigSum: 'bigSum' }),

        // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
        ...mapGetters(['bigSum']),
    },
};
</script>

<style scoped>
button {
    margin-left: 5px;
}
</style>
