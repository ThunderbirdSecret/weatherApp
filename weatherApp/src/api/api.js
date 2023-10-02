import {API, API_key} from "@/utils/const";

export async function Api(city_name) {
    try {
        const response = await fetch(`${API}?q=${city_name}&appid=${API_key}&units=metric&lang=ru`);
        if(!response.ok) {
            throw new Error("Не найден населенный пункт");
        }
        const data = await response.json();
        return data;
    } catch (err) {
       return alert(err)
    }

}