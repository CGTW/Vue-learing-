<template>
    <div class="Home">
      首页
    </div>
</template>

<script setup lang = "ts">
//我希望当我欣赏完这个网页3秒后自动跳转到新闻页面
import{onMounted} from 'vue'
import {useRouter} from  'vue-router'

const  router = useRouter() // 获取所有的路由
//首先页面出现时开始计时 即页面挂载成功后开始计时
onMounted(()=>
{
  setTimeout(() => {
    router.push('/news')
  }, 3000);//多少时间执行某事
})
</script>
<style>

</style>