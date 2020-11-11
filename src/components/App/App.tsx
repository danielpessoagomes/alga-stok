import React from 'react';
import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table';
import Products from '../../shared/Table/Table.mockdata';
import Header from '../Header';
import './App.css';

const headers: TableHeader[] = [
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Availble Stock', right: true }
]

function App() {
  return (
    <div className="App">
      <Header title="AlgaStok" />
      <Container>
        <Table 
          headers={headers}
          data={Products}
          />
      </Container>
    </div>
  );
}

export default App;
