import { createContext,  } from "react";
import { useState,useEffect } from "react";
import { cartClass } from "@/api/Cartapi";

export const CartContext=createContext()
const cartCtrl= new cartClass()
export function CartProvider({children}){
  
  const [cart,setCart]=useState(null)
  const [total, setTotal] = useState(cartCtrl.totalcart());
  
  console.log(total)

  useEffect(()=>{
   const response= cartCtrl.getCart()
   //console.log(response)
   setCart(response)
  },[])

 const addTocart=(gameId)=>{
  cartCtrl.add(gameId)
  refreshTotalCart();

 }


 const refreshTotalCart = () => {
  setTotal(cartCtrl.totalcart());  //Isto atualiza just inTime a qty de produtos
  setCart(cartCtrl.getCart());
};

  const updateQty=(gameId,qty)=>{
    cartCtrl.updateCart(gameId,qty)
    refreshTotalCart()
  }

  const deleteItemFromCart=(gameId)=>{
    cartCtrl.delItem(gameId)
    refreshTotalCart()
  }
  const deleteAllCart=()=>{
    cartCtrl.deleteAll()
    refreshTotalCart()
  }

  const data={
    cart,
    total,
    addTocart,
    deleteItemFromCart,
    deleteAllCart,
    updateQty
  }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
 



}