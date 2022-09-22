<template>
    <div class="root">
        <Category title="美食" :listData="foods">
            <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" />
            <span class="foot" slot="footer"><a href="https://meituan.com/">更多美食</a></span>
        </Category>
        <Category title="游戏" :listData="games">
            <span class="foot" slot="footer">
                <a href="https://store.steampowered.com/">更多游戏</a>
                <a href="https://store.steampowered.com/">其他游戏</a>
            </span>
        </Category>
        <Category title="电影" :listData="films">
            <video
                slot="center"
                controls
                src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
            ></video>
            <template v-slot:footer>
                <span class="foot">
                    <a href="https://movie.douban.com/">更多电影</a>
                </span>
                <h4>欢迎来观看电影</h4>
            </template>
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
