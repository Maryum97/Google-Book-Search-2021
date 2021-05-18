import React from 'react';
import { Button } from 'reactstrap';
import Navbar from './components/Navbar';

function App () {
  return (
    <div>
      <Navbar />
      <br></br>
      <Button color='danger'>Danger!</Button>
      </div>
  )
}

export default App;