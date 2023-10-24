import React from 'react';
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/esm/CardBody';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const App = () => {
  return (
    <Card bg='dark' text='white' className='m-5' style={{maxWidth: '18rem'}}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500</Card.Title>
        <Card.Text>Esse é um Notebook</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default App;
