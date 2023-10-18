import React from 'react';
import Produto from './Produto';

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }),
    [produto];

  async function hadleClick(event) {
    const produtoClicado = event.target.innerText;
    setProduto(produtoClicado);
    setCarregando(true);

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button style={{ margin: '.5rem' }} onClick={hadleClick}>
        NoteBook
      </button>
      <button style={{ margin: '.5rem' }} onClick={hadleClick}>
        Smartphone
      </button>
      <button style={{ margin: '.5rem' }} onClick={hadleClick}>
        Tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
};

export default App;
