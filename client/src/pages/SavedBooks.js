import React from 'react';

import Jumbotron from '../components/Jumbotron';

import { Container, Row, Col } from 'reactstrap';

function SavedBooks() {
    return (
        <div>
            <Jumbotron
                heading='Google Books Search'
                text='View your saved books here'
            />
            <Container>
                Saved Books Here!
            </Container>
        </div>
    )
}

export default SavedBooks;