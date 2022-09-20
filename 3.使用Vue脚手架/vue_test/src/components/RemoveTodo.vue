<template>
    <div class="remove-todo">
        <label>
            <input type="checkbox" />
        </label>
        <span>
            <span>已完成0</span>
            / 全部2
        </span>
        <button class="btn btn-danger">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'RemoveTodo',
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