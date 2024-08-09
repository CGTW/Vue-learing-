<template>
    <div class="Person">
     <h1>姓名:{{ Person.name }}</h1>
     <h1>年龄:{{ Person.age  }}</h1>
     <h1>地址:{{  address  }}</h1>
     <button @click="showTel">查看联系方式</button>
     <button @click="changeName">修改名字</button>
     <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script>
export default 
{
    name:'Person'//组件名  

}

</script >
<script  setup >
import {ref} from 'vue'
        let name =ref('张三')
        let age = ref(18)
        let tel='13888888888888888888'
        let address = '福建福州'

        function showTel()
        {
            alert(tel)
        }
        function changeName()
        {
             name.value = '林帅哥'
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