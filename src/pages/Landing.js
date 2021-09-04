import React from 'react'
// Styling
import '../styles/landing.css';
// Resources
import michelle from '../resources/Michelle.svg'
import headshot from '../resources/headshot.png'

export default function Landing() {
    return (
        <div className="landing">

            <div className="gradient-top"></div>

            <img src={headshot} alt="profile" id="headshot"/>
        
            <h1>Hi, I'm</h1>
            <img src={michelle} alt="name-svg" id="name"/>
            <p id="desc">I'm a first year student at Imperial College London, studying Computing (Artificial Intelligence and Machine Learning).</p>

            <p id="point-down">👇</p>
            
        </div>
    )
}
