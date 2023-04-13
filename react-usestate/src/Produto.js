import React from 'react'

const Produto = ({dados}) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo}></img>
      <p>R$ {dados.preco}</p>
      <p>{dados.descricao}</p>
    </div>
  )
}

export default Produto