import React from 'react';

import JumbotronBooks from '../components/JumbotronBooks';

function SearchBooks() {
    return (
        <div>
            <JumbotronBooks 
                heading='Google Books Search'
                text='Search your books here'
            />
        </div>
    )
}

export default SearchBooks;