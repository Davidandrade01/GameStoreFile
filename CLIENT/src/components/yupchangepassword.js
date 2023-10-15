import * as yup from "yup";

export function initialValues (password){
    return{
        password
    }
}


export function validationSchema(){
    return yup.object({
        password : yup.string().required(true)
    })
}