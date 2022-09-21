<template>
    <ul class="todo-list">
        <transition-group
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__bounceIn"
            leave-active-class="animate__bounceOut"
        >
            <TodoItem v-for="todoItem in todoData" :key="todoItem.id" :todo="todoItem" />
        </transition-group>
    </ul>
</template>

<script>
import 'animate.css'; // 引入animate.css
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
