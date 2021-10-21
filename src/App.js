import './App.css';
import MainContainer from "./components/main/MainContainer";
import Header from "./components/header/Header";
import Aside from "./components/aside/Aside";
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Aside/>
                <Route path={'/main'} render={() =>  <MainContainer/>} />
            </div>
        </div>
    );
}

export default App;
