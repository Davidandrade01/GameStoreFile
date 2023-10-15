import React from 'react'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
//Stripe
import { CardElement,useStripe,useElements, } from '@stripe/react-stripe-js'
//Ui semantic
import { Button } from 'semantic-ui-react'
import { forEach, map } from 'lodash'

//Styles

import styles from '@/scss/ordersummary.module.scss'

//Hooks
import { useAuth } from '@/hooks/useAuth'
import { useCart } from '@/hooks/useCart'

// Api
import { cartClass } from '@/api/Cartapi'
//Utils
import functiondiscount from '@/utils/fuctiondiscount'


const cartCtrl= new cartClass()

export default function OrderSummary({games,selectlocation}) {

   const [total,setTotal]=useState(null)
   const [loading, setLoading]=useState(false)
   const stripe=useStripe()
   const elements= useElements()
   const {user}=useAuth()
  const router=useRouter()
  const {deleteAllItems}=useCart()
  
   useEffect(()=>{
    let totalCart=0
    forEach(games,(item)=>{
        const priceItem= functiondiscount(item.attributes.price, item.attributes.discount)

        totalCart+=priceItem*item.qty
    })
    setTotal(totalCart)
    // console.log(total)
   },[games])

   const handlePay= async()=>{

    setLoading(true)

    if(!stripe || !elements){
      setLoading(false)
      return
    }
    
    const cardElement=elements.getElement(CardElement)
    const result= await stripe.createToken(cardElement)
    console.log(result)

    if (result.error) {
      console.error(result.error.message);
    } else {
      const response = await cartCtrl.paymentCart(
        result.token,
        games,
        user.id,
        selectlocation
        
      );

      if (response.status == 200) {
        deleteAllItems();
        goToStepEnd();
      } else {
        console.error("Error al realizar el pedido");
      }
    }

    setTimeout(()=>{
      setLoading(false)
    },1000)

   }

   const goToStepEnd=()=>{
    router.push({query:{...router.query,step:3}})
   }
    
  return (
    <div className={styles.container}>
        <h2>Order Summary</h2>

        <div className={styles.block}>

          <div className={styles.products}>
              {map(games,(item)=>(
                <div key={item.id} className={styles.product}>
                
                <div>
                    <p>{item.attributes.title}</p>
                    <span>{item.attributes.platform.data.attributes.title}</span>
                </div>
                <span>{item.qty >0 && `${item.qty}x`}
                <span style={{paddingRight:2,paddingLeft:8}}>€</span>
                {functiondiscount (item.attributes.price, item.attributes.discount)}
                </span>
               

                </div>
              ))} 
              
            </div>
        </div>

        <div className={styles.blockTotal}>
        <div>
          <span>Total  </span>
          <span>€ {total}</span>
        </div>
           <Button primary fluid disabled={!selectlocation} loading={loading}  onClick={handlePay}> Order now!</Button>         
        </div>
    </div>
    
   
  )
}
