import React from 'react';
import './style.css';

function Jumbotron(props) {
    return (
        <div className='jumbotron mt-4'>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Jumbotron;