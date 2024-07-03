import React from 'react';
import cl from './MySearch.module.css'

const MySearch = () => {
    return (
        <div>
            <input className={cl.searchInput} placeholder="Search" type="text"/>
        </div>
    );
};

export default MySearch;