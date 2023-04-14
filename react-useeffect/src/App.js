import React from 'react';
import Produtos from './Produtos';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo



const App = () => {
 
  const [produto, setProduto] = React.useState(null);
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeOutRef = React.useRef();

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('Produto')
    if(produtoLocal !== null) {
      setProduto(produtoLocal)
    }
  }, [])

  React.useEffect(() => {
    if(produto !== null)
    window.localStorage.setItem('Produto', produto)
  }, [produto]);


  function handleClick(event){
    const produto = event.target.innerText
    setProduto(produto)
  }

  function handleClick2(event){
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho');
    clearTimeout(timeOutRef.current)
    timeOutRef.current = setTimeout(() => {
      setNotificacao(null)
    }, 2000)
  }

  return (
  <div>
    <h2>Ver produto:</h2>
    <button style={{ margin: '.5rem'}}onClick={handleClick}>notebook</button>
    <button style={{ margin: '.5rem'}}onClick={handleClick}>smartphone</button>
    
    {produto && <Produtos produto={produto} />}
    <p>{notificacao}</p>
    <button onClick={handleClick2}>Adicionar Carrinho</button>
    <p>Itens no carrinho: {carrinho}</p>
    </div>
    );
};

export default App;
