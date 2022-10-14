import React from 'react'
import styles from '../styles/Home.module.css'

const SecondSection = () => {
    return (
        <section>
            <div className={styles.secondSection}>
                <article className={styles.secondSectionArticleOne}>
                    <h4>Article Title</h4>
                    <ul>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consectetur praesentium sint molestiae nam laborum impedit nostrum pariatur minima adipisci.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat non unde ea odit illum saepe ducimus soluta impedit quo adipisci!</li>
                    </ul>
                </article>
                <div className={styles.secondSectionArticleImage}>
                    <figure>
                        <img style={{width: "100%", height: "auto"}} src="https://via.placeholder.com/330x220" />
                        <figcaption className={styles.gettyText}>Lorem ipsum dolor Expedita, corporis.</figcaption>
                    </figure>
                </div>  
                <article className={styles.secondSectionArticleTwo}>
                    <h4>Article title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore laborum mollitia amet totam sint exercitationem unde veritatis aperiam excepturi, voluptate incidunt autem eligendi voluptatum, facere est. Provident suscipit incidunt possimus?</p>
                </article>
            </div>

        </section>
    )
}

export default SecondSection