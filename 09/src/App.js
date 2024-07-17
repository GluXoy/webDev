import './styles/App.css';
import {useEffect, useState} from "react";
import NewItemForm from "./components/NewItemForm";
import ItemList from "./components/ItemList";

function App() {

    const [itemList, setItemList] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if (!localValue) return [];

        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(itemList))
    }, [itemList]);

    return (
        <div className="App">
            <NewItemForm itemList={itemList} setItemList={setItemList}/>
            <ItemList itemList={itemList} setItemList={setItemList}/>
        </div>
    );
}

export default App;
