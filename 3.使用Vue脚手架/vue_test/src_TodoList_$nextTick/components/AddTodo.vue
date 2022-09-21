<template>
    <div class="add-todo">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add" />
    </div>
</template>

<script>
export default {
    name: 'AddTodo',
    data() {
        return {
            title: '',
        };
    },
    methods: {
        add() {
            // 校验数据
            if (!this.title.trim()) return alert('输入不能为空');
            // 将用户输入的内容包装成一个todo对象
            const todoObj = {
                id: this.$nanoid(),
                title: this.title,
                done: false,
                isEdit: false,
            };
            // 通知App组件去添加一个todo对象
            this.$emit('addTodo', todoObj);
            // 请空输入框
            this.title = '';
        },
    },
};
</script>

<style scoped>
.add-todo input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}
.add-todo input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
