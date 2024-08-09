<template>
    <div class="Person"> 
       <h2>监视对象数据类型[reactive]</h2>
        <!-- 监视的第三种情况 -->
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
import { ref ,watch,reactive} from 'vue'
let person  = reactive ({
    name :'张三',
    age:18
})
function changeName()
{
   person.name += "__"

}

function changeAge()
{
    person.age+= 1
}
function changePerson()
{
   Object.assign(person,{name:"李四",age:19})
}

//监视
watch(person,(newValue,oldValue)=>
{
  console.log('person变化了',newValue,oldValue);//默认深度监视
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