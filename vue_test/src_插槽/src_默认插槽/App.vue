<template>
    <div class="root">
        <Category title="美食" :listData="foods">
            <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" />
        </Category>
        <Category title="游戏" :listData="games" />
        <Category title="电影" :listData="films">
            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category.vue';
export default {
    name: 'App',
    components: {
        Category,
    },
    data() {
        return {
            foods: ['火锅', '烧烤', '小龙虾', '牛排'],
            games: ['永劫无间', 'CS:GO', '绝地求生', '英雄联盟'],
            films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《独行月球》'],
        };
    },
};
</script>

<style>
.root {
    display: flex;
    justify-content: space-around;
}
</style>
