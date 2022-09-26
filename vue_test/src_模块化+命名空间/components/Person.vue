<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color: red">Count组件的求和为：{{ sum }}</h3>
        <h3>列表中第一人的名字是：{{ firstPersonName }}</h3>
        <input type="text" placeholder="请输入名字" v-model="name" />
        <button @click="add">添加</button>
        <button @click="updateSum">把Count组件的求和默认值修改为99</button>
        <button @click="addWang">添加一个姓王的人</button>
        <button @click="addPersonServer">添加一句话</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Person',
    data() {
        return {
            name: '',
        };
    },
    computed: {
        personList() {
            return this.$store.state.personAbout.personList;
        },
        sum() {
            return this.$store.state.countAbout.sum;
        },
        firstPersonName() {
            return this.$store.getters['personAbout/firstPersonName'];
        },
    },
    methods: {
        add() {
            const personObj = { id: this.$nanoid(), name: this.name };
            this.$store.commit('personAbout/ADD_PERSON', personObj);
            this.name = '';
        },
        updateSum() {
            this.$store.commit('personAbout/UPDATE_SUM', 99);
        },
        addWang() {
            const personObj = { id: this.$nanoid(), name: this.name };
            this.$store.dispatch('personAbout/addPersonWang', personObj);
            this.name = '';
        },
        addPersonServer() {
            this.$store.dispatch('personAbout/addPersonServer');
        },
    },
};
</script>
