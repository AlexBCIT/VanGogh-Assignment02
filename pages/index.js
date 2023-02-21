import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

import Paintings from '../data/vangogh.json'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  console.log(Paintings);

  const [item, setItem] = useState({Paintings})


  return (
    <>
      <Head>
        <title>Van Gogh Experience</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/myboy.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <div id='mainText' className={styles.mainText}>
          <h3>
            Vincent van Gogh is widely recognized as one of the most
            influential artists of the 19th century. Despite his relatively
            short career as a painter, van Gogh produced an extensive body
            of work that continues to inspire and captivate audiences today.
          </h3>
        </div>
        <nav>
          <Link id='buttonMain' className={styles.buttonPaint} href="#gallery">See The Artwork</Link>
        </nav>
        <div className={styles.galleryVan}>
          {
            item.Paintings.map((painting, id) => {
              if (painting.class_name === 'Paris')
                return (
                  <div id='gallery' className={styles.grow} key={id}>
                    <img className={styles.imageVan} src={painting.image_path} />
                    <div>{painting.class_name}</div>
                  </div>
                )
            })
          }
        </div>
        <nav>
          <Link className={styles.buttonPaint} href="/paintings">See Paintings</Link>
        </nav>
      </main>
    </>
  )
}
