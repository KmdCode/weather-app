import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY
const baseUrl =  'http://api.weatherapi.com/v1'

const apiCalls = () => {
    const fetchCurrentWeather = async(city)=>{
        const response = await axios.get(`${baseUrl}/current.json`, {
            params: {
                key: API_KEY,
                q: city,
                aqi: "no"
            }
        })
        return response.data
    }

    const fetchForecastWeather = async (city, days) => {
        const response = await axios.get(`${baseUrl}/forecast` , {
            params: {
                key: API_KEY,
                q: city,
                days:days,
                aqi:"no",
                alerts:"no"
            }
        })
        return response.data
    }

    return {fetchCurrentWeather, fetchForecastWeather}
}

export default apiCalls