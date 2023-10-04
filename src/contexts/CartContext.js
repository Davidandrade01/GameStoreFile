import { createContext,  } from "react";
import { useState,useEffect } from "react";
import { cartClass } from "@/api/Cartapi";

export const CartContext=createContext()
const cartCtrl= new cartClass()
export function CartProvider({children}){
  
  const [cart,setcart]=useState(null)
  const [total, setTotal] = useState(cartCtrl.totalcart());
  
  console.log(total)

  useEffect(()=>{
   const response= cartCtrl.getCart()
   console.log(response)
  },[])

 const addTocart=(gameId)=>{
  cartCtrl.add(gameId)

 }

  const data={
    cart,
    total,
    addTocart,
    deleteItem:()=>{},
    deleteAllCart:()=>{},
    UpdateCart:()=>{}
  }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
 


}