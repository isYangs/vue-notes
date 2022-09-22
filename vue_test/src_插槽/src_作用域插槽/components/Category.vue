<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <slot :games='games'></slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['title'],
    data() {
        return {
            games: ['永劫无间', 'CS:GO', '绝地求生', '英雄联盟'],
        };
    },
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
.foot {
    display: flex;
    justify-content: space-around;
}

h4 {
    text-align: center;
}
</style>
