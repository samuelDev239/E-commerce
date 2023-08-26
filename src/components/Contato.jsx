import React from 'react'
import styles from "./Contato.module.css";
import foto from '../img/foto.jpg'
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato}  animeLeft`}>
        <Head title="contato" description="entre"/>
        <img src={foto}></img>
        <div>
            <h1>Entre em contato</h1>
            <ul className={styles.dados}>
                <li>samuellucianodev@gmail.com</li>
                <li>(11) 98644-1238</li>
                <li>Rua moises de corena</li>
            </ul>
        </div>
        <h1>Contato</h1>
    </section>
  )
}

export default Contato