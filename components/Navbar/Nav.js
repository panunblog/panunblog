import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
export default function Nav() {
  return (
    <>
    <div className={styles.nav__container}>
        <ul className={styles.nav__ul}>
            <li className={styles.nav__li}><Link href="/">Home </Link></li>
            <li className={styles.nav__li}><Link href="#about">About </Link></li>
            <li className={styles.nav__li}><Link href="#authors">Authors </Link></li>
            <li className={styles.nav__li}><Link href="#blogs">Blogs </Link></li>
            <li className={styles.nav__li}><Link href="#contact">Contact </Link></li>
        </ul>
    </div>  
    </>
  )
}
