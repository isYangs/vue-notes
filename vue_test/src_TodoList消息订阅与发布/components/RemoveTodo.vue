<template>
    <div class="remove-todo" v-show="total">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
            <input type="checkbox" v-model="isAll" />
        </label>
        <span>
            <span>已完成{{ doneTotal }}</span>
            / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'RemoveTodo',
    props: ['todoData'],
    computed: {
        // 总数
        total() {
            return this.todoData.length;
        },
        // 已完成数
        doneTotal() {
            return this.todoData.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
        },
        // 控制全选框
        isAll: {
            // 全选框是否勾选
            get() {
                return this.doneTotal === this.total && this.total !== 0;
            },
            // isAll改变时触发
            set(val) {
                this.$emit('checkAllTodo', val);
            },
        },
    },
    methods: {
        // 全选 or 全不选
        /* checkAll(evt) {
            // this.checkAllTodo(evt.target.checked);
            this.$emit('checkAllTodo', evt.target.checked);
        }, */
        clearAll() {
            this.$emit('clearAllTodo');
        },
    },
};
</script>

<style>
.remove-todo {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}
.remove-todo label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}
.remove-todo label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}
.remove-todo button {
    float: right;
    margin-top: 5px;
}
</style>