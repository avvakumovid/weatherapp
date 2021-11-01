import style from "./wfItem.module.css";

const WFItem = (props) => {
  return  <main className={style.main}>
    <div className={style.info}>
      <h2><img alt={''} src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}/></h2>
      <h3>Time: {props.time}</h3>
      <ul>
        <li>Temperature: {props.temp} °C</li>
        <li>Feels like: {props.feelsLike} °C</li>
        <li>Atmospheric pressure: {props.pressure} mmhg</li>
        <li>Precipitation: {props.main}</li>
        <li>Description: {props.description}</li>
      </ul>
    </div>
  </main>
}

export default WFItem