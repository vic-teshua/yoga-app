import React from 'react';
import './Logo.css';
import {Link} from 'react-router-dom';
import logo from '../Image/logo.png'
const Logo = () => {
    return (
        <div className="containers">
        <img src={logo} alt='Logo' className='logo'/>
        <h3 className="intro">Design Your Daily Yoga Practice</h3>
        <Link to='/login'>
        <button className="btn btn2"><span class="noselect">Start Now </span>
        </button>
        </Link>
        </div>
    )
}

export default Logo
