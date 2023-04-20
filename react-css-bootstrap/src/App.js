import React from 'react';
import Card from 'react-bootstrap/Card'

const App = () => {


  return (<div>
    <div className='card bg-dark text-white m-5' style={{maxWidth: '18rem'}}>
      <div className='card-header'>Notebook</div>
      <div className="card-body">
        <h5 className='card-title'>R$ 2500,00</h5>
        <p className="card-text">Esse é um notebook com 1Tb e 16 Gb RAM.</p>
      </div>
    </div>
    <Card bg="dark" text="white" className='m-5' style={{maxWidth: '18rem'}}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500,00</Card.Title>
        <Card.Text>Esse é um notebook com 1Tb e 16 Gb RAM.</Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

export default App;
