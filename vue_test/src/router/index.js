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
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'news',
                    path: 'news',
                    component: News,
                },
                {
                    name: 'message',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            component: Detail,
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

// 全局前置路由守卫-初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    console.log(to, from);
    if (to.name === 'news' || to.name === 'message') {
        if (localStorage.getItem('name') === 'isYangs') {
            next();
        } else {
            alert('你还没有权限访问这个组件');
        }
    } else {
        next();
    }
});

export default router;
