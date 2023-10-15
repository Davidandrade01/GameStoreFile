import React from 'react'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'

//Custom hooks

import { useAuth } from '@/hooks/useAuth'

//Components
import { initialValues,valitadionSchema } from './YupLogin'
import { Auth } from '@/api'

//Semantic ui
import { Form, FormButton } from 'semantic-ui-react'

const authCtrl=new Auth()
 
export default function Loginform() {
   
  const router= useRouter()
  

  const {login}=useAuth()
 
  const formik= useFormik({
    initialValues:initialValues(),
    validationSchema:valitadionSchema(),
    validateOnChange:false,

    onSubmit:async(formValue)=>{
      try {
       const response=await authCtrl.login(formValue)
      login(response.jwt)
       console.log(response)
       
      } catch (error) {
        console.error(error)
        
        
      }
    }
    
  })
 
  return (
    <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths='equal'>

        <Form.Input
        name="identifier"
        type='text'
        placeholder="Email or Username"
        value={formik.values.identifier}
        onChange={formik.handleChange}
        error={formik.errors.identifier}
        />

    <Form.Input 
    name="password" 
    type='password' 
    placeholder="Password"
    value={formik.values.password}
    onChange={formik.handleChange}
    error={formik.errors.password}
   
    />


    </Form.Group>

      <FormButton type='submit' fluid  loading={formik.isSubmitting}> Log in</FormButton>
       
    </Form>
  )
}
