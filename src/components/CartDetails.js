import React from 'react'
import Image from 'next/image'
//Ui Semantic
import { Icon,Dropdown } from 'semantic-ui-react'
import { map } from "lodash";
//Utils
import functiondiscount from '@/utils/fuctiondiscount'
import { ENV } from '@/utils';
//Hooks

import { useCart } from '@/hooks/useCart';

//Styles
import styles from '@/scss/cartdetails.module.scss'
// components

import Resumen from './Resumen';

import { Seo } from './Seo';



export default function CartDetails({games}) {
    const enlaceurlServer=`${ENV.SERVER_HOST}`;//Ligação com o host(Sem isso a leitura da URL não estava sendo executada)

    const {updateQty,deleteItemFromCart}=useCart()

    const options=[]
     for(let i=1;i<=100;i++){
      options.push({
        key:i,
        text:String(i),
        value:i,
      })
     }
    

      const handleChange=(gameId, qty)=>{
        updateQty(gameId,qty)
      }

      const handleDelete=(gameId)=>{
        deleteItemFromCart(gameId)
      }
      
    
  return (
    <>

<Seo title={`Game Store - CartDetails`}/>
    <h2 style={{marginBottom:8}}>Basket</h2>
    <div className={styles.container}>
      

      <div className={styles.block}>
        {map(games, (game) => (
          <div key={game.id} className={styles.product}>
          <img src={`${enlaceurlServer}${game.attributes.cover.data[0].attributes.url}`}  alt={"img"}/> 
            <div>
              <div className={styles.info}>
                <div>
                  <p>{game.attributes.title}</p>
                  <p>{game.attributes.platform.data.attributes.title}</p>
                  <Icon name='trash alternate outline' link 
                   onClick={()=>handleDelete(game.id)}/>
                </div>

               
              </div>

              <div className={styles.quantity}>

                <Dropdown className='number' 
                options={options} selection
                 value={game.qty}
                compact
                onChange={(_,data)=>handleChange(game.id,data.value)}
    
                 //*nota
                />

                <span>€</span>
                <span>
                    {functiondiscount(game.attributes.price,game.attributes.discount).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Resumen games={games}/>
    </div>
    </>
  );

}

// *nota: O (_,data) inicialmente ignora a quantidade que já está no 
// seletor de options(game.qty) e passa a nova quantidade escolhida
//Se passasse diretamente (game.qty) o seletor não iria fazer efeito,
//pois sempre iria mostrar a quantidade atual inputada pelo usuário 
// antes, no momento do click no botão Buy it.