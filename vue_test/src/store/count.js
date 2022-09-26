// 求和相关的配置
const countOptions = {
    namespaced: true,
    actions: {
        incrementOdd(context, val) {
            if (context.state.sum % 2) {
                context.commit('INCREMENT', val);
            }
        },
        incrementWait(context, val) {
            setTimeout(() => {
                context.commit('INCREMENT', val);
            }, 500);
        },
    },
    mutations: {
        INCREMENT(state, val) {
            state.sum += val;
        },
        DECREMENT(state, val) {
            state.sum -= val;
        },
        UPDATE_SUM(state, val) {
            state.sum = val;
        },
    },
    state: {
        sum: 0,
        name: 'isYangs',
        subject: 'Vue',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        },
    },
};

export default countOptions;
