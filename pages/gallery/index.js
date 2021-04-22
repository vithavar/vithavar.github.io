import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Gallery() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vithusan Thavarajah</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coming Very Soon...
        </h1>
      </main>
    </div>
  )
}