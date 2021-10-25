import {WeatherForecastAPI} from "../../API/API";

const GET_WEATHER_FORECAST = 'GET_WEATHER_FORECAST';


let initialState = {
    data: null
}

export const weatherForecastReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_WEATHER_FORECAST: {
            return {
                ...state,
                ...action.data
            }
        }
        default: {
            return {
                state
            }
        }
    }
}


export const getWeatherforecast = (city) => {
    return (dispatch) => {
        WeatherForecastAPI.getForecast(city).then(response => {
            dispatch(weatherForecast(response.data))
        })
    }
}

const weatherForecast = (data) => ({type: GET_WEATHER_FORECAST, data })
