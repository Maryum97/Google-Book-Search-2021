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
    const [search, setSearch] = useState('');

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

    // declare function to get search results onto page
    function getSearchResluts() {
        
    }

    // declare function for event of change in form input
    function handleInputChange (e) {
        setSearch(e.target.value);
    }

    // declare function for event of clicking on submit button
    function handleFormSubmit (e) {
        e.preventDefault();
        getSearchResluts(search);
    }

    // clear search
    function clearSearch(e) {
        e.preventDefault();
        setSearch("");
        searchBooks();
    }

    return (
        <div>
            <Jumbotron
                    heading='Google Books Search'
                    text='Search for your favourite books right here on this page :)'
                />
                <br></br>
            <Container>
                <FormBooks 
                    value={search}
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                    clearSearch={clearSearch}
                />
            </Container>
        </div>
    )
}

export default SearchBooks;