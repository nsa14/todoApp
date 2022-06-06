import React from 'react'
import './App.css';
import Header from "./components/template/Header";
import NavTab from "./components/template/NavTab";
import ShowTodoList from "./components/template/ShowTodoList";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="mt-3 d-flex flex-column align-items-center">
                <NavTab/>
                <ShowTodoList/>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default App;
