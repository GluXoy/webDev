import React from 'react';
import LiItem from "./LiItem";

const ItemList = ({itemList, setItemList}) => {
    const toggleItem = (id) => {
        setItemList(itemList.map(item =>
            item.id === id ? {...item, isSelected: !item.isSelected} : item
        ));
    };

    const deleteItem = (id) => {
        setItemList(itemList.filter(item => item.id !== id))
    }

    return (
        <div className="item-list">
            <h1>To do list</h1>
            {itemList.length === 0 && <span>No items!</span>}
            <ul>
                {itemList.map(item => (
                    <LiItem item={item} deleteItem={deleteItem} toggleItem={toggleItem}/>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;