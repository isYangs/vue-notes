<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">
                    {{ m.title }}
                </router-link>
                &nbsp;&nbsp;-->
                <!-- 跳转路由并携带params参数，to的对象写法 -->
                <router-link
                    :to="{
                        // 此处不能使用path写法
                        name: 'detail',
                        params: {
                            id: m.id,
                            title: m.title,
                        },
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
