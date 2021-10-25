import React from "react";
import WeatherForecast from "./WeatherForecast";
import {connect} from "react-redux";
import {getWeatherforecast} from "../../redux/reducers/weatherForecastReducer";


class WeatherForecastContainer extends React.Component {
    componentDidMount() {
        this.props.getWeatherforecast('Moscow')
    }

    render() {
        return <WeatherForecast {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
    }
}

export default connect(mapStateToProps, {getWeatherforecast})(WeatherForecastContainer)