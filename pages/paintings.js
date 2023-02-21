import Paintings from '../data/vangogh.json'
import styles from '@/styles/Home.module.css'
import { useState } from 'react';

import dynamic from "next/dynamic";


const paintings = () => {

  const [item, setItem] = useState({Paintings})
  return (
    <>
      <head>
        <meta name="Alex Somerville" content="MDIA 2109" />
        <meta property="og:title" content="Van Gogh Experience" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
      </head>
      <div>
        <h1 id='headerPaint' className={styles.headerPaint}>Paintings Page</h1>
      </div>

      <main className={styles.main}>
        <div className={styles.mainText}>
          <h3 id='textMain'>
            While Vincent van Gogh is perhaps best known for his oil paintings,
            he also created a number of stunning watercolors throughout his career.
            These works showcase his mastery of the medium and his ability to capture
            the beauty and essence of his subjects in a different way. Van Gogh's
            watercolors often feature landscapes, flowers, and still lifes, rendered
            in his signature bold, expressive style.
          </h3>
        </div>
        <div className={styles.galleryVan}>
          {
            item.Paintings.map((painting, id) => {
              if (painting.class_name === 'Watercolors')
                return (
                  <div className={styles.grow} key={id}>
                    <img className={styles.imageVan} src={painting.image_path} />
                    <div id='descText'>{painting.class_name}</div>
                  </div>
                )
            })
          }
        </div>
      </main>
    </>
  )
}

export default dynamic (() => Promise.resolve(paintings), {ssr: false})