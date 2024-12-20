import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const WeatherCard = ({city, temperature, condition, icon}) => {
    return(
        <Card sx={{maxWidth: 300, margin: 2, textAlign: "center"}}>
                <CardContent>
                    <Typography variant="h5">{city}</Typography>
                    <img src={icon} alt={condition} style={{width:"50px"}}></img>
                    <Typography variant="h4">{temperature}°C</Typography>
                    <Typography variant="body1" color="text.secondary">{condition}</Typography>
                </CardContent>
        </Card>
    )
    
}

export default WeatherCard