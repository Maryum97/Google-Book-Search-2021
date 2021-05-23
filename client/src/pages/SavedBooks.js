import React, { Component } from 'react';
import { Container } from 'reactstrap';
import API from '../utils/API';

// import components
import Jumbotron from '../components/Jumbotron';
import SavedResults from '../components/SavedResults';

class SavedBooks extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => {
                this.setState({ savedBooks: savedBooks });
                console.log(savedBooks);
            })
            .catch(err => console.error(err));
    }

    render() {

        return (
            <div>
                <Jumbotron
                    heading='Google Books Search'
                    text='View your saved books here'
                />
                <br></br>
                <Container>
                    <h2>Saved Books</h2>
                    <SavedResults books={this.state.savedBooks} />
                </Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default SavedBooks;