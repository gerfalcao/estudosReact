import React from 'react'
import { useParams } from 'react-router-dom';
import styles from './Produto.module.css'

const Produto = () => {
  const params = useParams();
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
    .then((res) => res.json())
    .then((json) => setProduto(json))
  })
  
  if (produto == null) return null;
  return (
    <div className={styles.container}>
      <div>
      {produto.fotos.map(foto => (
        <img className={styles.img} key={foto.titulo} src={foto.src}></img>
      ))}
      </div>
      <div>
      <h3>{produto.nome}</h3>
      <p className={styles.preco}>R$ {produto.preco},00</p>
      <p className={styles.descricao}>{produto.descricao}</p>
      </div>
      </div>
  )
}

export default Produto