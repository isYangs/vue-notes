<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color: red">Count组件的求和为：{{ sum }}</h3>
        <input type="text" placeholder="请输入名字" v-model="name" />
        <button @click="add">添加</button>
        <button @click="updateSum">把Count组件的求和默认值修改为99</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Person',
    data() {
        return {
            name: '',
        };
    },
    computed: {
        personList() {
            return this.$store.state.personList;
        },
        sum() {
            return this.$store.state.sum;
        },
    },
    methods: {
        add() {
            const personObj = { id: this.$nanoid(), name: this.name };
            this.$store.commit('ADD_PERSON', personObj);
            this.name = '';
        },
        updateSum() {
            this.$store.commit('UPDATE_SUM', 99);
        },
    },
};
</script>
