<template>
    <div>
        <User name="张三" :age="19" introduce="无业游民" />
    </div>
</template>

<script>
import User from './components/UserInfo.vue';

export default {
    name: 'App',
    components: {
        User,
    },
};
</script>