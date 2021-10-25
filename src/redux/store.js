import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import mainReducer from "./reducers/mainReducer";

let reducers = combineReducers(
    {
        main: mainReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;