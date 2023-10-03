import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from '@/scss/headerwallpaper.module.scss'

//ui semantic
import { Image, Button, Icon, Container } from 'semantic-ui-react'
//Utils
import functiondiscount from '@/utils/fuctiondiscount'
//components
import { Favorites } from './Favorites'
import { useCart } from '@/hooks/useCart'


export default function headerWallpaper({wallpaperImg,gameId,game,coverImg,iconImg}) {
   //console.log(gameId)
   //console.log(game)
   const buyPrice = functiondiscount(game.price, game.discount);
   
   const[loading,SetLoading]=useState(false)
    const {addToCart}=useCart()


    const handleClick=()=>{
        addToCart(gameId)
        SetLoading(true)
        setTimeout(()=>{
            SetLoading(false)
        },500)
    }

  return (
  <> 
        <div className={styles.container}>
        <Image src={wallpaperImg}  alt={'wallpaper'}/>
        </div>

        <Container className={styles.panel}>
        
        <div className={styles.imgContainer}>
            <Image src={coverImg} />
        </div>

        <div className={styles.actionsContainer}>
            
                <h2 style={{marginBottom:'32px'}}>{game.title}</h2>
                

            <div className={styles.moreInfo}>

            <Favorites gameId={gameId} className={styles.heart} />
                <span>
                <Image src={iconImg} />
                {game.platform.data.attributes.title}
                
                </span>
                
                <span>

                    In Stock
                    <div>
                        <Icon name="check"/>
                        
                       
                    </div>
                </span>

                <div className={styles.price}>
                {game.discount>0 && (
                        <>
                        <span className={styles.originalPrice}>
                            <Icon name='tag'/>
                            €{game.price}
                        </span>

                        <span className={styles.discount}>
                            -{game.discount}%
                        </span>
                        </>
                    ) }
                <span className={styles.price}>{buyPrice}€</span>
            </div>
          
            <Button primary fluid  loading={loading} onClick={handleClick}  >Buy it</Button>

            

            </div>
        
                    
        </div>


        </Container>

  </>
  )
}
