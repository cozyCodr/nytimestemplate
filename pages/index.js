import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Header, Headline, Navbar} from '../components/components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NyTimes Template</title>
        <meta name="description" content="nytimes template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />

      <main className={styles.mainContainer}>
        <div className={styles.mainContent}>
          <Headline />
          <section>
            <div className="articles">
              <article>
                <h4>Article Title</h4>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consectetur praesentium sint molestiae nam laborum impedit nostrum pariatur minima adipisci.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat non unde ea odit illum saepe ducimus soluta impedit quo adipisci!</li>
                </ul>
              </article>
              <div className="article-img">
                <img src="#"/>
              </div>  
              <article>
                <h4>Article title</h4>
              </article>
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
        </div>
        <aside className={styles.asideComponent}>
          <article className="pic-top-article">
            <figure>
                <img style={{width: "100%", height: "auto"}} src="https://via.placeholder.com/330x220" />
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
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
