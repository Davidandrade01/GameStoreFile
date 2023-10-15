import React from 'react'
import { DateTime } from 'luxon'
//Styles
import styles from '@/scss/profile.module.scss'

//Hooks
import { useAuth } from '@/hooks/useAuth'

//ui semantic
import { Button, Icon } from 'semantic-ui-react'


export default function Profile() {
 const {user}=useAuth()
  
 
  console.log(user)
  return (
    <>
      <div className={styles.info}>
        <Button icon className={styles.user}>
          <Icon name='user outline'/>
        </Button>

        <h3 className={styles.username}>{user.username}</h3>
        <h4 className={styles.email}>{user.email}</h4>

        <p className={styles.createdAt} >
        Member since : {DateTime.fromISO(user.createdAt, {locale:"en"}).toFormat("DDD")}
        </p>

      </div>
    </>
  )
}
