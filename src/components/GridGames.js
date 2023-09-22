import React from 'react'
import Link from 'next/link'
import Image from 'next/image';


//components
import { ENV } from '@/utils';
import LabelDiscount from './LabelDiscount';
import functiondiscount from '@/utils/fuctiondiscount';

//styles
import styles from '@/scss/gridgames.module.scss'

export default function GridGames({ game }) {
  console.log(game);

  const enlaceurlServer=`${ENV.SERVER_HOST}`;//Ligação com o host(Sem isso a leitura da URL não estava sendo executada)
 

  return (
    <div className={styles.container}>
      {game.map((item) => (
       <Link key={item.id} href={item.attributes.slug} className={styles.card_game}  > 
        
        <div>
        <Image src={`${enlaceurlServer}${item.attributes.cover
        .data[0].attributes.url}`} width={300} height={200} alt={item.attributes.title}/>

        <div className={styles.discount}>
          {
            item.attributes.discount > 0 &&
            (<LabelDiscount >
              {`-${item.attributes.discount}%`}
            </LabelDiscount>)
          }
        </div>

        </div>

        <div className={styles.price}>
          <span>{item.attributes.title}</span>
          <span>
            €  {functiondiscount(item.attributes.price, item.attributes.discount).toFixed(2)}
          </span>
        </div>

        

       </Link>

      
          
       
      )) }
    </div>
  );
}
