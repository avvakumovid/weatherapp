import React from "react";
import WeatherForecast from "./WeatherForecast";
import {connect} from "react-redux";
import {getWeatherforecast} from "../../redux/reducers/weatherForecastReducer";


class WeatherForecastContainer extends React.Component {
    componentDidMount() {
        this.props.getData('Moscow')
    }

    render() {
        return <WeatherForecast {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.weatherForecast.data,
        city: state.weatherForecast.city,
        searchingText: state.search.city
    }
}

export default connect(mapStateToProps, {getData: getWeatherforecast})(WeatherForecastContainer)