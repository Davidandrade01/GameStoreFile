import { ENV } from "@/utils";
import { authFetch } from "@/utils/authFetch";

export class Address{
    async create(data,userId){
        try {
            const url=`${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}`
            const params= {
                method :"POST",
                headers:{
                    "Content-Type":"application/json",

                },
               body: JSON.stringify({data:{
                ...data,
                user:userId
               }
               })
            }
            
            

            const response= await authFetch(url,params)
            const result= response.json()

            if(response.status!=200) throw result
                return result
        } catch (error) {
            throw error
        }
    }


    async getAll(userId){
        try {
            const userFiltered=`filter.[user].[id][$eq]=${userId}`
            const url=`${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}?${userFiltered}`
            const params={
                method:"GET",
                headers:{
                    "Content-Type":"application/json()"
                },

            }
            const response=await authFetch(url,params)
            const result=response.json()
            return result
        } catch (error) {
            throw error
        }
    }

    async delete(enderecoId){
        try {
            const url=`${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${enderecoId}`
            const params={
                method:"DELETE",
                headers:{
                    'Content-Type':"application/json()"
                }
            }

            const response=await authFetch(url,params)
            const result=await response.json()
            if(response.status !==200) throw result
            return result
        } catch (error) {
            throw error
        }

    }

}

