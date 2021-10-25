import './App.css';
import MainContainer from "./components/main/MainContainer";
import Header from "./components/header/Header";
import Aside from "./components/aside/Aside";
import {Route} from "react-router-dom";
import WeatherForecastContainer from "./components/weatherForecast/WeatherForecastContainer";
import Search from "./components/common/search/Search";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Aside/>
                <Route path={'/main'} render={() =>  <MainContainer/>} />
                <Route path={'/weatherForecast'} render={() => <WeatherForecastContainer />}/>
            </div>
        </div>
    );
}

export default App;
