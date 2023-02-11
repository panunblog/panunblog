import React from 'react'

import styles from './styles.module.scss'

export default function Contact() {
  function alerts(){
    alert("Success")
  }
  return (
    <div className={styles.contact__main} id='contact'>


            <hr />
            <h1 className='title__heading'>Contact</h1>
            <hr className="rule__title" />
 <div className={styles.align__center}>
 <div className={styles.contact__main__elms}>

            <div className={styles.info__get}>

            <input type="text" placeholder='Name' required></input>
            <input type="email"  placeholder='Email' required/>
            <textarea placeholder='Message' name="" id="" cols="50" rows="5"></textarea>

            <button onClick={alerts} type="submit" reset="true">Submit</button>
            </div>


        </div>

 </div>
      

    </div>
  )
}
