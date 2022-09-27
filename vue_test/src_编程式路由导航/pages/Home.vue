<template>
    <div>
        <h2>我是Home组件</h2>
        <ul class="nav nav-tabs">
            <li>
                <router-link class="list-group-item" active-class="active" to="/home/news">
                    News
                </router-link>
            </li>
            <li>
                <router-link class="list-group-item" active-class="active" to="/home/message">
                    Message
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Home',
    /*mounted() {
        console.log('Home组件即将被挂载', this);
    },*/
    /*beforeDestroy() {
        console.log('Home组件即将被销毁');
    },*/
};
</script>
