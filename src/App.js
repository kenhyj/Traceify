import React from 'react';
import './App.css';
import Home from "./pages/home/home";
import Header from "./components/header/header";
import PagesBar from "./components/header/PagesBar"

function App() {
    return (
        <div>
            <Header  title="Covid 19 - Traceify"/>
            <PagesBar/>
            <Home/>
        </div>
    );
}

export default App;