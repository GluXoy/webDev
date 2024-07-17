import React from 'react';

const LiItem = ({item, toggleItem, deleteItem}) => {

    return (
        <li key={item.id}>
            <label htmlFor="item">
                <input
                    type="checkbox"
                    checked={item.isSelected}
                    onChange={() => toggleItem(item.id)}
                />
                {item.value}
                <button onClick={() => deleteItem(item.id)}>delete</button>
            </label>
        </li>
    );
};

export default LiItem;