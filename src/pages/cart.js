
import React from 'react'
import { useRouter } from 'next/router'
import { useState,useEffect } from 'react'
//Components
import CartDetails from '@/components/CartDetails'

//Hooks
import { useCart } from '@/hooks/useCart'
//Layouts
import CartLayout from '@/layouts/CartLayout'

//api
import { Gameclass } from '@/api/game'
import Shippment from '@/components/Shippment'

const GameCtrl= new Gameclass()

export default function cart() {
  const {query:{step=1}}= useRouter()
 const currentStep= Number(step)
 const [games, setGames] = useState(null);
  const { cart } = useCart();

  useEffect(() => {
    (async () => {
      try {
        const arr = [];
        for await (const item of cart) {
          const response = await GameCtrl.getGameById(item.id);
        //  console.log(response)
         arr.push({...response.data ,qty:item.qty})
        }
     
        setGames(arr);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [cart]);
  console.log (games)
  return (
    <>
      

      <CartLayout>
        {currentStep === 1 && <CartDetails games={games} /> }
        {currentStep === 2 && <Shippment games={games}/> }
        {currentStep === 3 && <p>Step three</p>}
      </CartLayout>
    </>
  );
}



// nota


// tentei usar um map para ler o array cart: 

// cart.map(async(item)=>
// {const response=  await GameCtrl.getGameById(item.id)
//   console.log(response)
// })


// mas a questão é mesmo assim, o Map não espera a promessa terminar e já tenta 
// entregar resultado.  poderiria usar o promisse all: 

// useEffect(() => {
//   (async () => {
//     try {
//       const promises = cart.map(async (item) => {
//         const response = await GameCtrl.getGameById(item.id);
//         return response;
//       });

//       const gameResponses = await Promise.all(promises);
//       console.log(gameResponses);
//     } catch (error) {
//       console.error(error);
//     }
//   })();
// }, [cart]);

// ou a solução que foi feita com o FOR ( mais simples)