import React from 'react';
import styles from '../styles/Components.module.css';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <a href="/" className={styles.active}>Home</a>
            <div className={styles.titulo}> <h1> Banco de descrições de animais </h1> </div>
        </div>
    );
}

export default Navbar;