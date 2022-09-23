import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 准备actions -- 用于响应组件中的动作
const actions = {
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
};
// 准备mutations -- 用于操作数据（state）
const mutations = {
    INCREMENT(state, val) {
        state.sum += val;
    },
    DECREMENT(state, val) {
        state.sum -= val;
    },
};
// 准备state -- 用于存储数据
const state = {
    sum: 0,
    name: 'isYangs',
    subject: 'Vue',
};
// 准备getters -- 用于将state中的数据进行加工形成新的数据（类似于计算属性）
const getters = {
    bigSum(state) {
        return state.sum * 10;
    },
};

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
});
