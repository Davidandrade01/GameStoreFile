import React from 'react'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'

//Components
import { initialValues,valitadionSchema } from './yupregister'
import {Auth} from '@/api'

//Semantic ui
import { Form, FormButton } from 'semantic-ui-react'

const authCtrl= new Auth()

export default function Registerform() {
   const router = useRouter()

  const  formik= useFormik({
    initialValues:initialValues(),
    validationSchema:valitadionSchema(),
    validateOnChange:false,
    onSubmit: async (formValue)=>{
      try {
        await authCtrl.register(formValue)
        
        router.push('/join/sign-in')

      } catch (error) {
        console.error(error)
      }
    }

  })
  return (
    <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths='equal'>

        <Form.Input
        name="email"
        type='text'
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
        />


        <Form.Input 
        name="username" 
        type='text' 
        placeholder="Username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.errors.username}
        />

      
    </Form.Group>

    <Form.Group widths='equal'>

    <Form.Input 
    name="name" 
    type='text' 
    placeholder="Name"
    value={formik.values.name}
    onChange={formik.handleChange}
    error={formik.errors.name}
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

      <FormButton type='submit' fluid loading={formik.isSubmitting} > Register</FormButton>
       
    </Form>
  )
}
