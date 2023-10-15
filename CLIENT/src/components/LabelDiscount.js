import React from 'react';
import styles from '@/scss/labeldiscount.module.scss'
import classNames from "classnames";
export default function LabelDiscount({children}) {
 
    

  return (
    <span
      className={classNames(styles.labelDiscount, { [classNames]: classNames })}
    >
      {children}
    </span>
  )
}
