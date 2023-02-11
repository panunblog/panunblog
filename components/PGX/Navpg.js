import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
export default function Navpg() {
  return (
  
       
       <nav className="navbar">
    <Link href="/" legacyBehavior>
      <a>
        <img src="https://i.imgur.com/6udYr02.png" alt="Logo" className="logo"/>
      </a>
    </Link >
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link href="/" legacyBehavior>
          <a className="nav-link">Home</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/extends/about" legacyBehavior>
          <a className="nav-link">About</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/#blogs" legacyBehavior>
          <a className="nav-link">blogs</a>
        </Link>
      </li>
    </ul>
  </nav>
      
    
  )
}
