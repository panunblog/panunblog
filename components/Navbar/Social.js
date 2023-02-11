import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import {AiOutlineInstagram,AiOutlineLinkedin} from 'react-icons/ai';
import {RiTwitterLine} from 'react-icons/ri';

export default function Social() {
  return (
    <div className={styles.nav__container}>
        <div className="nav__soclist">
            <ul className={styles.list}>
                <li className={styles.social__link}><Link target="__blank" href="https://www.instagram.com/thepanunblog/"><AiOutlineInstagram/></Link></li>
                <li className={styles.social__link}><Link target="__blank" href="https://twitter.com/thepanunblog/"><RiTwitterLine/></Link></li>
                <li className={styles.social__link}><Link target="__blank "href=""><AiOutlineLinkedin/></Link></li>
            </ul>
        </div>
    </div>
  )
}
