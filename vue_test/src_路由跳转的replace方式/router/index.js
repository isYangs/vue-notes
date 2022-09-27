// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
import About from '@/pages/About';
import Home from '@/pages/Home';
import Message from '@/pages/Message';
import News from '@/pages/News';
import Detail from '@/pages/Detail';

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:title',
                            component: Detail,
                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                            // props: { a: 1, b: 'hello' },  // 不常用

                            // props的第二种写法，值为布尔值，若布尔值为真，就会把该组件收到的所有params参数，以props形式传给Detail组件。
                            // props: true,

                            // props的第三种写法，值为函数
                            props($route) {
                                return { id: $route.query.id, title: $route.query.title };
                            },
                            // 使用解构赋值可以把$route简化掉
                            /* props({ query }) {
                                return {
                                    id: query.id,
                                    title: query.title,
                                };
                            },*/
                        },
                    ],
                },
            ],
        },
    ],
});
