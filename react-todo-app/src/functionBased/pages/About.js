import React from "react"
import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import SinglePage from './SingPage';

const About = (props) => {
    const { url, path } = props;
    console.log(props, url, path);
    
    return <div>
        <ul>
            <li>
                <Link to="about-app">About App</Link>
            </li>
            <li>
                <Link to="about-author">About Author</Link>
            </li>
        </ul>
        <Routes>
            <Route path=":slug" element={<SinglePage/>}/>
        </Routes>
    </div>
}
export default About