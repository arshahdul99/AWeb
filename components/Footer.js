import React from 'react'
import Link from 'next/link'
import styles from '../styles/footer.module.css'

function Footer() {
  return (
    <>
      <footer className={styles.bottom}>
        <div className={styles.links}>
        <Link href="/">
            <a>About Us</a>
            </Link>
            <Link href="/">
            <a>Privacy Policies</a>
            </Link>
            <Link href="/">
            <a>Refund Policy</a>
            </Link>
            <Link href="/">
            <a>Terms of use</a>
            </Link>
        </div>
        <div className={styles.copyright}>
          <p>Copyright 2022 Reactofficial.com |<br/>| All Right Reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
