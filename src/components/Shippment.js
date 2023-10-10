import React from 'react'
import styles from '@/scss/shippment.module.scss'
import { Separator } from './separator'
import ShippmentAddress from './ShippmentAddress'
import { useState } from 'react'

export default function Shippment({games}) {
  const[selectlocation,SetSelectLocation]=useState(null)
  
  return (
    <div className={styles.container}>
    <div className={styles.center}>

       <ShippmentAddress selectlocation={selectlocation} SetSelectLocation={SetSelectLocation}  />

        <Separator height={50}/>
        
        {selectlocation && 
        <p>Payment</p>
        }
    </div>


    <div className={styles.right}>
        <p>Resume</p>
    </div>
    
    
    
    
    </div>
  )
}
