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
        <button @click="increment(n)">+</button>
        <!-- <button @click="INCREMENT(n)">+</button> -->
        <button @click="decrement(n)">-</button>
        <!-- <button @click="DECREMENT(n)">-</button> -->
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    name: 'Count',
    data() {
        return {
            n: 1, //用户选择的数字
        };
    },
    methods: {
        // 自己写方法
        /* increment() {
            this.$store.commit('INCREMENT', this.n);
        },
        decrement() {
            this.$store.commit('DECREMENT', this.n);
        }, */

        // 使用mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象的写法）
        ...mapMutations({ increment: 'INCREMENT', decrement: 'DECREMENT' }),

        // 使用mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组的写法）
        // ...mapMutations(['INCREMENT', 'DECREMENT']),

        // 自己写方法
        /* incrementOdd() {
            this.$store.dispatch('incrementOdd', this.n);
        },
        incrementWait() {
            this.$store.dispatch('incrementWait', this.n);
        }, */

        // 使用mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象的写法）
        // ...mapActions({ incrementOdd: 'incrementOdd', incrementWait: 'incrementWait' }),

        // 使用mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组的写法）
        ...mapActions(['incrementOdd', 'incrementWait']),
    },
    computed: {
        ...mapState(['sum', 'name', 'subject']),
        ...mapGetters(['bigSum']),
    },
};
</script>

<style scoped>
button {
    margin-left: 5px;
}
</style>
