import React from 'react'
import { useParams } from 'react-router-dom';
import styles from './Produto.module.css'
import Head from './Head';

const Produto = () => {
  const params = useParams();
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
       
    async function fetchProduto(url) {
      try{
        setLoading(true) 
      const response = await fetch(url);
      const json = await response.json();
      setProduto(json)
      } catch(erro) {
        setError('Um erro aconteceu')
      } finally {
        setLoading(false)
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
    
  },[])
  
  if (loading) return <div className={styles.loading}></div>;
  if(error) return <p>{error}</p>
  if (produto == null) return null;
  
  return (
    <div className={styles.container + ' animeLeft'}>
      <Head title={`Germanno | ${produto.nome}`}/>
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