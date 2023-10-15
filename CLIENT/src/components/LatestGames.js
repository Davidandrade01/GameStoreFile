//A intenção é pegar os últimos jogos publicados

//Components
import { Gameclass } from '@/api/game'
import  { useEffect, useState } from 'react'
import GridGames from './GridGames'




const gamectrl= new Gameclass()

export default function LatestGames({limit=6, platformId=null,title}) {
  

const [game, setGame]=useState()


  useEffect(()=>{
    (async ()=>{
      try {
        const response= await gamectrl.getLatestPublished({ platformId,limit})
        
       setGame(response.data)
       
      } catch (error) {
        console.error(error)
      }
    })()
  },[])
  if(!game) return null
  return (
    <>
    <div>{title}</div>
    <GridGames game={game}/>
    </>
  )
}
