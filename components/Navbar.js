import React from 'react'
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
        <div className="sticky top-0 bg-white -mx-5">
            <nav id="bottomheader" className={styles.bottomHeader}>
                <ul>
                <li>Home</li>
                <li>Health</li>
                <li>Sports</li>
                <li>Arts</li>
                <li>Books</li>
                <li>Travel</li>
                <li>Magazine</li>
                <li>T magazine</li>
                <li>Real Estate</li>
                <li>Video</li>
                <li>Science</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar