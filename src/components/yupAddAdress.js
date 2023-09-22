import * as yup from "yup";

export function initialValues(address)

    {
    return{
        title: address?.title || "",
        name: address?.name || "",
        address: address?.address || "",
        city: address?.city || "",
        state: address?.state || "",
        postal_code: address?.postal_code || "",
        phone: address?.phone || "",
    }
}

export function valitadionSchema(){
    return yup.object({
        title:yup.string().required(true),
        name:yup.string().required(true),
        address:yup.string().required(true),
        city:yup.string().required(true),
        state:yup.string().required(true),
        postal_code:yup.string().required(true),
        user: yup.string().required(false),
        phone:yup.number().required(true)
        
    })
}