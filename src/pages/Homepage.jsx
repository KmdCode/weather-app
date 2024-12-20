import React, {useState, useEffect} from "react";
import { CircularProgress, Grid, Typography } from "@mui/material";
import WeatherCard from "../components/weatherCard";
import apiCalls from '../services/weatherService'

const Homepage = () => {

    const [weatherData, setWeatherData] = useState([])
    const [loading, setLoading] = useState(true)

    const cities = ["Pretoria", "Cape Town", "Durban", "Johannesburg", "Bloemfontein", "Polokwane", "Kimberly"]

    useEffect(() => {
        const fetchWeather = async () => {
            try{
                setLoading(true)
                const {fetchCurrentWeather} = apiCalls()
                const data = await Promise.all(
                    cities.map(async(city) => {
                        const response = await fetchCurrentWeather(city)
                        return{
                            city: response.location.name,
                            temperature: response.current.temp_c,
                            condition: response.current.condition.text,
                            icon: response.current.condition.icon
                        }
                    })
                    )
                console.log(data)
                setWeatherData(data)
            }catch(error){
                console.log("Error Fetching Weather Data")
            }finally{
                setLoading(false)
            }
        }

        fetchWeather()
    }, [])

    return(
        <div>
            <Typography variant="h4" align="centre" gutterBottom>
                Weather SA
            </Typography>
            {loading?(
                <CircularProgress sx={{display:"block", margin: "2rem auto"}}/>
            ):(
                <Grid container justifyContent="center">
                    {weatherData.map(weather => (
                        <WeatherCard
                            key={weather.city}
                            city={weather.city}
                            temperature={weather.temperature}
                            condition={weather.condition}
                            icon={weather.icon}
                        />                      
                    ))}
                </Grid>
            )}
        </div>
    )
}

export default Homepage