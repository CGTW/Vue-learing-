<template>
    <div class="Person"> 
      <h1>中国</h1>
      <h2 ref = "title1">福建</h2>
      <h2>小明</h2>
      <button @click="showLog">点我输出这个元素</button>
    </div>
</template>
<script>
export default 
{
    name:'Person'//组件名  x
}
</script >
<script  setup  name = "Person">
import { ref,watch,reactive,watchEffect,defineExpose} from 'vue'
//数据
let title1= ref()//用于存储ref标记的内容
let a = ref(0)
let b = ref(1)
let c = ref(2)

//方法
function showLog()
{
    console.log(title1.value);
    
}

defineExpose({a,b,c})


//监测

</script>
<style scoped>
.Person
{
    background-color:rgb(141, 2, 247) ;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding:10px;

}
button
{
    margin: 0 5px ;
}
</style>