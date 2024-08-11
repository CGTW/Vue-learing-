<template>
    <div class="Person">
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, reactive, watchEffect, defineExpose } from 'vue';
  import type { PersonInter } from '@/types'; 
  import type { Persons } from '@/types';// 修正了 import 语法错误

  let person: PersonInter = { id: '123', name: '张三', age: 18 };
  let personList:Persons= [
  { id: '12322', name: '张三', age: 18 },
  { id: '12321', name: '张三', age: 18 },
  { id: '12323', name: '张三', age: 18 }
  ]
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
  