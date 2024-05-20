// components/Loader.js
import React from 'react'
import styles from './style.module.scss'

const Spinner = () => {
  return (
    <section className={styles.loaderSection}>
      <div className={styles.loader}>
        <div className={`${styles.upper} ${styles.ball}`}></div>
        <div className={`${styles.right} ${styles.ball}`}></div>
        <div className={`${styles.lower} ${styles.ball}`}></div>
        <div className={`${styles.left} ${styles.ball}`}></div>
      </div>
    </section>
  )
}

export default Spinner
