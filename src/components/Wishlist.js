import React from 'react'
import classNames from 'classnames'

// styles
import styles from '@/scss/wishlist.module.scss'

//UI SEMANTIC

import { Icon } from 'semantic-ui-react'
// A props gameId sai de passa apenas por header que instancia o componente wishlist com a props
export default function Wishlist({gameId,className}) {
    
  return (
  <Icon name='heart' className={classNames(styles.Wishlist,{[className]:className})}/>
  )
}
