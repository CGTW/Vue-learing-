<template>
  <div class="Person">
    <h2>当前就和为{{ sum }}</h2>
    <button @click="add">点我sum+1</button>
  </div>
</template>
  
<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount,onUnmounted} from 'vue'
let sum = ref(0)

function add() {
  sum.value += 1

}
//创建
console.log('创建');

//挂载前
onBeforeMount(() => {
  console.log('挂载前');

})
//挂载完毕
onMounted(() => {
  console.log('挂载完毕');
})
//更新前
onBeforeUpdate(() => {
  console.log('更新前');
})
//更新完毕
onUpdated(() => {
  console.log('更新完毕');
})
//卸载前  
onBeforeUnmount(()=>
{
  console.log('卸载前');
})
//卸载完成
onUnmounted(() => {
  console.log('卸载完成');
})

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
  