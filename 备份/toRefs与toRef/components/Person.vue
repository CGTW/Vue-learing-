<template>
    <div class="Person">
        <h1>个人介绍</h1>
         <h2>姓名：{{name}}</h2>
         <h2>年龄：{{age}}</h2>
         <button @click="changeName"> 改变名字</button>
         <button @click="changeAge">改变年龄</button>
    </div>
</template>
<script>
export default 
{
    name:'Person'//组件名  x
}
</script >
<script  setup >


import {reactive, toRef, toRefs} from 'vue'
let  Person  = reactive({name :'林金滨' ,age :18})
let {name,age} = toRefs(Person)
let nl = toRef( Person,"age")
console.log(nl.value);


function changeName()
{
    name.value  +="!!!!"
}
function changeAge()
{
    age.value += 1
}

</script>
<style scoped>
.Person
{
    background-color:rgb(224, 22, 26) ;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding:20px;

}
button
{
    margin: 0 5px ;
}
</style>