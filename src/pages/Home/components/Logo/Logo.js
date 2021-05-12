import React from 'react'
import video1 from '../../../../videos/VicClub.mp4';
import './Logo.css'
const Logo = () => {
    return (
        <div className="container">
        <video autoPlay src={video1} type="video/mp4" muted></video>
        <h3 className="intro">Design Your Daily Yoga Practice</h3>
        <button className="button">Start now</button>
        </div>
    )
}

export default Logo
