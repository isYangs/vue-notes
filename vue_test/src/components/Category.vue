<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <!-- 定义一个插槽 -->
        <!-- <slot>我是默认值，当组件的使用者没有传递时，我就会出现</slot> -->
        <slot>
            <ul>
                <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
            </ul>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['title', 'listData'],
};
</script>

<style scoped>
.category {
    width: 200px;
    height: 300px;
    background: skyblue;
}
h3 {
    text-align: center;
    background: orange;
}

img,
video {
    width: 100%;
}
</style>
