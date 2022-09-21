<template>
    <li>
        <label>
            <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input
                v-show="todo.isEdit"
                type="text"
                :value="todo.title"
                @blur="handleBlur(todo, $event)"
                @keyup.enter="handleBlur(todo, $event)"
                ref="inputTitle"
            />
        </label>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    name: 'TodoItem',
    // 声明接收todo对象
    props: ['todo'],
    methods: {
        // 勾选 or 取消勾选
        handleCheck(id) {
            // 通知App组件将id对应的todo对象的done属性取反
            this.$bus.$emit('checkTodo', id);
        },
        // 删除一个todo
        handleDelete(id) {
            // 通知父组件删除当前todo对象
            if (confirm('确定删除吗？')) {
                pubsub.publish('deleteTodoItem', id);
            }
        },
        // 编辑
        handleEdit(todo) {
            todo.isEdit = true;
            // $nextTick会在下一次DOM更新结束之后在执行回调
            this.$nextTick(() => {
                this.$refs.inputTitle.focus();
            });
        },
        // 失去焦点回调（真正执行修改逻辑）
        handleBlur(todo, e) {
            todo.isEdit = false;
            if (!e.target.value.trim()) return alert('输入不能为空！');
            this.$bus.$emit('updateTodo', todo.id, e.target.value);
        },
    },
};
</script>

<style scoped>
li {
    display: flex;
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}
li label {
    cursor: pointer;
    margin-right: auto;
}
li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}
li button {
    display: none;
    margin-top: 3px;
    margin-left: 10px;
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
