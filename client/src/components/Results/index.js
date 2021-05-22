import React, { useEffect, useState } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import API from '../../utils/API';

function Results(props) {
    // declare state variables
    const [savedBooks, setSavedBooks] = useState([]);

    // when the component mounts, make call to get saved books
    useEffect(() => {
        getSavedBooks();
    });

    // declare function to get saved books
    const getSavedBooks = () => {
        API.savedBooks()
            .then(books => {
                setSavedBooks(books);
            })
            .catch(err => console.log('error message: ' + err));
    }

    // declare function to handle the event of saving a book
    function handleSave(book) {
        if (savedBooks.map(book => book.title).includes(book.title)) {
            API.deleteBook(book.title)
                .then(deletedBook => {
                    savedBooks.filter(book => book.title !== deletedBook.title)
                })
                .catch(err => console.log('error message: ' + err));
        }

        else {
            API.saveBook(book)
                .then(savedBook => {
                    setSavedBooks(savedBooks.concat([savedBook]))
                })
                .catch(err => console.log('error message: ' + err));
        }
    }

    return (
        <div>
            {props.books.length}
            {/* {!savedBooks ? (
                <h1 className="text-center">No Results to Display</h1>
            ) : (
                <div>
                    {savedBooks.map(result => (
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">{result.title}, by {result.author}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{result.date}</CardSubtitle>
                                <CardText>{result.synopsis}</CardText>
                                <Button
                                    onClick={handleSave}
                                >
                                    Save
                                </Button>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            )} */}
        </div>
    )
}

export default Results;