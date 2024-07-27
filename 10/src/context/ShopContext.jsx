import React, {createContext, useState} from 'react';

export const ShopContext = createContext(null)
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState()
    return (
        <ShopContext.Provider>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;