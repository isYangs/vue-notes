<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <router-link
                    :to="{
                        name: 'detail',
                        query: {
                            id: m.id,
                            title: m.title,
                        },
                    }"
                >
                    {{ m.title }}
                </router-link>
                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
            </li>
        </ul>
        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            messageList: [
                { id: '1', title: 'message001' },
                { id: '2', title: 'message002' },
                { id: '3', title: 'message003' },
            ],
        };
    },
    methods: {
        pushShow(m) {
            this.$router.push({
                name: 'detail',
                query: {
                    id: m.id,
                    title: m.title,
                },
            });
        },
        replaceShow(m) {
            this.$router.replace({
                name: 'detail',
                query: {
                    id: m.id,
                    title: m.title,
                },
            });
        },
    },
};
</script>
