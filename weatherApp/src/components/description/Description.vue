<script>
import { ref, watchEffect} from "vue";
import Icon from "@/components/icons/icon-code.vue";

 export default {
   name: 'Description',
   components: {Icon},
   props: {
     info: {
       type: Object
     },
     weather: {
       type: Object
     },
     wind: {
       type: Object
     },
   },
   setup(props) {
      const image_url = ref('')
      const upd = ref(false)

     function newImage() {
       if (props.weather.icon !== undefined) {
         image_url.value = `https://openweathermap.org/img/wn/${props.weather.icon}@2x.png`
       }
       if (image_url.value !== '') {
         upd.value = true
       }
       console.log(image_url.value)
       return image_url
     }

     watchEffect(newImage)
     return {
        image_url,
        upd,
     }
   }
 }
</script>

<template>
  <div class="wrapper">
    <div class="main_block" v-if="image_url">
      <Icon :code="weather.id"/>
    </div>
    <div class="main_block" v-else-if="!upd">
      Loading...
    </div>

    <div class="wrapper__height">
<!--      Основная информация -->
      <div class="temp">
        <h1 class="title">{{ Math.round(info.temp)}}℃</h1>
        <p>ощущается как: {{ Math.round(info.feels_like)}}℃</p>
      </div>
    </div>

    <div class="other_block">
      <p class="img"> <img :src="image_url" alt="icon" width="45" height="45"/> {{ weather.description }}</p>
      <p>давление: {{info.pressure}} гПа</p>
      <p>влажность: {{info.humidity}}%</p>
      <p>{{ Math.round(info.temp_min) }}, {{ Math.round(info.temp_max)}}</p>
    </div>
<!--    детали  // #045d78-->
    <div>
      <p>Скорость ветра: {{Math.round(wind.speed)}}м/с</p>
      <p v-if="wind.gust">порывы: {{ Math.round(wind.gust) }}м/c</p>
      <p>направление ветра: {{ wind.deg }}°</p>
    </div>
  </div>

</template>

<style scoped>

.wrapper {
  display: grid;
  gap: 16px;
  padding: 18px;
  border-radius: 14px;
  background-image: linear-gradient(174deg, #9a9aee85, transparent);
  background-size: cover;
  font-family: sans-serif;
  color: #e1e3f7;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  justify-content: center;
  grid-template-rows: max-content max-content max-content;
}

.title {
  font-size: 70px;
}
.temp {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.main_block {
  align-self: center;
}

.img {
  display: flex;
  align-items: center;
}
</style>