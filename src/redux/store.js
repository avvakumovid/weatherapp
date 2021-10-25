import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import mainReducer from "./reducers/mainReducer";
import {weatherForecastReducer} from "./reducers/weatherForecastReducer";
import {searchReducer} from "./reducers/searchReducer";

let reducers = combineReducers(
    {
        main: mainReducer,
        weatherForecast: weatherForecastReducer,
        search: searchReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;