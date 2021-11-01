import {WeatherForecastAPI} from "../../API/API";

const GET_WEATHER_FORECAST = 'GET_WEATHER_FORECAST';


let initialState = {
    data: null,
    city: ''
}

export const weatherForecastReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_WEATHER_FORECAST: {
            return {
                ...state,
                data: [...action.data],
                city: action.city
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
            dispatch(weatherForecast(response.list, response.city.name))
        })
    }
}

const weatherForecast = (data, city) => ({type: GET_WEATHER_FORECAST, data, city })
