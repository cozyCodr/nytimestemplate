import Head from 'next/head'
import Image from 'next/Image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NyTimes Template</title>
        <meta name="description" content="nytimes template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          <div><p>weather</p></div>
        </div>

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
      </header>
      <body className={styles.mainContainer}>
        <main className={styles.mainContent}>
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
                <img src="https://via.placeholder.com/600x400" />
                <figcaption className={styles.gettyText}>A Ukrainian soldier with a Soviet-style assault rifle in Irpin in March.</figcaption>
              </figure>
            </div>
            
          </section>
          <section>
            <div className="articles">
              <article>
                <h4>Article Title</h4>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consectetur praesentium sint molestiae nam laborum impedit nostrum pariatur minima adipisci.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat non unde ea odit illum saepe ducimus soluta impedit quo adipisci!</li>
                </ul>
              </article>
              <article>
                <h4>Article title</h4>
              </article>
            </div>
            <div className="article-img">
              <img src="#"/>
            </div>
          </section>
          <section>
            <div className="articles">
              <article>
                <h4>Article Title</h4>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consectetur praesentium sint molestiae nam laborum impedit nostrum pariatur minima adipisci.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat non unde ea odit illum saepe ducimus soluta impedit quo adipisci!</li>
                </ul>
              </article>
              <article>
                <h4>Article title</h4>
              </article>
            </div>
            <div className="article-img">
              <img src="#"/>
            </div>
          </section>
          <section>
            <div className="articles">
              <article>
                <h4>Article Title</h4>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consectetur praesentium sint molestiae nam laborum impedit nostrum pariatur minima adipisci.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat non unde ea odit illum saepe ducimus soluta impedit quo adipisci!</li>
                </ul>
              </article>
              <article>
                <h4>Article title</h4>
              </article>
            </div>
            <div className="article-img">
              <img src="#"/>
            </div>
          </section>
        </main>
        <aside className={styles.asideComponent}>
          <article className="pic-top-article">
            <figure>
                <img src="https://via.placeholder.com/330x220" />
                <figcaption className={styles.gettyText}>Lorem Ipsum/Getty Images</figcaption>
              </figure>
            <h4 className={styles.asideHeading}>If You Want These Birkenstocks, You May Have to Pay Up</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam molestiae blanditiis facere eum similique fugit voluptatum voluptas eligendi.</p>
            <p>6 MIN READ</p>
          </article>
          <div className="small-side-by-side">
            <article>
              <img src="#"/>
              <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quos?</h4>
              <p>5 MIN READ</p>
            </article>
            <article>
              <img src="#"/>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quidem?</h4>
              <p>5 MIN READ</p>
            </article>
          </div>
          <article>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, a doloremque! Dignissimos.</h4>
            <img src="#" />
          </article>
          <article>
            <p>Author 2</p>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>6 MIN READ</p>
          </article>
          <article>
            <p>Author 2</p>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>5 MIN READ</p>
          </article>
          <article>
            <p>Author 3</p>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>3 MIN READ</p>
          </article>
          <article>
            <p>Author 4</p>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>7 MIN READ</p>
          </article>
        </aside>
      </body>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
