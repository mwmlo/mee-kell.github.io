import React, { useRef, useEffect } from 'react';
import anime from "animejs";
// Styling
import '../styles/landing.css';
// Resources
import {ReactComponent as NameSVG} from '../resources/Michelle.svg';
import headshot from '../resources/headshot.png';

export default function Landing() {

    // Animation references
    const greetingAniRef = useRef(null);
    const headshotAniRef = useRef(null);
    const nameAniRef = useRef(null);
    const descAniRef = useRef(null);

    // Animation parameters
    useEffect(() => {
        // Fade in
        greetingAniRef.current = anime({
            targets: ".greeting",
            delay: 3000,
            duration: 6000,
            opacity: [0, 1]
        });
        // Extrude photo
        headshotAniRef.current = anime({
            targets: "#headshot",
            delay: 1000,
            duration: 4000,
            scale: [0, 1],
            boxShadow: "12px 12px 16px 0 rgb(0 0 0 / 25%), -8px -8px 12px 0 rgb(255 255 255 / 50%)",
            easing: "easeOutCubic"
        });
        // Trace name
        nameAniRef.current = anime({
            targets: ".name path",
            strokeDashoffset: [0, anime.setDashoffset],
            easing: 'easeInOutSine',
            duration: 4000
        });
        // Fade in
        descAniRef.current = anime({
            targets: "#desc",
            delay: 6000,
            duration: 6000,
            opacity: [0, 1]
        });
    }, []);

    return (
        <div className="landing">
            <div className="gradient-top"></div>
            <img src={headshot} alt="profile" id="headshot" />

            <h1 className="greeting">Hi, I'm</h1>
            <div className="name">
                <NameSVG />
            </div>
            <p id="desc">
                I'm a first year student at Imperial College London, studying Computing (Artificial Intelligence and Machine Learning).
            </p>
            <p id="point-down">👇</p>
        </div>
    )
}
