import * as yup from "yup"

export function initialValues (email){
    return{
        email
    }
}

export function validationSchema(){
    return yup.object({
        email:yup().string().required(true),
    })
}