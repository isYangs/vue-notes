<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <AddTodo @addTodo="addTodo" />
                <TodoList
                    :todoData="todoData"
                    :checkTodo="checkTodo"
                    :deleteTodoItem="deleteTodoItem"
                />
                <RemoveTodo
                    :todoData="todoData"
                    @checkAllTodo="checkAllTodo"
                    @clearAllTodo="clearAllTodo"
                />
            </div>
        </div>
    </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue';
import TodoList from './components/TodoList.vue';
import RemoveTodo from './components/RemoveTodo.vue';

export default {
    name: 'App',
    components: {
        AddTodo,
        TodoList,
        RemoveTodo,
    },
    data() {
        return {
            todoData: JSON.parse(localStorage.getItem('todoData')) || [],
        };
    },
    methods: {
        // 添加todo
        addTodo(todoObj) {
            this.todoData.unshift(todoObj);
        },
        // 勾选 or 取消勾选一个todo
        checkTodo(id) {
            this.todoData.forEach(todo => {
                if (todo.id === id) todo.done = !todo.done;
            });
        },
        // 删除一个todo
        deleteTodoItem(id) {
            this.todoData = this.todoData.filter(todo => todo.id !== id);
        },
        // 是否全选
        checkAllTodo(done) {
            this.todoData.forEach(todo => {
                todo.done = done;
            });
        },
        // 清楚所有已完成的todo
        clearAllTodo() {
            this.todoData = this.todoData.filter(todo => !todo.done);
        },
    },
    watch:{
        todoData:{
            deep:true,
            handler(val){
                localStorage.setItem('todoData',JSON.stringify(val));
            },
        }
    }
};
</script>

<style>
body {
    background: #fff;
}
.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}
.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}
.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}
.btn:focus {
    outline: none;
}
.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>