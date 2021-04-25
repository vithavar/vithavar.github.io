import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import GalleryLayout from '../../components/GalleryLayout'

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

export default function Gallery() {
  return (
    <GalleryLayout>
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
    </GalleryLayout>
  )
}