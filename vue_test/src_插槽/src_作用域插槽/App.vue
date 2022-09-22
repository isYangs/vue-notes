<template>
    <div class="root">
        <Category title="游戏">
            <template scope="demo">
                <ul>
                    <li v-for="(g, index) in demo.games" :key="index">{{ g }}</li>
                </ul>
            </template>
        </Category>
        <Category title="游戏">
            <template scope="{games}">
                <ol style="color: red">
                    <li v-for="(g, index) in games" :key="index">{{ g }}</li>
                </ol>
            </template>
        </Category>
        <Category title="游戏">
            <template slot-scope="{games}">
                <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
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
};
</script>

<style>
.root {
    display: flex;
    justify-content: space-around;
}
</style>
