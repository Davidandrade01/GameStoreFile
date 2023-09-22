import * as yup from "yup";

export function initialValues (){
    return{
        email:"",
        username:"",
        name:"",
        password:"",
    }
}

export function valitadionSchema(){
    return yup.object({
        
            email: yup.string().email(true).required(true),
            username:yup.string().required(true),
            name:yup.string().required(true),
            password:yup.string().required(true),
            
        
    })
}