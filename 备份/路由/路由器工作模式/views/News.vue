<template>
    <div class="Home">
      新闻
    </div>
</template>

<script setup lang = "ts">
import {onMounted,onUnmounted,onBeforeUnmount,onBeforeMount} from 'vue'

onBeforeMount(()=>
{
  console.log('挂载前');
})
onBeforeUnmount(() => {
  console.log('卸载前');
}),

onUnmounted(()=>
{
  console.log('卸载完毕');
  
})
</script>
<style>

</style>