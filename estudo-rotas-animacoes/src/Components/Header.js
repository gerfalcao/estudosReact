import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
  return (
    <nav className={styles.header}>
        <Link to="/"><button>Produtos</button></Link>
        <Link to="contato"><button>Contato</button></Link>
    </nav>
  )
}

export default Header