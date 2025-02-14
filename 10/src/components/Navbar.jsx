import React from 'react';
import {Link} from "react-router-dom"
import cl from  './Navbar.module.css'
import {ShoppingCart} from 'phosphor-react'
const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <div className={cl.links}>
                <Link to="/">Shop</Link>
                <Link to="/cart">
                    <ShoppingCart size={32}/>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;