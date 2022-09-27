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
                        /*params: {
                            id: m.id,
                            title: m.title,
                        },*/
                    }"
                >
                    {{ m.title }}
                </router-link>
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
};
</script>
