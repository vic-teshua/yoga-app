import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';



import './Navigation.css'
const Navigation = () => {
    return (
        <Router>
        <div>
        <ul className="nav">
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/design">Design</Link>
        </li>
        </ul>
        </div>
        </Router>
    )
}

export default Navigation
