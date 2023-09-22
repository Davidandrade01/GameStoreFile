import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';


//components

import { Gameclass } from '@/api/game';
import { ENV } from '@/utils';
import functiondiscount from '@/utils/fuctiondiscount';
import LabelDiscount from './LabelDiscount';
//styles
import styles from '@/scss/bannerlastgame.module.scss'

//semantic ui react

import { Container, Image} from 'semantic-ui-react';
import { DateTime } from 'luxon';
import classNames from 'classnames';

// Tentei pegar as informações do array desta Forma. Até deu,  mas as imagens( cover e wallpaper), não apereciam. Precisei mesmo indicar por meio de um populate.
// const last= (response.data[response.data.length-1])
// console.log(last)   


const gameCtrl=new Gameclass()
export default function BannerLastGame() {
    const [game, setGame]=useState(null)
    

    useEffect (()=>{
    (async ()=>{
        
        
        try {
            const response= await gameCtrl.GetLastPublished()
           console.log(response)
            setGame(response.data[0])
           
        } catch (error) {
           console.log(error) 
        }
    })()
       
    },[])
    if (!game) return null;
    console.log(game)

    const wallpaper=game.attributes.wallpaper;
    const enlaceurlServer=`${ENV.SERVER_HOST}`;//Ligação com o host(Sem isso a leitura da URL não estava sendo executada)
    const releaseDate=new Date(game.attributes.releaseDate).toISOString()
    const finalprice=functiondiscount(game.attributes.price,game.attributes.discount)
    
    return (
      <div className={styles.container} >
          <Image src={`${enlaceurlServer}${wallpaper.data.attributes.url}`} className={styles.wallpaper} alt="Image" />

          <Link className={styles.info_container} href={game.attributes.slug}>
            <Container>
                <span className={styles.date}>
                    {DateTime.fromISO (releaseDate).minus({days:1}).toRelative()}
                    
                    <h2>{game.attributes.title}</h2>

                    <p className={styles.price}>
                       <LabelDiscount> - {game.attributes.discount}%</LabelDiscount>
                        <span className={styles.finalprice}>
                           € {finalprice.toFixed(2)}
                        </span>
                    </p>
                
                </span>
                
            </Container>
          </Link>
      </div>  
    )
 
}
