<template>
    <div class="root">
        <Search />
        <List />
    </div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Search from './components/Search.vue';
import List from './components/List.vue';
export default {
    name: 'App',
    components: {
        Search,
        List,
    },
};
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
    color: #000;
}
.root {
    width: 80%;
    margin: 0 auto;
}
</style>
