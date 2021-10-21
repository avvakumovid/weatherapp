import React from "react";
import Main from "./Main";
import {connect} from "react-redux";
import {getWeatherData} from "../../redux/reducers/mainReducer";


class MainContainer extends React.Component {
    componentDidMount() {
        this.props.getWeatherData('Moscow')
    }

    render() {
        return <Main {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.main.data
    }
}

export default connect(mapStateToProps, {getWeatherData})(MainContainer)