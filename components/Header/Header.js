import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from "./styles.module.scss"
import Nav from '../Navbar/Nav'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
        <section className={styles.header__container}>
     
        <Navbar/>

<Link href=" /"> 
        <div className="main__header">
           <img className={styles.image} src="https://i.imgur.com/6udYr02.png"></img>
            
        </div>
        
</Link>
        <Nav></Nav>

        </section>

    </div>
  )
}
