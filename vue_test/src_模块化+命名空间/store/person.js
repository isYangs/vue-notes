// 人员管理相关的配置
import axios from 'axios';
import { nanoid } from 'nanoid';
const personOptions = {
    namespaced: true,
    actions: {
        addPersonWang(context, val) {
            if (val.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', val);
            } else {
                alert('添加的人必须姓王');
            }
        },
        addPersonServer(context) {
            axios.get('https://v1.hitokoto.cn/').then(
                response => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: response.data.hitokoto });
                },
                error => {
                    console.log('请求失败', error);
                }
            );
        },
    },
    mutations: {
        ADD_PERSON(state, val) {
            state.personList.unshift(val);
        },
        UPDATE_PERSON(state, val) {
            state.personList = val;
        },
    },
    state: {
        personList: [{ id: 1, name: '张三' }],
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name;
        },
    },
};

export default personOptions;
