import React from 'react'
import styles from '../styles/Home.module.css'

const Headline = () => {
    return (
        <section id="headline" className={styles.sectionSplit}>
            <div className={styles.articleContainer}>
                <article>
                    <h4 className={styles.articleTitle}>The U.S. Is Working to Supply Ukraine With Russian Arms</h4>
                    <ul>
                    <li className={styles.articleText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consectetur praesentium sint molestiae nam laborum impedit nostrum pariatur minima adipisci.</li>
                    <li className={styles.articleText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat non unde ea odit illum saepe ducimus soluta impedit quo adipisci!</li>
                    </ul>
                </article>
                <article className={styles.secondaryArticle}>
                    <h4 className={styles.secondaryTitle}>Ukraine's allies are gathering at NATO headquarters to discuss sending more weapons.</h4>
                </article>
                <article className={styles.secondaryArticle}>
                    <h4 className={styles.secondaryTitle}>President Biden said Vladimir Putin miscalculated badly about the reaction to Russia’s invasion.</h4>
                </article>
                </div>
                <div className={styles.articleImg}>              
                <figure>
                    <img style={{width: "100%", height: "auto"}} src="https://via.placeholder.com/600x400" />
                    <figcaption className={styles.gettyText}>A Ukrainian soldier with a Soviet-style assault rifle in Irpin in March.</figcaption>
                </figure>
            </div>
        </section>
    )
}

export default Headline