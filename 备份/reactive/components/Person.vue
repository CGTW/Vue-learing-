<template>
    <div class="Person">
    <h2>一辆{{ car.brand }},价值为{{ car.price }}万</h2>
    <button @click = "changeCarPrice">改变车的价格</button>
    <button @click = "changeCarPrice">改变车的价格</button>
    <br>
    <h2>游戏列表</h2>
    <ul>
        <li v-for=" g  in game" :key="g.id"> {{ g.name }}</li>
    </ul>
    <button @click="changeFirstGameName">
    修改第一个游戏的名字
    </button>
    <hr>
    <h2> 测试{{ obj.a.b.c }}</h2>
    <button @click="changeObj">修改数字</button>
    </div>
</template>
<script>
export default 
{
    name:'Person'//组件名  
}
</script >
<script  setup >

import {reactive} from 'vue'

let car = reactive({

    brand:'奔驰',
    price: 100
})

let game = reactive ([
        {id:"123412412412",name:"王者荣耀"},
        {id:"123412412413",name:"原神"},
        {id:"123412412414",name:"三国志"}
    ])

let obj = reactive({
   a:
   {
    b:{ 
           c:666
      }
   }
})

 function changeCarPrice()
 {
    car.price +=10
 }
 function changeFirstGameName()
 {
    game[0].name="蝴蝶飞啊"
 }
 function changeObj()
 {
    obj.a.b.c +=999
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