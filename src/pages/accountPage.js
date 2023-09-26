import React from 'react'
import { useRouter } from 'next/router';
import { useState } from 'react'

//Layout
import BasicLayout from '@/layouts/BasicLayout'

//Components
import Profile from '@/components/Profile'
import ChangeNameForm from '@/components/ChangeNameForm'
import ChangeEmailForms from '@/components/ChangeEmailForms'
import Changepassword from '@/components/Changepassword'
import AddAdress from '@/components/AddAdress'
import ListAdress from '@/components/ListAdress'

//Semantic ui

import { Tab } from 'semantic-ui-react'

//styles

 import styles from '@/scss/accountpage.module.scss'


 // Hooks
 import { useAuth } from '@/hooks/useAuth'




export default function AccountPage() {
const [reload, setReload]=useState(false) 



 const {logout, user}=useAuth();
 const router=useRouter()

  

 if(!user){
  router.push("/")
  return null
 }

 const onReload = () => setReload((prevState) => !prevState); 
 
  const panes=[{
    menuItem:"Orders",key:23,
    
    render:()=>(
      <Tab.Pane >

      <p>Orders</p>
      </Tab.Pane>
    ),
  },
  {
    menuItem:"Wish List" ,key:22,//key colocada para apenas nao gerar Warning
    render:()=>(
      <Tab.Pane >

      <p>Whish List</p>
      </Tab.Pane>
    ),
  },

  {
    menuItem:"My Adress",key:24 ,
    render:()=>(
      <Tab.Pane >

      <AddAdress  onReload={onReload}/>
      <ListAdress reload={reload} onReload={onReload}  />
      </Tab.Pane>
    ),
  },

  {
    menuItem:{key:20,
      icon:"settings" ,content: "Settings"},
    render:()=>(
      <Tab.Pane >

      <ChangeNameForm/>
      <ChangeEmailForms/>
      <Changepassword/>
      </Tab.Pane>
    ),
  },

  {
    menuItem:{
      key:21,
      content: 'log out',
      icon:"log out",
      onClick:logout,
      

    }
  }
]
  return (

   <>
   <BasicLayout isContainer relative>
   
       <Profile/>
        <Tab menu={{secondary:true, pointing:true}} panes={panes} className={styles.tabs} />

        

   </BasicLayout>
   
   </>
  )
}
