<template>
    <div class="Person"> 
       <h2>监视对象数据类型[ref]</h2>
        <!-- 监视的第二种情况 -->
       <h2>姓名:{{ person.name }}</h2>
       <h2>年龄:{{ person.age }}</h2>
       <button @click = "changeAge">年龄加一岁</button>
       <button @click = "changeName"> 姓名变化</button>
       <button @click = "changePerson">修改整个人</button>
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
let person  = ref({
    name :'张三',
    age:18
})
function changeName()
{
   person.value.name += "__"

}

function changeAge()
{
    person.value.age+= 1
}
function changePerson()
{
    person.value={ name :'李四',
    age:90}
}

//监视
watch(person,(newValue,oldValue)=>
{
  console.log('person变化了',newValue,oldValue);
  
},{deep:true,immeidatetrue:true})//只监视  person对象地址
//如果要监视person内部的数据开启深度监视






//在修改oldValue不断的读取 let person  = ref({
//     name :'张三',
//     age:18
// })的值但是 
// function changeAge()
// {
//     person.value.age+= 1
// } 会修改原本的值 导致oldValue 和新的value一样
watch 
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