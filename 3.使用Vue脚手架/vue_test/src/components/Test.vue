<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            isShow: true,
        };
    },
};
</script>

<style scoped>
h1 {
    background: #f1ac08;
}

.hello-enter-active {
    animation: move 0.5s linear;
}

.hello-leave-active {
    animation: move 0.5s linear reverse;
}

@keyframes move {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0px);
    }
}
</style>
