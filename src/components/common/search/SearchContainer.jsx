import React from "react";
import Search from "./Search";
import {connect} from "react-redux";
import {updateSearchingText} from "../../../redux/reducers/searchReducer";


class SearchContainer extends React.Component {

    componentDidMount() {
        this.props.updateSearchingText('Moscow')
    }
    render() {
        return (
            <Search />
        )
    }
}

const mapStateToProps = (state) => {
    return {
    data: state.weatherForecast.data,
    }
}




export default connect(mapStateToProps, {updateSearchingText})(SearchContainer)