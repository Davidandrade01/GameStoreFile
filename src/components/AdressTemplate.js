import React from 'react'
import { useState } from 'react'
//Styles
import styles from '@/scss/addresstemplate.module.scss'

//semantic ui
import { Button,Icon } from 'semantic-ui-react'
// components
 import BasicModal from './BasicModal'
 import ModalConfirm from './ModalConfirm'
 
import AddAdress from './AddAdress' //importa  o mesmo formulario de criação dentro do modal BasicModal quando for clicado no botão editar

import { Address } from '@/api/address';

const addressCtrl=  new Address()

export default function AdressTemplate({endereco,enderecoId,onReload}) {
  const [openModal, setOpenModal]=useState(false)//Modal mostrar os endereços

  const [modalconfirm,setModalConfirm]=useState(false) //Modal confirmar a ação de deletar

  const openCloseModal=()=>setOpenModal((prevState)=>!prevState)

  const opencloseModalConfirm=()=>setModalConfirm((prevState)=>!prevState)



  const  onDelete= async()=>{
    try {
        await addressCtrl.delete(enderecoId)
        onReload()
    } catch (error) {
      throw error
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          <p className={styles.title}>
          {endereco.title}:
          </p>
          <p className={styles.info}>
            {endereco.name}, {endereco.address},
            {endereco.city},{endereco.state}, 
            {endereco.postal_code},{endereco.phone}
            {endereco.user}
          </p>
        </div>

        <div className={styles.actions}>
          <Button primary icon>
            <Icon name='pencil'/>
          </Button>

          <Button primary icon onClick={opencloseModalConfirm}>
            <Icon name='delete'/>
          </Button>
        </div>

        <ModalConfirm
         open={ modalconfirm}
        onCancel={opencloseModalConfirm}
        onConfirm={onDelete}

          
          title= "Do you really want to delete this data?"
        />
        

        <BasicModal show={openModal} onClose={openCloseModal} title="Edit Address">
         <AddAdress onClose={openCloseModal}/> 
        </BasicModal>
        
      </div>
    </>
  )
}
