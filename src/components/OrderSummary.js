import React from 'react'
import { useState,useEffect } from 'react'
//Ui semantic
import { Button } from 'semantic-ui-react'
import { forEach } from 'lodash'

//Styles

import styles from '@/scss/ordersummary.module.scss'

//Hooks
import { useAuth } from '@/hooks/useAuth'
import { useCart } from '@/hooks/useCart'

// Api
import { cartClass } from '@/api/Cartapi'
//Utils
import functiondiscount from '@/utils/fuctiondiscount'

export default function OrderSummary({games,selectlocation}) {

   const [total,setTotal]=useState(null)

   useEffect(()=>{
    let totalCart=0
    forEach(games,(item)=>{
        const priceItem= functiondiscount(item.attributes.price, item.attributes.discount)

        totalCart+=priceItem*item.qty
    })
    setTotal(totalCart)
    // console.log(total)
   },[games])

    
  return (
    <div className={styles.container}>
        <h2>Order Summary</h2>

        <div className={styles.block}>

          <div className={styles.products}>
              {games.map((item)=>(
                <div key={item.id} className={styles.product}>
                
                <div>
                    <p>{item.attributes.title}</p>
                    <span>{item.attributes.platform.data.attributes.title}</span>
                </div>
                <span>{item.qty >0 && `${item.qty}x`}
                <span>€</span>
                {functiondiscount (item.attributes.price, item.attributes.discount)}
                </span>
               

                </div>
              ))} 
              
            </div>
        </div>
    </div>
    
   
  )
}
