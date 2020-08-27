import React from 'react';
import logo from './logo.svg';
import './App.css';
import Shop from './Components/Shop/Shop';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <header>
       <Header></Header>
        <Shop></Shop>
      </header>
    </div>
  );
};

export default App;
