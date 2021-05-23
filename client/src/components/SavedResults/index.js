import React, { useEffect, useState } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import API from '../../utils/API';

function SavedResults() {
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

        // define object that holds book properties
        const bookToSave = {
            _id: book.id,
            title: book.title,
            authors: book.authors,
            description: book.description,
            link: book.link
        }

        // if book is already in the db, delete it on clicking 'save' button
        if (savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
                .then(deletedBook => {
                    savedBooks.filter(book => book._id !== deletedBook._id)
                })
                .catch(err => console.log('error message: ' + err));
        }

        // otherwise, save it to db
        else {
        API.saveBook(bookToSave)
            .then(savedBook => {
                setSavedBooks(savedBooks.concat([savedBook]))
            })
            .catch(err => console.log('error message: ' + err));
        }
    }

    return (
        <div>
            {!savedBooks ? (
                <h1 className="text-center">No Results to Display</h1>
            ) : (
                <div>
                    {savedBooks.map(result => (
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">{result.title}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">By {result.authors}</CardSubtitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted"><a href={result.previewLink} target='_blank' rel="noreferrer">Link Here</a></CardSubtitle>
                                <CardText>{result.description}</CardText>
                                <Button
                                    onClick={() => handleSave(result)} 
                                >
                                    Unsave
                                </Button>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SavedResults;