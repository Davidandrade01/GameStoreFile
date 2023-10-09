import React, { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useEffect } from 'react'
import { Address } from '@/api/address'

const addressCtrl= new Address ()

export default function ShippmentAdress() {
  const [address,setAddress]= useState(null)
  const {user}=useAuth()
  console.log(address);

  useEffect(()=>{
    (async()=>{
      try {
       const response=await addressCtrl.getAll(user.id)
       setAddress(response)
      } catch (error) {
        console.error(error)
      }
    })()
  },[])

  return (
    <div>ShippmentAdress</div>
  )
}
