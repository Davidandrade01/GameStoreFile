import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { forEach } from 'lodash'
//Ui semantic
import { Button } from 'semantic-ui-react'
//Utils
import functiondiscount from '@/utils/fuctiondiscount'
//Styles
import styles from '@/scss/resumen.module.scss'


export default function Resumen({games}) {
    const router= useRouter()
    const [totals, setTotal]=useState(null)
    //console.log(total);

    useEffect(()=>{

        let totals={
            original:0,
            discount:0,
            price:0,
        }

       forEach(games,(item)=>{
        const price=functiondiscount(item.attributes.price,item.attributes.discount)

        totals={
            original:totals.original+item.attributes.price * item.qty,
            discount:totals.discount+(item.attributes.price - price)*item.qty,
            price: totals.price+ price*item.qty

        }
       })

       setTotal(totals)
    },[games])


    const goToShippment=()=>{   
        router.push({query:{...router.query, step:2}})
    }
    if(!totals) return null


  return (
    <>
        <div className= {styles.container}>
            <h2>Total</h2>

            <div className={styles.block}>
                <div className={styles.prices}>
                    <div>
                        <span>Before</span>
                        
                        <span>€ {totals.original.toFixed(2)}</span>
                    </div>
                    <div>
                        <span>Discount</span>
                        <span>€ {totals.discount.toFixed(2)}</span>
                    </div>
                    <div>
                        <span>Subtotal</span>
                        <span>€ {totals.price.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <Button primary fluid onClick={goToShippment}>
                Next
            </Button>

            <Link href={'/'}> Go to shopping    </Link>
        </div>
    </>
  )
}
