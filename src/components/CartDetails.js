import React from 'react'
import Image from 'next/image'
//Ui Semantic
import { Icon,Dropdown } from 'semantic-ui-react'
import { map } from "lodash";
//Utils
import functiondiscount from '@/utils/fuctiondiscount'
import { ENV } from '@/utils';
//Hooks
import { useCart } from '@/hooks/useCart'
//Styles
import styles from '@/scss/cartdetails.module.scss'

export default function CartDetails({games}) {
    const enlaceurlServer=`${ENV.SERVER_HOST}`;//Ligação com o host(Sem isso a leitura da URL não estava sendo executada)
    
  return (
    <div className={styles.container}>
      <h2>Basket</h2>

      <div className={styles.block}>
        {map(games, (game) => (
          <div key={game.id} className={styles.product}>
          <img src={`${enlaceurlServer}${game.attributes.cover.data[0].attributes.url}`}  alt={"img"}/> 
            <div>
              <div className={styles.info}>
                <div>
                  <p>{game.attributes.title}</p>
                  <p>{game.attributes.platform.data.attributes.title}</p>
                  <Icon name='trash alternate outline' link/>
                </div>

               
              </div>

              <div className={styles.quantity}>

                <Dropdown className='number' options={[]} selection value={null}
                compact/>
                <span>€</span>
                <span>
                    {functiondiscount(game.attributes.price,game.attributes.discount).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

