<template>
    <div class="Person"> 
       <h2>监视基本数据类型[ref]当前求和的值为{{sum}}</h2> 
       <button @click = "changeSum">按一下加一次</button>
    </div>
</template>
<script>
export default 
{
    name:'Person'//组件名  x
}
</script >
<script  setup >
import { ref ,watch} from 'vue'
let sum = ref (0)
function  changeSum()
{
    sum.value +=1
}

 let stopWatch =  watch(sum,(newValue,oldValue)=>{
    console.log('sum变化了',newValue,oldValue)
     if(newValue>=10)
     {
        stopWatch()
     }
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