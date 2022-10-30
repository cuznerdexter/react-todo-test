import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TodoContainer from './functionBased/components/TodoContainer';
import Navbar from "./functionBased/components/Navbar"
import './styles/app.css';
import About from "./functionBased/pages/About"
import NotMatch from "./functionBased/pages/NotMatch"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Navbar></Navbar>
            <Routes>
                <Route exact path="/" element={<TodoContainer />} />
                <Route path="about/*" element={<About />}/>
                <Route path="*" element={<NotMatch />} />
            </Routes>
        </Router>
    </React.StrictMode>
    , document.getElementById('root'));