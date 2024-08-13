//创建一个路由器并暴露出去

//第一步：引入一个路由器
import { computed } from "vue";
import { createRouter,createWebHistory,createWebHashHistory} from "vue-router";
//引入一个个可能呈现的组件
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import News from '@/views/News.vue'

//第二步：创建一个路由器
const router = createRouter({
   history:createWebHashHistory(),//http://localhost:5173/#/about 哈希模式
                                 //http://localhost:5173/#/about history模式
   routes:[
    {
        path: '/',           // 默认路径
        redirect: '/home',   // 重定向到 /home
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/about',
        component : About
    },
    {
        path:'/news',
        component : News
    }
   ] 
}
)

export default router