import React from 'react'
// Styling
import '../styles/components.css'

export default function Card(props) {

    // Set position and ID
    const pos = {
        gridColumn: props.no[1],
        gridRow: props.no[0]
    }

    const id = "p" + props.no[0].toString() + props.no[1].toString();

    return (
        <a href={props.url} target="_blank" rel="noreferrer" 
        className="card" style={pos} id={id} 
        data-aos="zoom-in">
            <img src={props.img} alt="Project preview" />
            <div className="project-desc">
                <h3 id="title">{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </a>
    )

    
}

