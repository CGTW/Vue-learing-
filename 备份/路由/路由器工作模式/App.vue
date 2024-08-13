<template>
    <div class="app">
        <h2>Vue路由测试</h2>
        <!-- 导航区 -->
        <div class  = " navigate">   
            <RouterLink to="/home" active-class="active">首页</RouterLink>
            <RouterLink to="/news" active-class="active">新闻</RouterLink>
            <RouterLink to="/about" active-class="active">关于</RouterLink>
        </div>
        <!-- 展示区 -->
         <div class = "main-content">
         <RouterView></RouterView>
         </div>
    </div>
</template>

<script setup lang = "ts">
import {RouterView,RouterLink} from 'vue-router'

</script>
<style>
/* 通用样式 */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

.app {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

/* 标题样式 */
h2 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
}

/* 导航区样式 */
.navigate {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.navigate a {
    color: #666;
    text-decoration: none;
    padding: 10px 20px;
    margin: 0 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}
a:hover {
    background-color: #d4d4d4;
}

/* 被激活时的样式 */
a.active {
    background-color: #333;
    color: #ffffff;
}


/* 展示区样式 */
.main-content {
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 5px;
    color: #555;
    text-align: center;
    font-size: 18px;
    line-height: 1.6;
    border: 2px solid #ef0f0ff4; /* 灰色边框 */
}

</style>