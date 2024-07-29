import axios from "axios";

const TOKEN = "7f6717003b675dfbb90f1cabcabee0e2"

axios.defaults.baseURL = "https://api.openweathermap.org/";

export const fetchWeather = async (value) => {
    const response = await axios.get(`/data/2.5/weather?q=${value}&appid=${TOKEN}&units=metric`)
    return response.data;
}