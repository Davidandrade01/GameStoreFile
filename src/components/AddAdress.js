import React from 'react'
import { useState } from 'react'
import { useFormik } from 'formik'
//styles
import styles from '@/scss/addadress.module.scss'

//Semantic ui
import { Button, Form } from 'semantic-ui-react'

//Components
import BasicModal from './BasicModal'
import { initialValues,validationSchema, } from './yupAddAdress'
import { Address } from '@/api/address' //Classe para criar rota da Api
import { useAuth } from '@/hooks/useAuth'




const addressCtrl = new Address();
export default function AddAdress({onReload}) {
  
  const[showModal, setShowModal]=useState(false)
  console.log(showModal)
  const openCloseModal=()=>setShowModal((prevState)=>!prevState)

  const {user}=useAuth()


const formik=useFormik({
  initialValues:initialValues(),
  validationSchema:validationSchema,
  
  onSubmit: async (formvalue)=>{
    try {
      await addressCtrl.create(formvalue,user.id)
      formik.handleReset()
      onReload()
      openCloseModal()
      
      
    } catch (error) {
      console.log(error)
    }
  }
})


 

  return (
    <>
    <Button primary className={styles.addBtn} onClick={openCloseModal}>
      Add
    </Button>
    
    <BasicModal showModal={showModal} title="New Adress" onClose={openCloseModal}>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input name='title' placeholder='Title of Adress' 
        value={formik.values.title} 
        onChange={formik.handleChange} 
        error={formik.errors.title}  />

        <Form.Group widths='equal'>
        
        <Form.Input name="name" placeholder='Username'
          value={formik.values.name} 
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Form.Input name="address" placeholder='Address'
          value={formik.values.address} 
          onChange={formik.handleChange}
          error={formik.errors.address}
        />
        </Form.Group>

        <Form.Group widths='equal'>
        <Form.Input name="state" placeholder='State'
          value={formik.values.state} onChange={formik.handleChange}
          error={formik.errors.state}
        />
        <Form.Input name="city" placeholder='City'
          value={formik.values.city} onChange={formik.handleChange}
          error={formik.errors.city}
        />
        </Form.Group>

        <Form.Group widths='equal'>
        <Form.Input name="postal_code" placeholder='Zip Code'
          value={formik.values.postal_code} onChange={formik.handleChange}
          error={formik.errors.postal_code}
        />
        <Form.Input name="phone" placeholder='Phone'
          value={formik.values.phone} onChange={formik.handleChange}
          error={formik.errors.phone}
        />
        </Form.Group>

        <Form.Button type='submit'loading={formik.isSubmitting}  fluid>Done</Form.Button>
      </Form>
    </BasicModal>

    </>
  )
}
