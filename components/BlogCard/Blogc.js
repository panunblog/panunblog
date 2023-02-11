import React, { useState,useEffect } from 'react'
import client from '../../client'
import styles from './styles.module.scss'
import Link from 'next/link'
import {SlCalender} from 'react-icons/sl';
const Blogc = ({posts}) => {

  
  return (
    
    <div>
      
<div className={styles.card__container} id="blog">
    
      <h1 className="title__heading">Blog(s)</h1>
      <hr className="rule__title"></hr>



   


    {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' ,authorName=" "}) =>
            slug && (
              <div key={_id} className={styles.card__main}>
                <Link target="_blank" href={`post/${encodeURIComponent(slug.current)}`}>
                <div className={styles.card__elms}>
                  <h4>{title}</h4>
                  <blockquote>

                  </blockquote>

                  <p><SlCalender> </SlCalender>   ({new Date(publishedAt).toDateString()})</p>
                   <span>{posts.authorName}</span>

                </div>

                </Link>
              </div>
            ))}
 
    
    
      <hr  className={styles.under__hr}/>
    </div>
  

    </div>
  )
}

export default Blogc
