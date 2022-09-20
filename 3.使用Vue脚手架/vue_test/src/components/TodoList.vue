<template>
    <ul class="todo-list">
        <TodoItem v-for="todoItem in todoData" :key="todoItem.id" :todo='todoItem' />
    </ul>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
    name: 'TodoList',
    components: { TodoItem },
    props: ['todoData'],
};
</script>

<style scoped>
.todo-list {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>