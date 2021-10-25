import style from "./Search.module.css"
import React from "react";

const Search = (props) => {
    let searchingText = React.createRef();

    let onTextChange = () => {
        let text = searchingText.current.value;
        props.updateSearchingText(text);
    }

    let getWeather = () => {
        props.getWeatherData(props.searchingText)
    }

  return (
      <div className={style.cites}>
          <label>
              City
              <input onChange={onTextChange} className={style.search} type="search" ref={searchingText}/>
          </label>
          <button onClick={getWeather}>Show</button>
      </div>
  )
}

export default Search