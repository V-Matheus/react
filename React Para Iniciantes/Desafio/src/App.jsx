import React from 'react';
import Header from './Header'
import Home from './Home';
import Produtos from './produtos';

const App = () => {
  const {pathname} = window.location;

  let Pagina;
if(pathname === '/produtos') {
  Pagina = Produtos
} else {
  Pagina = Home
}

  return (
    <>
     <Header />
     <Pagina />
    </>
  );
};

export default App;
