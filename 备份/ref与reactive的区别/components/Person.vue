<template>
    <div class="Person">
    <h2>一辆{{ car.brand }},价值为{{ car.price }}万</h2>
    <button @click = "changeCarPrice">改变车的价格</button>
    <button @click = "changeCarBrand">改变车的品牌</button>
    <button @click =" changeCar">换辆车</button>
    <br>
    <h2>游戏列表</h2>
    <ul>
        <li v-for=" g  in game" :key="g.id"> {{ g.name }}</li>
    </ul>
    <button @click="changeFirstGameName">
    修改第一个游戏的名字
    </button>
    <hr>
    <h2> sum的值为:{{ sum }} </h2>
    <button @click="changSum"> 按一下加一次</button>

    </div>
</template>
<script>
export default 
{
    name:'Person'//组件名  x
}
</script >
<script  setup >

import {reactive,ref} from 'vue'

let car = ref({
    brand:'奔驰', 
    price: 100
})

let sum = ref (0)

let game = ref([
        {id:"123412412412",name:"王者荣耀"},
        {id:"123412412413",name:"原神"},
        {id:"123412412414",name:"三国志"}
    ])



 function changeCarPrice()
 {
     car.value.price +=10
 }
 function changeFirstGameName()
 {
    game.value[0].name="蝴蝶飞啊"
 }
 function changSum()
 {
    sum .value +=1
 }
 function changeCarBrand()
 {
    car.value.brand = '宝马'
 }
function changeCar()
{
    car.value = {brand:'保时捷', price: 100}
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