import React from 'react'
import styles from '../styles/Home.module.css'


const Header = () => {
    return (
        <header className={styles.header}>
            <div id="top-header" className={styles.topHeader}>
            <div className={styles.humburgerSearch}>
                <p>humburger</p>
                <p>search</p>
            </div>
            <div className={styles.subscribeLogin}>
                <p>subscribe</p>
                <p>login</p>
            </div>
            </div>
            
            <div id="middle-header" className={styles.middleHeader}>
            <div><p>date</p></div>
            <div>
                <h1 className={styles.title}>Title</h1>
            </div>
            <div><p >weather</p></div>
            </div>

        
        </header>
    )
}

export default Header
