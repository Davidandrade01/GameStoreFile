import React from 'react'
import { useState } from 'react'
//Styles
import styles from '@/scss/shippment.module.scss'

//Components
import OrderSummary from './OrderSummary'
import { Separator } from './separator'
import ShippmentAddress from './ShippmentAddress'
import Payment from './Payment'
//Stripe
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

//Contants
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
        <OrderSummary games={games} selectlocation={selectlocation}/>
    </div>
    
        
    
    
    </div>
    </Elements>
  )
}
