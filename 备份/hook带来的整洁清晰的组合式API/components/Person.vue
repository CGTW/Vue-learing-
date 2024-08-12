<template>
  <div class="Person">
    <h2>当前就和为{{ sum }}</h2>
    <button @click="add">点我sum+1</button>
    <hr>
    <img  v-for="(dog,index)  in dogList" :key="index" :src = "dog">
    <br>
    <button @click = "giveOtherDog"> 再给我一只狗</button>
  </div>
</template>
  
<script setup lang="ts">
import useSum  from '@/hooks/useSum';
import useDog  from '@/hooks/useDog';
const {sum,add} = useSum()
const {dogList,giveOtherDog} = useDog()
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
img  {
 height: 100px;
  margin-right: 10px ;
}
</style>
  