import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import styles from '@/scss/payment.module.scss'

export default function Payment() {
  const cardStyle={
    style:{
      base:{
        color:"#fff",
        fontSize:"16px",
        "::placeholder":{
          color:"#909090"
        }
      }

    }
   
  }
  return (
    <div className={styles.payment}>Payment
    <div className={styles.block}>
        <CardElement options={cardStyle}/>
    </div>
    
    </div>
  )
}
