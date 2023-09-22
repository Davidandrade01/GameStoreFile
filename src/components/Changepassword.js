import React from 'react'
import styles from '@/scss/changepassword.module.scss'
import { useFormik } from 'formik'
import { Form } from 'semantic-ui-react'
import { initialValues, validationSchema } from './yupchangepassword'
import { useAuth } from '@/hooks/useAuth'
import { User } from '@/api/user'

const ctrlUser= new User()

export default function Changepassword() {

    const {user,updateUser}=useAuth()

const formik=useFormik({
    initialValues:initialValues(),
    validationSchema:validationSchema,
    onSubmit:async(formvalue)=>{
        try {
            await ctrlUser.updateMe(user.id,{password:formvalue.password})
        } catch (error) {
            console.errors(error)
            
        }
    }
})

  return (
    
    <Form onSubmit={formik.handleSubmit}  className={styles.form}>
        <label >Change Password</label>
        <div>
            <Form.Input
            name="password"
            value={formik.values.password}
            placeholder="New password"
            onChange={formik.handleChange}
            error={formik.errors.password}
            />

            <Form.Button type='submit' loading={false}>
                Change
            </Form.Button>
              
        </div>
    </Form>
  )
}
