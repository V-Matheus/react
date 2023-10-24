import React from 'react';
import Input from './Form/input';
import useForm from './Hooks/useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('enviou');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="nome" type="text" {...nome} />
      <Input
        label="CEP"
        id="CEP"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input label="Email" id="email" type="email" {...email} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
