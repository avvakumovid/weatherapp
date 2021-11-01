import {CurrentWeatherAPI, DataAPI} from "../../API/API";

const GET_WEATHER_DATA = 'GET_WEATHER_DATA'


let initialstate = {
    temp: 0,
    feelsLike: 0,
    pressure: 0,
    main: '',
    description: '',
    city: '',
    icon: ''
}

const mainReducer = (state = initialstate, action) => {
    switch (action.type){

        case GET_WEATHER_DATA:

        return {

            ...state,
            ...action.data
        }
        default: {
            return state
        }
    }
}

export default mainReducer;

export const getWeatherData = (city) => {
    return (dispatch) => {
        CurrentWeatherAPI.getData(city).then(response => {
            dispatch(weatherDataToState(response.main.temp,
                                        response.main.feels_like,
                                        response.main.pressure,
                                        response.weather[0].main,
                                        response.weather[0].description,
                                        response.name,
                                        response.weather[0].icon,

                ))
        });

    }
}

export let weatherDataToState = (temp, feelsLike, pressure, main, description, city, icon) => ({type: GET_WEATHER_DATA, data: {temp, feelsLike, pressure, main,  description, city,icon}})