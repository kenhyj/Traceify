import React from 'react';
import './App.css';
import Home from "./pages/home/home";
import Header from "./components/header/header";
import PagesBar from "./components/header/PagesBar"
import ThankPage from './pages/thankyou/ThankPage';
import SymptomChecker from './pages/symptom-checker/symptom-checker';
import FinancialHelp from './pages/financial-help/financial-help';
import HaveI from './pages/have-i-been-exposed/have-been-exposed';
import Reopen from './pages/reopening-date/reopening-date';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import zIndex from '@material-ui/core/styles/zIndex';

function App() {
    return (
        <Router>
            <div style={{ position: 'fixed', width: '100%', top: '0', height: '100px',zIndex : '1'}}>
                <Header title="Covid 19 - Traceify" />
                <PagesBar />
            </div>
            <div style={{paddingTop: '170px', display: 'inline-block',zIndex : '2'}}>
                
                    <Route path='/' exact component={Home} />
                    <Route path='/home' exact component={Home} />
                    <Route path='/have-i-been-exposed' component={HaveI} />
                    <Route path='/financial-help' component={FinancialHelp} />
                    <Route path='/symptom-checker' component={SymptomChecker} />
                    <Route path='/reopen' component={Reopen} />

            </div>

        </Router>
    );
}

export default App;
