import React from 'react'
import classNames from 'classnames'
import { useState,useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
// styles
import styles from '@/scss/wishlist.module.scss'

//UI SEMANTIC

import { Icon } from 'semantic-ui-react'
// A props gameId sai de passa apenas por header que instancia o componente wishlist com a props

// Class

import { wishlist } from '@/api/wishlistapi'
const wishlistCtrl= new  wishlist()
export default function Wishlist({gameId,className}) {
  const {user}=useAuth()
  const[wish,setWish]=useState([])

  useEffect(()=>{
    (async ()=>{
      try {
        const response= await wishlistCtrl.list(user.id,gameId)

        console.log(response)
      } catch (error) {
        
      }
    })
  },[gameId])
    
  return (
  <Icon name='heart' className={classNames(styles.Wishlist,{[className]:className})}/>
  )
}
