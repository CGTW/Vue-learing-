<template>
    <div class="Person">
         <h1>个人介绍</h1>
         姓：<input type = "text" v-model="firstName"><br>
         名：<input type = "text" v-model="lastName"><br>
         全名：<span>{{fullName}}</span><br>
         <button @click = "changeFullName">更改全名为li-si</button>
    </div>
</template>
<script>
export default 
{
    name:'Person'//组件名  x
}
</script >
<script  setup >
import {reactive, ref , toRef, toRefs,computed } from 'vue'
 let firstName = ref("张")
 let lastName = ref ("三")



 function changeFullName()
 {
    fullName.value = 'li-si'
 }

 let fullName = computed({
    get()
    {
    return  firstName.value.slice(0,1).toUpperCase () + firstName.value.slice(1)+"-"+ lastName.value
     },
    set(val)
    {
        const [str1,str2] = val.split('-')
        firstName.value = str1
        lastName.value = str2  

    }
 }//缓存机制
)

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