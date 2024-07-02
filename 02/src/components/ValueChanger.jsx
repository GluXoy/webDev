import React, {useState} from 'react';
import classes from '../styles/ValueChanger.module.css'

const ValueChanger = ({visible, setVisible}) => {

    const [value, setValue] = useState(0)

    const inc = () => {
        setValue(value + 1);
    }

    const dec = () => {
        if (value !== 0) {
            setValue(value - 1);
        }
    }

    const rootClasses = [classes.valueChanger]

    if (visible) {
        rootClasses.push(classes.active)
    }


    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.valueChangerContent} onClick={e => e.stopPropagation()}>
                <h1 style={{fontSize: 35}}>{value}</h1>
                <div className={classes.btns}>
                    <button className={classes.btn} onClick={dec}>Dislike</button>
                    <button className={classes.btn} onClick={inc}>Like</button>
                </div>
            </div>
        </div>
    );
};

export default ValueChanger;