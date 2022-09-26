import Vue from 'vue';
import Vuex from 'vuex';
import countOptions from '@/store/count';
import personOptions from '@/store/person';

Vue.use(Vuex);

// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions,
    },
});
