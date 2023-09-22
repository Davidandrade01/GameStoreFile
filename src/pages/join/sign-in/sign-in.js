import React, { Children } from 'react'
import Link from 'next/link'


// Styles
import styles from '@/scss/signup.module.scss'

//Components
import Signcover from '@/components/Signcover'
import Loginform from '@/components/Loginform'

export default function SignInPage() {
  return (
    <>
    
    
    
    <Signcover/>
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.form_box}>
          <h2> Log in </h2>
          
          <Loginform/>
        </div>


      <div className={styles.action}>

      <Link href="/join/sign-up">Create an account</Link>
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
