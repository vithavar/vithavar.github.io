import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Layout from '../../components/Layout'

export default function Gallery() {
  return (
    <Layout>
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
    </Layout>
  )
}