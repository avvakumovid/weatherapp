import {DataAPI} from "../../API/API";

const GET_WEATHER_DATA = 'GET_WEATHER_DATA'


let initialstate = {
    data: null
}

const mainReducer = (state = initialstate, action) => {
    switch (action.type){
        case GET_WEATHER_DATA:
        return {
            ...state,
            data: action.data
        }
        default: {
            return state
        }
    }
}

export default mainReducer;

export const getWeatherData = (city) => {
    return (dispatch) => {
        DataAPI.getData(city).then(response => {
            dispatch(weatherDataToState(response))
        });

    }
}

export let weatherDataToState = (data) => ({type: GET_WEATHER_DATA, data})