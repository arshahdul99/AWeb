import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Scrolltop() {
    return (
        <>
        <Link href="/">
            <a href="#"><div className={styles.gotop}></div></a>
        </Link>
        
        </>
    )
}

export default Scrolltop
