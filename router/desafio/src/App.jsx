import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Produtos from './Components/Produtos';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Produtos />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
