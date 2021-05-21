import React from 'react';

import Jumbotron from '../components/Jumbotron';

import { Container, Row, Col } from 'reactstrap';

function SearchBooks() {
    return (
        <div>
            <Jumbotron
                    heading='Google Books Search'
                    text='Search your books here'
                />
            <Container>
                Books here:)
            </Container>
        </div>
    )
}

export default SearchBooks;