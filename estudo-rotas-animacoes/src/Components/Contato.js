import React from 'react'
import styles from './Contato.module.css'
import Head from './Head'
import foto from '../img/maquina.jpeg'

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Germanno | Contato"/>
        <img src={foto} />
        <div>
        <h3>Entre em contato</h3>
        <ul className={styles.dados}>
         <li>germanno.falcao@gmail.com</li>
         <li>(19) 9.8117-9406</li>
          <li>Rua dos Caiabís, 191, Campinas - SP</li>
        </ul>
        </div>
    </section>
  )
}

export default Contato