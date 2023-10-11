import React from 'react'
import styles from '@/scss/shippment.module.scss'
import { Separator } from './separator'
import ShippmentAddress from './ShippmentAddress'
import { useState } from 'react'
import Payment from './Payment'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { ENV } from '@/utils'


const stripeInit=loadStripe(ENV.STRIPE_TOKEN)
export default function Shippment({games}) {
  const[selectlocation,SetSelectLocation]=useState(null)
  
  return (

    <Elements stripe={stripeInit}>
    <div className={styles.container}>
    <div className={styles.center}>

       <ShippmentAddress selectlocation={selectlocation} SetSelectLocation={SetSelectLocation}  />

        <Separator height={50}/>
        
        {selectlocation && 
        <Payment/>
        }
    </div>


    <div className={styles.right}>
        <p>Resume</p>
    </div>
    
        
    
    
    </div>
    </Elements>
  )
}
