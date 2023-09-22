import React from 'react'
import {Button, Icon, Label} from 'semantic-ui-react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/useAuth'
import classNames from 'classnames'
//Styles

import styles from '@/scss/accountbar.module.scss'



const Total= 5

export default function Account() {
    const {user}=useAuth()
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
    {Total > 0 && <Label circular>{Total}</Label>}
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

