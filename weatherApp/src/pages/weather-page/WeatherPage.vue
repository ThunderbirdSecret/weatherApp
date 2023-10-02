<script setup>
import Input from "@/components/input/Input.vue";
import Description from "@/components/description/Description.vue";
import {onMounted } from "vue";
import {getWeather, state} from "@/hooks/data";

onMounted(getWeather)

</script>

<template>
 <main>
   <div>
     <div>
       <input
           class="search"
           type="text"
           v-model="state.defaultCity"
           @keyup.enter="getWeather"
           placeholder="Введите город"
       />
     </div>
     <div class="description">
       <h1>{{state.city}}</h1>
       <Description :info="state.currDesc" :weather="state.weatherData" :wind="state.wind"/>
     </div>
   </div>
 </main>
</template>

<style scoped>
.description {
  color: #e1e3f7;
}
.search {
  background: transparent;
  //border-style: none;
  color: white;
  border: solid 1px gray;
  border-radius: 14px;
  width: 100%;
  height: 35px;
  padding-left: 8px;
}

</style>