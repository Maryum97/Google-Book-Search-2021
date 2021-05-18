import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Books from './pages/Books';

function App () {
  return (
    <div>
      <Navbar />
      <br></br>
      <Books />
      <Footer />
      </div>
  )
}

export default App;