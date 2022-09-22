<template>
    <div class="list">
        <!-- 展示用户列表 -->
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div v-show="info.users.length" class="col" v-for="user in info.users" :key="user.id">
                <div class="card">
                    <a :href="user.html_url" target="_blank">
                        <img :src="user.avatar_url" class="card-img-top" :alt="user.login" />
                        <div class="card-body">
                            <h5 class="card-title">{{ user.login }}</h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <!-- 展示欢迎词 -->
        <h1 v-show="info.isFirst">Welcome to use!</h1>
        <!-- 展示加载中 -->
        <h1 v-show="info.isLoading">Loading...</h1>
        <!-- 展示错误信息 -->
        <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'List',
    data() {
        return {
            info:{
                isFirst: true,
                isLoading: false,
                errMsg: '',
                users: [],
            }
        };
    },
    mounted() {
        this.$bus.$on('updateListData', (dataObj) => {
            this.info = { ...this.info, ...dataObj };
        });
    },
};
</script>

<style scoped>
.list {
    width: 100%;
    margin: 20px 0;
}
.list h1 {
    margin: 20px 0;
}
</style>
