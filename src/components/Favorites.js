
import { useEffect,useState } from 'react';
//ui Semantic
import { Icon } from 'semantic-ui-react';

import classNames from "classnames";
//Styles
import styles from '@/scss/favorite.module.scss'

// Class
import { wishClass } from '@/api/wishlistapi';

//Hooks
import { useAuth } from '@/hooks/useAuth';

const whishCtrl=  new wishClass()


export function Favorites(gameId,className) {
  const {user}=useAuth()
  const [hasFavorites, setHasfavorites]=useState(null)
  useEffect(()=>{
    (async ()=>{
     
      try {
        const response= await whishCtrl.list(user.id,gameId)
        setHasfavorites(response)
      } catch (error) {
        console.error(error)
        setHasfavorites(false)
      }
      
    })();


  },[gameId])
  
  
  if(hasFavorites===null) return null;

  return (
    <Icon
    name={ hasFavorites? "heart" : "heart outline"}
    
    className={classNames(styles.wishlistIcon, {
      [className]: className,
    })}
  />
  )
}
