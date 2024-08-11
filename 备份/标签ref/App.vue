<template>
    <div class="app">
        <h2 ref="title1">您好</h2>
        <button @click="showLog">点我输出这个元素</button>
     <person ref = "ren" />
     <!-- 获取组件实例 -->
    </div>
</template>

<script setup>
import Person from './components/Person.vue'; 
import {ref} from 'vue'
 
let title1= ref()//用于存储ref标记的内容
let ren = ref()
//方法
function showLog()
{
    console.log(title1.value);
    console.log(ren.value);
}
</script>
<style>
.app
{
    background-color:white ;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding:30px;
}
</style>