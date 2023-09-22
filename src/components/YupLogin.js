import * as yup from "yup";

export function initialValues(){
    return{
        "identifier":"",
        "password": ""
    }
}



export function valitadionSchema(){
    return yup.object({
        identifier: yup.string().required(true),
        password: yup.string().required(true)
    })
}