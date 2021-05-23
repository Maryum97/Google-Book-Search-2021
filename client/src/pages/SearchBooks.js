import React, { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';
import API from '../utils/API';

// import components
import Jumbotron from '../components/Jumbotron';
import FormBooks from '../components/FormBooks';
import SearchResults from '../components/SearchResults';

function SearchBooks() {
    // declare state variables
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');

    // when the component mounts, make call to get books
    useEffect(() => {
        searchBooks();
    }, []);

    // declare function to load books
    const searchBooks = (query) => {
        console.log(query);
        API.getBooks(query)
            .then(res => {
                let results = res.data.items;
                console.log(res.data.items);

                results = results.map(result => {
                    result = {
                        _id: result.id,
                        title: result.volumeInfo.title,
                        authors: result.volumeInfo.authors,
                        description: result.volumeInfo.description,
                        link: result.volumeInfo.previewLink
                    }
                    return result;
                })
                console.log(results);
                setBooks(res.data.items);
                console.log(res.data.items);
            })
            .catch(err => console.log('error message: ' + err));
    }

    // declare function for event of change in form input
    function handleInputChange(e) {
        setSearch(e.target.value);
    }

    // declare function for event of clicking on submit button
    function handleFormSubmit(e) {
        e.preventDefault();
        searchBooks(search);
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
                />
                <br></br>
                <Row>
                    <h2>Results</h2>
                    <SearchResults
                        books={books}
                    />
                </Row>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default SearchBooks;