import React from "react";
import Main from "./Main";
import {connect} from "react-redux";
import {getWeatherData} from "../../redux/reducers/mainReducer";


class MainContainer extends React.Component {

    componentDidMount() {
        this.props.getData('Moscow')
    }
    render() {
        return <Main {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        temp: state.main.temp,
        feelsLike: state.main.feelsLike,
        pressure: state.main.pressure,
        main: state.main.main,
        description: state.main.description,
        city: state.main.city,
        icon: state.main.icon,
        searchingText: state.search.city
    }
}

export default connect(mapStateToProps, {getData: getWeatherData})(MainContainer)