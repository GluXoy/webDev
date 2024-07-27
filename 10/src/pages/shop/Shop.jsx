import React from 'react';
import './Shop.css'
import { PRODUCTS } from "../../products";
import Product from "./Product";

const Shop = () => {
    return (
        <div className="shop">
            <h1 className="shopTitle">Truck shop</h1>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    );
};

export default Shop;