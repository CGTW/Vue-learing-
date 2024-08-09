<template>
    <div class="Person"> 
       <h2>监视对象数据类型[reactive]</h2>
        <!-- 监视的第三种情况 -->
       <h2>姓名:{{ person.name }}</h2>
       <h2>年龄:{{ person.age }}</h2>
       <h2>汽车列表:{{ person.car.c1 }},{{ person.car.c2 }}</h2>
       <button @click = "changeAge">年龄加一岁</button>
       <button @click = "changeName"> 姓名变化</button>
       <button @click = "changeCar">修改全部车</button>
       <button @click = "changeC1">第一辆车</button>
       <button @click = "changeC2">第二辆车</button>
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
//数据
let person  = reactive ({
    name :'张三',
    age:18,
    car:
    {
      c1:'奔驰',
      c2:'宝马'
    }
})
//方法
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

function changeC1()
{
    person.car.c1 = '奥迪'
}
function changeCar ()
{
  person.car = {c1:'雅典',c2:'路虎'}
}
function changeC2 ()
{
   person.car.c2 = '保时捷'
}
//监视上述的多种数据监视
/* watch([()=> person.name,()=>person.car.c1],(newValue,oldValue)=>
{
  console.log('person变化了',newValue,oldValue);
})
 */
watch(()=>person.car.c1,(newValue,oldValue)=> 
{
  console.log('person.car变化了',newValue,oldValue);//函数监视person.car时
  //只是监视car的内部值 而 person.car = {c1:'雅典',c2:'路虎'} 改变了整个函数的地址
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