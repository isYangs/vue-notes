<template>
    <div class="search">
        <label for="searchInput" class="form-label">Search Github Users</label>
        <div class="search-content">
            <input
                type="text"
                id="searchInput"
                class="form-control search-text"
                placeholder="enter the name you search"
                v-model="keyWord"
                @keyup.enter="searchUsers"
            />
            <button type="button" class="btn btn-primary search-btn" @click="searchUsers">
                Search
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
export default {
    name: 'Search',
    data() {
        return {
            keyWord: '',
        };
    },
    methods: {
        searchUsers() {
            // 请求前更新List数据
            this.$bus.$emit('updateListData', {
                isFirst: false,
                isLoading: true,
                errMsg: '',
                users: [],
            });
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    // 请求成功后更新List数据
                    this.$bus.$emit('updateListData', {
                        isLoading: false,
                        errMsg: '',
                        users: response.data.items,
                    });
                },
                error => {
                    // 请求失败后更新List数据
                    this.$bus.$emit('updateListData', {
                        isLoading: false,
                        errMsg: error.message,
                        users: [],
                    });
                }
            );
        },
    },
};
</script>

<style scoped>
.search {
    width: 100%;
    margin: 20px 0;
}
.search-content {
    display: flex;
}
.search-text {
    width: 80%;
}
.search-btn {
    margin-left: 10px;
}
</style>
