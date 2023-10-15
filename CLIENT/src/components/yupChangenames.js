import * as yup from "yup"



export function initialValues(firstname,lastname,){

    return{
        firstname, 
        lastname,
    }

}

export function valitadionSchema(){
   return yup.object({
    firstname : yup.string().required(true),
    lastname: yup.string().required(true),
   })
}