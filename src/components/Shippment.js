import React from 'react'
import styles from '@/scss/shippment.module.scss'
import { Separator } from './separator'
import ShippmentAddress from './ShippmentAddress'

export default function Shippment({games}) {
  return (
    <div className={styles.container}>
    <div className={styles.center}>
       <ShippmentAddress/>
        <Separator height={50}/>
        <p>Payment</p>
    </div>


    <div className={styles.right}>
        <p>Resume</p>
    </div>
    
    
    
    
    </div>
  )
}
