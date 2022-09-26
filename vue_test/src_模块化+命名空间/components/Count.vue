<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <h3>当前求和放大10倍为：{{ bigSum }}</h3>
        <h3>我是{{ name }}，正在学习{{ subject }}</h3>
        <h3 style="color: red">Person组件的总人数是：{{ personList.length }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
        <button @click="addPersonList(persons)">给Person组件添加一个数据</button>
        <button @click="updatePersonList(personData)">更新Person组件中的所有内容</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
    name: 'Count',
    data() {
        return {
            n: 1, //用户选择的数字
            persons: { id: this.$nanoid(), name: '王五' },
            personData: [
                { id: this.$nanoid(), name: 'Joe' },
                { id: this.$nanoid(), name: 'Mary' },
                { id: this.$nanoid(), name: 'Jack' },
            ],
        };
    },
    methods: {
        ...mapMutations('countAbout', { increment: 'INCREMENT', decrement: 'DECREMENT' }),
        ...mapMutations('personAbout', {
            addPersonList: 'ADD_PERSON',
            updatePersonList: 'UPDATE_PERSON',
        }),
        ...mapActions('countAbout', ['incrementOdd', 'incrementWait']),
    },
    computed: {
        ...mapState('countAbout', ['sum', 'name', 'subject']),
        ...mapState('personAbout', ['personList']),
        ...mapGetters('countAbout',['bigSum']),
    },
    mounted() {
        console.log(this.$store);
    },
};
</script>

<style scoped>
button {
    margin-left: 5px;
}
</style>
