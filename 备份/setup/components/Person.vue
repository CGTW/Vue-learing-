<template>
    <div class="Person">
     <h1>姓名:{{ name }}</h1>
     <h1>年龄:{{ age  }}</h1>
     <button @click="showTel">查看联系方式</button>
     <button @click="changeName">修改名字</button>
     <button @click="changeName">修改年龄</button>
    </div>
</template>

<script>
export default 
{
    name:'Person',//组件名
    setup()
    {
        let name ='张三'
        let age = 18
        let tel='13888888888888888888'


        function showTel()
        {
            name = '林帅哥' 
        }
        function changeName()
        {
            age += 1
        }
        function changeAge()
        {
            alert(tel)
        }
        return {name,age,showTel,changeName, changeAge};
    }
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