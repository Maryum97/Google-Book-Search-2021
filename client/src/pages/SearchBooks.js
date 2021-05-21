import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import API from '../utils/API';

// import components
import Jumbotron from '../components/Jumbotron';
import FormBooks from '../components/FormBooks';

function SearchBooks() {
    // declare state variables
    const [book, setBook] = useState({});
    const [books, setBooks] = useState([]);
    // const [search, setSearch] = useState('');

    // when the component mounts, make call to get books
    useEffect(() => {
        searchBooks();
    }, []);

    // declare function to load books
    const searchBooks = (query) => {
        API.getBook(query)
        .then(books => {
            setBook(book);
            setBooks(books);
        })
        .catch(err => console.log('error message: ' + err));
    }
    
    return (
        <div>
            <Jumbotron
                    heading='Google Books Search'
                    text='Search for your favourite books right here on this page :)'
                />
                <br></br>
            <Container>
                <FormBooks />
            </Container>
        </div>
    )
}

export default SearchBooks;