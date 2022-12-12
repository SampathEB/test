import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './product/ProductList';
import ProductForms from './product/ProductForms';

function App() {
  return (
    <div className="App">
      <ProductList />
      <ProductForms />
    </div>
  );
}

export default App;
