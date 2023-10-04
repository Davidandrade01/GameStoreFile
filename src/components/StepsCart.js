import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'



//Styles
import styles from '@/scss/stepscart.module.scss'
//Semantic UI
import { Icon,} from 'semantic-ui-react'
import classNames from 'classnames'

export default function StepsCart() {

    const steps=[
        {id:1,title:"Cart"},
        {id:2,title:"Payment"},
        {id:3,title:"Confimation"},
    ]

  return (

    <div className={styles.container}>
    <div className={styles.left}>
        <Link href='/'>
        <img src="/image/logo.png" alt='logo game Store'/>
        </Link>
    </div>

        <div className={styles.center}>
            {steps.map((item)=>(
                <div key={item.id}>
                    <span className={styles.number} >
                        <Icon name='check'/>
                        {item.id}
                    </span>
                    <span>{item.title}</span>
                    <span className={styles.space}></span>
                </div>

            ))}

        </div>

        <div className={styles.right}>

        <Icon name='lock'/>
       
        <span>Secure Payment</span>
        </div>
    </div>
  )
}
