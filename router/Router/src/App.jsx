import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import Footer from './Footer';
import NaoEncontrado from './NaoEncontrado';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
