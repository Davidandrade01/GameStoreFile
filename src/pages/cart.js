
import React from 'react'
import { useRouter } from 'next/router'
import { useState,useEffect } from 'react'
import { useCart } from '@/hooks/useCart'
//Layouts
import CartLayout from '@/layouts/CartLayout'

//api
import { Gameclass } from '@/api/game'

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
        console.log(arr)
        setGames(arr);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [cart]);

  return (
    <>
      

      <CartLayout>
        {currentStep === 1 && <p>Step One</p> }
        {currentStep === 2 && <p>Step two</p> }
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