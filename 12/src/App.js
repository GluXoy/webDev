import './App.css';
import ContactCard from "./components/ContactCard";
import {useEffect, useState} from "react";

function App() {

    const [results, setResults] = useState([])

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10")
            .then(response => response.json())
            .then(data => setResults(data.results))
    }, []);

    return (
        <div className="App">
            {results.map(result => (
                <ContactCard
                    key={result.email}
                    name={result.name.first}
                    age={result.dob.age}
                    avatarUrl={result.picture.large}
                    email={result.email}
                />
            ))}
        </div>
    );
}

export default App;
