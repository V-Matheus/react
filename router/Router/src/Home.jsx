import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      {/* <Head title='Home' description='Essa é a descrição da Home'/> */}
      <Helmet>
        <title>Dogs | Home</title>
        <meta name="description" content="Essa é a descrição da Home" />
        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        ></link> */}
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a home</p>
      <Link to="produto/notebook">Notebook</Link>{' '}
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  );
};

export default Home;
