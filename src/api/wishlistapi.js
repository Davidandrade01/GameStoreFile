import { ENV,authFetch } from "@/utils";

export class wishlist{
    async list (userId,gameId){
    try {
        
        const filteredUser=`[filters][user][id][$eq][0]=${userId}`
        const filteredGame=`[filters][game][id][$eq][1]=${gameId}`
        const urlParams=`${filteredUser}&${filteredGame}`
        const url=`${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${urlParams}`

        const response= await authFetch(url)
        const result= await response.jason()
        if(response.status!==200) throw error;

        if(result.data.length===0){
            return false
        }
       
        return result.data[0]
    } catch (error) {
        console.error(error)
        
    }
}
}