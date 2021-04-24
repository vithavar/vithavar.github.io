import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import Navbar from '../../components/Navbar/NavBar'

export default function Gallery() {
  return (
    <body>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>Gallery</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Coming Very Soon...
          </h1>
        </main>
      </div>
    </body>
  )
}