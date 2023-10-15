import React from 'react'
import Link from 'next/link'
import { Icon} from 'semantic-ui-react';
import {Image} from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
//styles

import styles from '@/scss/signcover.module.scss'


export default function Signcover() {
  const {user}=useAuth()
const router= useRouter()
 if(user) {
   router.push("/")
 
}




  return (
    <div className={styles.container}>
   
      <div className={styles.topbar}>
        <Link href='/'>
        <img src='/image/logo.png' alt='logoGamStore'/>
        </Link>
        
        <Link href='/'>
          <Icon name='close'/>
        </Link>
      </div>
    
    </div>
  )
}
