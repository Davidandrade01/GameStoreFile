import { ENV } from "@/utils";
import { authFetch } from "@/utils/authFetch";

export class Cartapi{

    AddOrder(gameId){
       
      const cartArr= this.getOrder()
      const indexItem=cartArr.findIndex((item)=>(item.id===gameId))

      if(indexItem<0){
        cartArr.push({
          id:gameId,
          qty:1
        })
      }

      else{
        const more=cartArr[indexItem]
        cartArr[indexItem].qty=more.qty+1
      }
      
        
        
       localStorage.setItem(ENV.CART,JSON.stringify(cartArr))
        
    }

    getOrder(){
      const response=  localStorage.getItem(ENV.CART)
      if (!response){
       return []
      }
      else{
        return JSON.parse(response)
      }

        return response
    }

}