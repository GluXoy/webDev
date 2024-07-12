import './styles/App.css';
import RegisterForm from "./components/RegisterForm";
import {useState} from "react";

function App() {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    return (
        <div className="App">
            <RegisterForm values={values} setValues={setValues}/>
        </div>
    );
}

export default App;
