import React from 'react';
import styled from 'styled-components'

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`
const ProdutosContainer = styled.div`
  display: flex;
`
const Produto = styled.div`
  flex: 1;
`

const Preco = styled.p`
  background: ${({cor}) => cor};
  
`

const Comprar = styled.button`
  background: ${({ativo}) => ativo ? '#000' : '#fff'};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  color: ${({ativo}) => ativo ? '#fff' : '#000'};
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background: tomato;
  }

`

const App = () => {
 const [ativo, setAtivo] = React.useState(false);

  function handleCLick(){
    setAtivo(!ativo)
  }

  return (
    <div>
      <ProdutosContainer>
        <Comprar ativo={ativo} onClick={handleCLick}>Compre aqui</Comprar>
        <Produto>
      <Titulo>Notebook</Titulo>
      <Paragrafo>Este é um parágrafo</Paragrafo>
      <Preco cor="#53d956">R$ 2000</Preco>
      </Produto>
      <Produto>
      <Titulo>Smartphone</Titulo>
      <Paragrafo>Este é um parágrafo</Paragrafo>
      <Preco cor="#84e">R$ 2000</Preco>
      </Produto>
      </ProdutosContainer>
    </div>
  );
};

export default App;
