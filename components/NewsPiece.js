import React from 'react'
import styles from '../styles/Home.module.css'

const NewsPiece = (props) => {
    return (
        <section className={styles.newsPiece}>
            <div className={styles.newsPieceArticle}>
                <article>
                <h4>{props.title}</h4>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consectetur praesentium sint molestiae nam laborum impedit nostrum pariatur minima adipisci.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat non unde ea odit illum saepe ducimus soluta impedit quo adipisci!</li>
                </ul>
                </article>
            </div>
            <div className={styles.newsPieceImage}>
                <img style={{width: "100%", height: "auto"}} src="https://via.placeholder.com/600x400" />
            </div>
        </section>
    )
}

export default NewsPiece