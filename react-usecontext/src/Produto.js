import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  const global = React.useContext(GlobalContext)

  
 
    if (global.dados == null) return  <button onClick={() => global.limpaDados()}>Limpar</button>
    return (
    <div>Produtos: 
      {global.dados.map(dado => <ul key={dado.id}>
        <li key={dado.nome}>{dado.nome}</li>
        <li key={dado.preco}>R$ {dado.preco}</li>
        <img src={dado.fotos[0].src} width="100px" key={dado.fotos[0].src}/>
        <br/>
        </ul>)}
        <button onClick={() => global.limpaDados()}>Limpar</button>
    </div>
  )
}

export default Produto