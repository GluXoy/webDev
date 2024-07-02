import React from 'react';
import cl from '../styles/NavBar.module.css'

const NavBar = ({setVisible}) => {
    return (
        <div className={cl.navBar}>
            <h1>Hello World!</h1>
            <button className={cl.btn} onClick={() => setVisible(true)}>Show!</button>
        </div>
    );
};

export default NavBar;