import SearchContainer from "../common/search/SearchContainer";
import WFItem from "./wfItem/WFItem";

const WeatherForecast = (props) => {
  let data = [];
  if(props.data){
    data = props.data.map(d => <WFItem temp={d.main.temp} feelsLike={d.main.feels_like}
                                           pressure={d.main.pressure} main={d.weather[0].main}
                                           description={d.weather[0].description} icon={d.weather[0].icon}
                                            time={d.dt_txt}
                                            />)
  }

  return (<div>
    <SearchContainer {...props}/>
    <h1>{props.city}</h1>
    {data}
    </div>)
}

export default WeatherForecast;