import React, {useState} from 'react';
import cl from '../styles/TemperatureControl.module.css'

const TemperatureControl = () => {

    const [degrees, setDegrees] = useState(0)

    const inc = () => {
        setDegrees(degrees + 1)
    }

    const dec = () => {
        setDegrees(degrees - 1)
    }

    const getTemperatureClass = () => {
        if (degrees < -15) {
            return cl.extraCold;
        } else if (degrees <= 10) {
            return cl.cold;
        } else if (degrees > 10 && degrees <= 25) {
            return cl.warm;
        } else {
            return cl.hot;
        }
    };

    return (
        <div className={cl.temperatureControl}>
            <div className={`${cl.temperatureIndicator} ${getTemperatureClass()}`}>{degrees}°C</div>
            <div className={cl.temperatureSwitchers}>
                <button onClick={inc} className={cl.temperatureSwitcher}>+</button>
                <button onClick={dec} className={cl.temperatureSwitcher}>-</button>
            </div>
        </div>
    );
};

export default TemperatureControl;