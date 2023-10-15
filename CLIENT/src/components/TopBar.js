import React from 'react'
//Styles
import styles from '@/scss/topbar.module.scss'

// Semantic ui class


import Link from 'next/link'

//Components

import Account from './Account'
import Menu from './Menu'

export default function Topbar(props) {
    const {isOpenSearch}=props
  return (
   <>
    <div className={styles.container}>
        <div className={styles.left}>
            <Link href='/'>
               <img src="/image/logo.png" alt='logo game Store'/>
               
            </Link>
        </div>

        <div className={styles.center}>
            <Menu isOpenSearch={isOpenSearch}/>
        </div>

        <div className={styles.right}>
            <Account/>
        </div>
    </div>
   </>
  )
}
