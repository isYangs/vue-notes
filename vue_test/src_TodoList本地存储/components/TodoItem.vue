<template>
    <li>
        <label>
            <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name: 'TodoItem',
    // 声明接收todo对象
    props: ['todo', 'checkTodo','deleteTodoItem'],
    methods: {
        // 勾选 or 取消勾选
        handleCheck(id) {
            // 通知App组件将id对应的todo对象的done属性取反
            this.checkTodo(id);
        },
        // 删除一个todo
        handleDelete(id) {
            // 通知父组件删除当前todo对象
            if(confirm('确定删除吗？')){
                this.deleteTodoItem(id);
            }
        },
    },
};
</script>

<style scoped>
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}
li label {
    float: left;
    cursor: pointer;
}
li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}
li button {
    float: right;
    display: none;
    margin-top: 3px;
}
li:before {
    content: initial;
}
li:last-child {
    border-bottom: none;
}
li:hover {
    background-color: #ddd;
}
li:hover button {
    display: block;
}
</style>