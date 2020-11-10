import React from 'react';
import Container from '../../shared/Container';
import Header from '../Header';
import './App.css';


function App() {

  

  return (
    <div className="App">
      <Header title="AlgaStok" />
      <Container>
        <ul>
      {
        ['Daniel', 'Heitor', 'Jessica', 'Daniel'].map((name, index)=> {
          return <li key={index}>{name}</li>
        })
      }   
        </ul>
      </Container>
    </div>
  );
}

export default App;
