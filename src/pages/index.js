import React from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

function Users({ users }) {
  return (

    <div className={styles.body}>
      <Navbar />
      <div className={styles.principal}>
      <div className={styles.segundaria}>
      <p className={styles.pa1}>Bem-vindo ao Banco de descrições de animais, uma plataforma dedicada a proporcionar uma experiência inclusiva e enriquecedora para pessoas com deficiência visual. Nosso compromisso é tornar o mundo animal acessível a todos, proporcionando descrições detalhadas que permitem aos usuários construir imagens mentais ricas e vívidas. <br/>Explore a diversidade incrível do reino animal conosco. De majestosos elefantes a pequenos e curiosos esquilos, cada descrição é elaborada com cuidado para transmitir não apenas a aparência física, mas também os comportamentos característicos e os ambientes naturais dos animais.</p>
        </div>
        <div className={styles.terciaria}>
          <div className={styles.bnt}><a href="/lista">  Lista de animais </a></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const getStaticProps = (async (context) => {
  const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
  const repo = await res.json()
  const users = await repo;
  return {
    props: { users }
  }
})

export default Users;