import React from 'react'
import styles from './Produtos.module.css'
import {Link, Routes, Route, useNavigate} from 'react-router-dom'
import Head from './Head';

const Produtos = () => {
    const navigate = useNavigate();
    const [dados, setDados] = React.useState(null)
  
    React.useEffect(() => {
        fetch(`https://ranekapi.origamid.dev/json/api/produto`)
        .then((res) => res.json())
        .then((json) => setDados(json))
    }, [])
 
      if (dados === null) return null;
 return (
    <div className={styles.display + ' animeLeft'}>
        <Head title="Germanno | Produtos"/>
        {dados.map(dado => (
                <div className={styles.card}>
                <img onClick={() => navigate(`/produto/${dado.id}`)} src={dado.fotos[0].src} alt={dado.fotos[0].titulo}></img>
                
                <h3>{dado.nome}</h3>
                </div>
        ))}
    </div>
  )
}

export default Produtos
