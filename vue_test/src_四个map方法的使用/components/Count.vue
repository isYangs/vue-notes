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
        <button @click="decrement(n)">-</button>
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
        ...mapMutations({ increment: 'INCREMENT', decrement: 'DECREMENT' }),
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
