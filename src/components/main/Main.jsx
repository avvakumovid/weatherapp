import style from './Main.module.css'
import React from "react";
import Search from "../common/search/SearchContainer";


const Main = (props) => {



    return (
        <main className={style.main}>
            <Search {...props}/>
            <div className={style.info}>
                <div className={style.image}><img alt={''} src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}/></div>
                <h2 className={style.heading}>{props.city} </h2>
                <ul>
                    <li>Temperature: {props.temp} °C</li>
                    <li>Feels like: {props.feelsLike} °C</li>
                    <li>Atmospheric pressure: {props.pressure} mmhg</li>
                    <li>Precipitation: {props.main}</li>
                    <li>Description: {props.description}</li>
                </ul>
            </div>
        </main>
    )
}

export default Main;