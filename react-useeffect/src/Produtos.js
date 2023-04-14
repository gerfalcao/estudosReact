import React from 'react'

const Produtos = ({produto}) => {
  const [dados, setDados] = React.useState(null) 
  
  React.useEffect(() => {
    if(produto !== null){
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
      .then((res) => res.json())
      .then((res) => setDados(res))
    }

  }, [produto])
  
  if (dados === null) return null;
  return (
    <div>
        <h1>{dados.nome}</h1>
        <p>R$ {dados.preco}</p>
        <img src={dados.fotos[0].src} width="300px"></img>
    </div>
  )
}

export default Produtos