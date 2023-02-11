import React from 'react'
import styles from './styles.module.scss'
import {SiGmail} from 'react-icons/si'
export default function Footer() {
  return (
   
    <div className={styles.footer__main }> <hr/>
    <p>Copyright &copy; 2023 Panun Blog</p>
    <p className={styles.dev}>DEVELOPED BY <b><a href='aleemcodes.tech'>@ALEEMCODES</a> </b></p>
    <span><SiGmail/> <a href='mailto:connect@thepanunblog.com'>connect@panunblog.com</a> </span>
    </div>
  )
}
