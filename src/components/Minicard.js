import React from 'react'
// Styling
import '../styles/components.css'

export default function Minicard(props) {
    return (
        <a href={props.url} className="minicard" >
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </a>
    )
}
