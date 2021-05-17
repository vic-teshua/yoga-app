import React from 'react'
import video1 from '../../../../videos/VicClub.mp4';
import './Logo.css'
import {Link} from 'react-router-dom'
const Logo = () => {
    return (
        <div className="container">
        <video autoPlay src={video1} type="video/mp4" muted></video>
        <h3 className="intro">Design Your Daily Yoga Practice</h3>
        <Link to='/design'>
        <button className="btn"><span class="noselect">Start Now </span>
        </button>
        </Link>
        </div>
    )
}

export default Logo
