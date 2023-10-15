import { Token } from "@/api/token";

import React from 'react'

export async function authFetch(url,params) {

    const tokenCtrl=new Token()
    const token=tokenCtrl.getToken()

    const logout=() =>{
        tokenCtrl.removeToken()
        window.location.replace("/")
    }
        
   if(!token){
    logout()
   }
   else{
    if(tokenCtrl.hasExpiredToken(token)){
        logout()
    }
    else {
        const paramsTemp={
            ...params,
            headers:{
                ...params?.headers,
                Authorization: `Bearer ${token} `
            }
        }
    try {
        return await fetch(url,paramsTemp)
    } catch (error) {
      console.error(error)
    } 
   }
   }
  

}
