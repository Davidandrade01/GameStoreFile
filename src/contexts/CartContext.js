import { useEffect, useState, createContext, Children } from "react";

export const CartContext=createContext()
import { Cartapi } from "@/api/Cartapi";

export function CartProvider({children}){
  const [cart,setCart]=useState([])
  const [total,setTotal]=useState(0)
  const cartCtrl= new Cartapi()

  const addToCart=(gameId)=>{

      cartCtrl.AddOrder(gameId)
  }

  useEffect(()=>{
    const response=cartCtrl.getOrder()
    setCart(response)
  },[])
  

  const data={
    cart:cart,
    total:total,
    addToCart,
    deleItem:()=>{},
    deleteAllItem:()=>{},
    ChangeQty:()=>{},
  }

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}