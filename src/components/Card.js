import React, { useState } from 'react'
// Styling
import '../styles/components.css'

export default function Card(props) {

    const [isOpen, setOpen] = useState(false);
    const pos = {
        gridColumn: props.no[1],
        gridRow: props.no[0]
    }

    // Expand card to view full description
    if (isOpen) {
        return (
            <div className="card" id="open-card" 
            onClick={() => setOpen(!isOpen)} style={pos}>
                <img src={props.img} alt="Project preview"/>
                <div id="project-desc">
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                    <p>Link: {props.url}</p>
                </div>
            </div>
        )
    } 
    // Close card to fit into grid
    else {
        return (
            <div className="card" id="closed-card" 
            onClick={() => setOpen(!isOpen)} style={pos}>
                <img src={props.img} alt={props.alt}/>
                <h3>{props.title}</h3>
            </div>
        )
    }

    
}

