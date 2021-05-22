import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import API from '../utils/API';

// import components
import Jumbotron from '../components/Jumbotron';
import Results from '../components/Results';

function SavedBooks() {
    // declare state variables
    // const [savedBooks, setSavedBooks] = useState([]);

    // when the component mounts, make call to get saved books
    // useEffect(() => {
    //     renderSavedBooks();
    // });

    // declare function to render saved books
    // function renderSavedBooks() {
    //     API.savedBooks()
    //         .then(savedBooks => {
    //             setSavedBooks(savedBooks)
    //         })
    //         .catch(err => console.log('error message: ' + err));
    // }

    return (
        <div>
            <Jumbotron
                heading='Google Books Search'
                text='View your saved books here'
            />
            <br></br>
            <Container>
                <h2>Saved Books</h2>
                {/* <Results books={savedBooks}/> */}
            </Container>
        </div>
    )
}

export default SavedBooks;