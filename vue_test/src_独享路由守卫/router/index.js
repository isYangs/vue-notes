// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
import About from '@/pages/About';
import Home from '@/pages/Home';
import Message from '@/pages/Message';
import News from '@/pages/News';
import Detail from '@/pages/Detail';

const router = new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            meta: { title: '关于' },
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
                    beforeEnter: (to, from, next) => {
                        console.log('独享路由守卫', to, from);
                        // 判断是否需要鉴权
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('name') === 'isYangs') {
                                next();
                            } else {
                                alert('你还没有权限访问这个组件');
                            }
                        } else {
                            next();
                        }
                    },
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

// 全局后置路由守卫-初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from);
    document.title = to.meta.title;
});

export default router;
