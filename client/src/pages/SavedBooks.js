import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import API from '../utils/API';

// import components
import Jumbotron from '../components/Jumbotron';
import SavedResults from '../components/SavedResults';

function SavedBooks(props) {
    console.log(props);
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        storeBooks();
    }, []);

    function storeBooks () {
        API.savedBooks()
            .then(savedBooks => {
                setSavedBooks(savedBooks);
                console.log(savedBooks);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Jumbotron
                heading='Google Books Search'
                text='View your saved books here'
            />
            <br></br>
            <Container>
                <h2>Saved Books</h2>
                <SavedResults books={props.savedBooks} />
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}
export default SavedBooks;