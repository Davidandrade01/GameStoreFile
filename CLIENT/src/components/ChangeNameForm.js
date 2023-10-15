import React from 'react'
import { formik, useFormik } from 'formik'

//componets
import { User } from '@/api/user'

//styles
 import styles from '@/scss/ChangeNameForm.module.scss'

//semantic ui 
 import { Form } from 'semantic-ui-react'

 //yup 
 import { initialValues, valitadionSchema } from './yupChangenames'

 //Hooks
 import { useAuth } from '@/hooks/useAuth'


 const UserCtrl=new User()

export default function ChangeNameForm() {

    const {user}=useAuth()
    
    const formik=useFormik({
        initialValues:initialValues(user.firstname, user.lastname),
        validationSchema:valitadionSchema,
        onSubmit:async (formvalue)=>{
            try {
                 await UserCtrl.updateMe(user.id, formvalue)
            } catch (error) {
                console.error(error)
            }
        }
        
    })






  return (
    <>
    <Form  onSubmit={formik.handleSubmit} className={styles.form} >
       <label> Complete Name</label> 

       <div>
        <Form.Input
          name="firstname"
          placeholder="Name"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.errors.firstname}
       
        />
        <Form.Input
          name="lastname"
          placeholder="Lastname"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.errors.lastname}
         
        />
        
          <Form.Button className='btn' type="submit" loading={formik.isSubmitting} >
            Change
          </Form.Button>
          
      </div>
    </Form>

   
    </>
  )
}
