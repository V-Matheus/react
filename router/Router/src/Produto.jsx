import React from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <Outlet />
      <nav>
        <NavLink to=''>Descrição</NavLink>
        <NavLink to='avaliacao'>Avaliação</NavLink>
        <NavLink to='customizado'>Customizado</NavLink>
      </nav>
      
    </div>
  );
};

export default Produto;
