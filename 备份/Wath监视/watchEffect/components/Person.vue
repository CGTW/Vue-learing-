<template>
    <div class="Person"> 
       <h2>水位的监视</h2>
       <h2>水位:{{ temp }}</h2>
       <h2>温度:{{ height }}</h2>
       <button @click = "changeTemp">水温加10</button>
       <button @click = "changeHeight">水位加10</button>
    </div>
</template>
<script>
export default 
{
    name:'Person'//组件名  x
}
</script >
<script  setup >
import { ref ,watch,reactive,watchEffect} from 'vue'
//数据

let temp = ref(0)
let height = ref(0)

//方法
function changeTemp()
{
   temp.value += 10 

}

function changeHeight()
{
  height.value +=10
}


//监测

watchEffect(()=>{
if(temp.value>=60 ||height.value>=80)
console.log("向服务器发送消息")
})

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