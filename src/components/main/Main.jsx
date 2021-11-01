import style from './Main.module.css'
import SearchContainer from "../common/search/SearchContainer";

const Main = (props) => {
    return (
        <main className={style.main}>
            <SearchContainer {...props}/>
            <div className={style.info}>
                <h2>{props.city} <img alt={''} src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}/></h2>
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