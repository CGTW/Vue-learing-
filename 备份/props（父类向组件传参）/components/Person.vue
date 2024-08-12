<template>
    <div class="Person">
      <!-- 加了冒号就是传值 -->
       <h2>{{ a }}</h2>
      <ul>
        <li v-for="num in  list " :key="num.id" >{{ num.name }}--{{ num.age }}</li><!-- li是一行 在li中使用循环 相当于将这一行又打印了一边所有结果打印 -->
      </ul>
      <!-- 父类传参给子类 -->
    </div>
  </template>
  
  <script setup lang="ts">
  import {defineProps} from 'vue';
  import type {Persons} from '@/types'

  //接受a和list
  /*  defineProps(['a','list']) */
  //接受a+保存

 /*  let x = defineProps(['a'])
  console.log(x); */
  
  //接受list如何限制list的值呢？ 
  /* defineProps<{ a:string ;list:Persons}>()  */
  //接受list + 限制类型 + 限制必要性 +指定默认值
  withDefaults(defineProps<{ a:string ;list?:Persons}>(),
{
  list:()=>[{id: '123221111', name: '张三111', age: 181 }]
})//这是个函数所以要有一个返回值
  </script>

  <style scoped>
  .Person {
    background-color: rgb(141, 2, 247);
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 10px;
  }
  button {
    margin: 0 5px;
  }
  </style>
  