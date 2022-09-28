// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
import About from '@/pages/About';
import Home from '@/pages/Home';
import Message from '@/pages/Message';
import News from '@/pages/News';
import Detail from '@/pages/Detail';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            meta: { isAuth: true, title: '关于' },
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'news',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                },
                {
                    name: 'message',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            component: Detail,
                            meta: { title: '详情' },
                            props($route) {
                                return { id: $route.query.id, title: $route.query.title };
                            },
                        },
                    ],
                },
            ],
        },
    ],
});

export default router;
