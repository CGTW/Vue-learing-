//创建一个路由器并暴露出去

//第一步：引入一个路由器
import {
    computed
} from "vue";
import {
    createRouter,
    createWebHistory,
    createWebHashHistory
} from "vue-router";
//引入一个个可能呈现的组件
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import News from '@/views/News.vue'
import Detail from '@/views/Detail.vue'

//第二步：创建一个路由器
const router = createRouter({
    history: createWebHistory(), //http://localhost:5173/#/about 哈希模式
    //http://localhost:5173/#/about history模式
    routes: [{
            path: '/', // 默认路径
            redirect: '/home', // 重定向到 /home
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News,
            children: [{
                name: 'xiang',
                path: 'detail/:id/:title/:content',
                component: Detail,
                /* props:true */
                //当传递的值在params里时候可以使用这个
                // 第一种写法
                //将路由的所有的params参数作为props传给路由组件
                //第二种写法 函数 决定什么作为props给路由组件
                /*   props(route){
                console.log(route )
                return route.query

               } */
              props:{
                
              }
            }]
        }
    ]
})

export default router