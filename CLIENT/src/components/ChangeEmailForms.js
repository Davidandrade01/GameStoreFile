import React from 'react'

import {formik, useFormik} from 'formik'
import styles from '@/scss/changeemailforms.module.scss'

import { Form } from 'semantic-ui-react'
import { initialValues,valitadionSchema } from '@/components/yupChangeEmail'
import { User } from '@/api/user'

const useCtrl= new User()

import { useAuth } from '@/hooks/useAuth'

export default function ChangeEmailForms() {

    const {user}=useAuth()
    const formik=useFormik({
        initialValues:initialValues(user.email),
        validationSchema:valitadionSchema,
        onSubmit:async (formvalue)=>{
            try {
              await useCtrl.updateMe(user.id,formvalue)
            } catch (error) {
                console.errors(error)
            }
            
        }
        
    })



  return (


       
    <Form onSubmit={formik.handleSubmit} className={styles.form} >
      <label> Email</label>
      <div className={styles.content}>
          <Form.Input
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
          />
          
          <Form.Button type='submit' loading={formik.isSubmitting}>
            Change
          </Form.Button>
      </div>
     
      
    </Form>
  )
}
