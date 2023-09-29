import React from 'react'
import { Icon } from 'semantic-ui-react'
import classNames from "classnames";
import { useAuth } from '@/hooks/useAuth';
import { Wishlistclass } from '@/api/wishlistapi';
import { useState,useEffect } from 'react';

import styles from '@/scss/favorite.module.scss'


const wishlistCtrl = new Wishlistclass();

export function Favorites(props) {
  const { gameId, className, } = props;
  const [hasWishlist, setHasWishlist] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await wishlistCtrl.list(user.id, gameId);
        console.log(response)
        setHasWishlist(response);
      } catch (error) {
        setHasWishlist(false);
        console.error(error);
      }
    })();
  }, [gameId]);


  if (hasWishlist === null) return null;

  return (
    <Icon
      name='heart'
      className={classNames(styles.wishlistIcon , {
        [className]: className,
      })}
    />
  );
}
