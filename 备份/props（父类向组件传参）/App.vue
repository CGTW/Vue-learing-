<template>
    <div class="app">
     <person a = "哈哈" />
     <!-- 获取组件实例 -->
    </div>
</template>

<script setup lang = "ts">
import Person from './components/Person.vue'; 
import {ref} from 'vue'
import type { Persons } from '@/types';
import {  reactive,defineProps,withDefaults} from 'vue';
let personList= reactive<Persons>( [
  { id: '12322', name: '张三', age: 18 },
  { id: '12321', name: '张三', age: 18 },
  { id: '12323', name: '张三', age: 18 }
  ])
//方法
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