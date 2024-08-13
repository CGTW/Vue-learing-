<template>
  <div class="new-container">
    <!-- 导航区 -->
    <ul class="new-title" style="list-style-type: none;">
      <li v-for="news in newList" :key="news.id">
        <!-- 第一种写法 -->
        <RouterLink :to="
        {
            name:'xiang',  
            params:
            {
               id:news.id,
               title:news.title,
               content:news.content
            }
        }
        ">
        {{ news.title }}</RouterLink> 
        <!-- 第二种写法 -->
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="new-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, onBeforeUnmount, onBeforeMount } from 'vue';
import { reactive } from 'vue';
import { RouterView,RouterLink} from 'vue-router';

const newList = reactive([
  { id: '001', title: '薯条是好东西', content: '薯条' },
  { id: '002', title: '汉堡是好东西', content: '汉堡' },
  { id: '003', title: '可乐是好东西', content: '可乐' }
]);

onBeforeMount(() => {
  console.log('挂载前');
});

onBeforeUnmount(() => {
  console.log('卸载前');
});

onUnmounted(() => {
  console.log('卸载完毕');
});
</script>

<style scoped>
.new-container {
  display: flex;
}

.new-title {
  width: 200px; /* 导航区的宽度 */
  background-color: #f0f0f0; /* 背景色 */
  padding: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* 导航区的阴影 */
}

.new-title li {
  margin-bottom: 10px;
  border: none; /* 去除导航栏的横线 */
}
.new-title a {
  text-decoration: none; /* 去除下划线 */
  color: inherit; /* 保持文字颜色 */
}


.new-content {
  flex-grow: 1; /* 占据剩余空间 */
  margin-left: 20px;
  padding: 20px;
  border: 1px solid #ddd; /* 外边框 */
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); /* 展示区的阴影 */
  background-color: #fff; /* 展示区背景色 */
}
</style>
