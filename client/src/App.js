import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SavedBooks from './pages/SavedBooks';
import SearchBooks from './pages/SearchBooks';
import NoMatch from './pages/NoMatch';

import NavbarBooks from './components/NavbarBooks';
import Footer from './components/Footer';

function App () {
  return (
    <Router>
      <div>
        <NavbarBooks />
        <Switch>

          <Route exact path='/searchbooks' component={SearchBooks}></Route>

          <Route exact path='/savedbooks' conponent={SavedBooks}></Route>

          <Route>
            <NoMatch />
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;