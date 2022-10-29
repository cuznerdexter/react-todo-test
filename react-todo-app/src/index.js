import React from 'react';
import ReactDOM  from 'react-dom';
import TodoContainer from './components/TodoContainer';
import './styles/app.css';

ReactDOM.render(
    <React.StrictMode>
        <TodoContainer></TodoContainer>
    </React.StrictMode>
    , document.getElementById('root'));