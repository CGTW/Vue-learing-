<template>
    <div class="app">
        <Person v-if="isShow"/>
    </div>
</template>

<script setup lang = "ts">
import Person from './components/Person.vue'
import {ref} from 'vue'
let isShow = ref(true)
</script>
<style>
.app
{
    background-color:white ;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding:30px;
}
</style>