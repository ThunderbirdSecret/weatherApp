
<script>
import {ref, watchEffect} from "vue";
import clouds from "@/assets/icons/spite_overcloud.svg";
import rain from "@/assets/icons/spite_overcloud_rainfall_1.svg"
import sun from "@/assets/icons/sun.svg"
import thunderstorm from "@/assets/icons/spite_overcloud_thunder.svg"
import snow from "@/assets/icons/spite_snowfall.svg"

export default {
  name: 'Icon',
  props: {
    code: {
      type: Number
    }
  },

  setup(props) {
    const weather = ref('')

    const idWeather = {
      storm: "2",
      drizzle: "3",
      rain: '5',
      snow: '6',
      atmosphere: '7',
      clear: '800',
      clouds: '8'
    }
    const firstNum = ref(props.code.toString()[0])
    console.log(firstNum.value)
    function weatherIcon() {
      console.log(props.code)
      if(props.code === idWeather.clear) {
        return weather.value = sun
      } else {
        switch (firstNum.value) {
          case idWeather.storm:
            return weather.value = thunderstorm;
          case idWeather.drizzle || idWeather.rain:
            return weather.value = rain;
          case idWeather.clouds || idWeather.atmosphere:
            return weather.value = clouds;
          case idWeather.snow:
            return weather.value = snow;
        }
      }
    }
    console.log(weather.value)


    watchEffect(weatherIcon)

    return {
      weather
    }
  }
}
</script>

<template>
  <img :src="weather  " alt="icon" />
</template>