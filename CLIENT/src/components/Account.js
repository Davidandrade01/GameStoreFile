import React from 'react'
import {Button, Icon, Label} from 'semantic-ui-react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/useAuth'
import classNames from 'classnames'
import { useCart } from '@/hooks/useCart'
//Styles

import styles from '@/scss/accountbar.module.scss'





export default function Account() {
    const {user}=useAuth()
    const {total}=useCart()
    const router = useRouter()
    
    const goToLogin =()=> router.push('/join/sign-in')
    const goToAccount =()=> router.push('/accountPage')
    const goToCart=()=>{
        if (!user) {
            goToLogin()
    }
    else{
       router.push('/cart')
    }
}
  return (
    <div className={styles.container}>
    <Button icon  className={styles.cart_box}>
    <Icon name='cart' onClick={goToCart}/>
    {total > 0 && <Label circular>{total}</Label>}
    </Button>

    <Button>
        
    </Button>

    {!user ?(
        <Button icon>
            <Icon name="user outline" onClick={goToLogin}/>
        </Button>

            ):
    
    (
        <Button icon className={styles.avatar}>
            <span>Hello, {user.username}</span>
            <Icon name="user outline" onClick={goToAccount}/>
            
        </Button>
    )
    
    }
    </div>
  )
}

