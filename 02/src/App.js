import './styles/App.css';
import React from "react";
import {useState} from "react";
import ValueChanger from "./components/ValueChanger";
import NavBar from "./components/NavBar";
import TemperatureControl from "./components/TemperatureControl";

function App() {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className="App">
            <NavBar setVisible={setIsVisible}/>
            <ValueChanger visible={isVisible} setVisible={setIsVisible}/>
            <TemperatureControl/>
            <TemperatureControl/>
            <TemperatureControl/>
        </div>
    );
}

export default App;
