import React from 'react';
import { Jumbotron } from 'reactstrap';

function JumbotronBooks(props) {
    return (
        <div>
            <Jumbotron>
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </Jumbotron>
        </div>
    )
}

export default JumbotronBooks;