import React, { Component } from 'react';
import { Container } from 'reactstrap';
import API from '../utils/API';

// import components
import Jumbotron from '../components/Jumbotron';
import Results from '../components/Results';

class SavedBooks extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
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
                    <Results books={this.state.savedBooks} />
                </Container>
            </div>
        )
    }
}

export default SavedBooks;