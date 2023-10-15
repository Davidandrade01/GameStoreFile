export {default} from './platform'

//api
import { Platform } from '@/api/platform'
import { Gameclass } from '@/api/game'




//  No getserverSideProps as query e pararms extraidas por destructuring 
//  podem ser lidas no context. Tb foi definida a page sempre como resultado 1, caso 
//  não haja por default. Atenção, só é possivel ver alguns dos console.log no lado do terminal

const platformCtrl= new Platform()
const gameCtrl= new Gameclass()

export async function getServerSideProps(context){
    console.log(context)  
    const {query,params}=context
    const{page=1}=query
    const{platform}=params
    const resPlatform=await platformCtrl.getBySlug(platform)//platform:props da api
    const resGame= await gameCtrl.getGameByPlatformSlug(platform,page)//platform e  page:props da api
    
    
    return{
        props:{
           platform:resPlatform,
           game:resGame.data,
           pagination:resGame.meta.pagination
        }
    }
}