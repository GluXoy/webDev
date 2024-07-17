import React, {useState} from 'react';

const NewItemForm = ({setItemList, itemList}) => {

    const [item, setItem] = useState('')
    const handleAddButtonClick = (e) => {
        e.preventDefault()
        if (item) {
            setItemList([...itemList, {id: crypto.randomUUID(), isSelected: false, value: item}])
            setItem('')
        }
    }

    return (
        <form className="new-item-form">
            <div className="input-section">
                <span>New item</span>
                <input
                    placeholder="enter..."
                    type="text"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                />
            </div>
            <button
                onClick={(event) => handleAddButtonClick(event)}
            >
                Add
            </button>
        </form>
    );
};

export default NewItemForm;