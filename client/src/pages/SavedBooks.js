import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import API from '../utils/API';

// import components
import Jumbotron from '../components/Jumbotron';

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