import { reactive} from "vue";
import {Api} from "@/api/api";
import {DateFormatter} from "@/utils/date-formatter";

export const state = reactive({
    defaultCity: 'Moscow',
    weatherData: {},
    currDesc: {},
    wind: {},
    city: 'Москва',
})

export async function getWeather() {
    try {
        const currData = await Api(state.defaultCity)
        console.log(currData)
        state.currDesc = currData.main
        state.weatherData = currData.weather[0]
        state.wind = currData.wind
        state.city = currData.name
        // state.date = DateFormatter(currData.dt)
    } catch (err) {
        console.log( 'No', err)
    }
}
