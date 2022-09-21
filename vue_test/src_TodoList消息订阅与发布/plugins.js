export default {
    install(Vue, nanoid) {
        Vue.prototype.$nanoid = nanoid;
    },
};
