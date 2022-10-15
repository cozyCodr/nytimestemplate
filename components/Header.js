import React, {useState} from 'react'
import styles from '../styles/Home.module.css'

const Header = () => {

    return (
        <header className={styles.header}>
            <div id="top-header" className={styles.topHeader}>
            <div className={styles.humburgerSearch}>
                <button className={styles.humbergerMenu}>☰</button>
                <button className={styles.searchIcon}>🔎︎</button>
            </div>
            <div className={styles.subscribeLogin}>
                <button className={styles.headerButton}>subscribe</button>
                <button className={styles.headerButton}>login</button>
            </div>
            </div>
            
            <div id="middle-header" className={styles.middleHeader}>
            <div><p>15, October, 2022</p></div>
            <div>
                <h1 className={styles.title}>The Personal Times</h1>
            </div>
            <div><p >Saturday</p></div>
            </div>

        
        </header>
    )
}

export default Header
