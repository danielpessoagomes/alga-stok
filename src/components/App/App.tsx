import React from 'react';
import Container from '../../shared/Container';
import Button from '../../shared/Button';
import Header from '../Header';
import './App.css';
import Input from '../../shared/Input';

function TestComponent() {
  return <img width="16" src="http://sistemas.tjam.jus.br/coij/wp-content/uploads/2018/04/1-foto.png" alt="coll"></img>
}

function App() {

  

  return (
    <div className="App">
      <Header title="AlgaStok" />
      <Container>
        <Button
          onClick={() => window.alert('Alert')}
          appendIcon={<TestComponent />}>
          Alert
        </Button>
        <Input 
          label="Street"
        />
      </Container>
    </div>
  );
}

export default App;
