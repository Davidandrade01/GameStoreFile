import React, { Children } from 'react'
import Link from 'next/link'
// Styles
import styles from '@/scss/signup.module.scss'

//Components
import Signcover from '@/components/Signcover'
import Registerform from '@/components/Registerform'
import { Seo } from '@/components/Seo'

export default function signUpPage() {
  return (

    
    <>
    
    <Seo title="Sing up"/>
    <Signcover/>
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.form_box}>
          <h2> Subscribe here</h2>
          
          <Registerform/>
        </div>


      <div className={styles.action}>

      <Link href="/join/sign-in">Back</Link>
      </div>

      </div>

      <div className={styles.image_box}>
        <div className={styles.img}>
        </div>
      </div>
    </div>
    
    </>
    

    
  
  
    
    
    
  )
}
