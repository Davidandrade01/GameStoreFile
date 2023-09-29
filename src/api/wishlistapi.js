import { ENV } from "@/utils";

import { authFetch } from "@/utils/authFetch";


export  class Wishlistclass{
   
    async  list (gameId,userId){
    
        try {
           
        const filteredUser=`[filters][user][id][$eq][0]=${userId}`
        const filteredgame=`[filters][game][id][$eq][1]=${gameId}`
        const urlParams= `${filteredUser}&${filteredgame}`
        const url=`${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${urlParams}`
            const response= await authFetch(url)
            const result= await response.json()

            if(result.status!==200) throw error;
            return result
           
        } catch (error) {
            console.Console(error)
            
        }
    }
}