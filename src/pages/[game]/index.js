import React from 'react'
//Components

import HeaderWallpaper from '@/components/HeaderWallpaper'
import { Separator } from '@/components/separator'
import BasicLayout from '@/layouts/BasicLayout'
// class
import { Gameclass } from '@/api/game'

//Utils
import { ENV } from '@/utils'



export async function getServerSideProps(context){

  const gameCtrl= new Gameclass()

  console.log(context)
  const{query:{game}}=context

  const responseGame= await gameCtrl.getGameBySlug(game)

  console.log(responseGame)
  return{
    props:{
      game:responseGame,
    }
  }
}
//Aqui o game que passo como props equivale a o return do getServerSideProps
export default function detailGames({game}) {
 
  const enlaceurlServer=`${ENV.SERVER_HOST}`
  console.log(game)
  return (
    <>
    <BasicLayout>
   
      <HeaderWallpaper 
        wallpaperImg={`${enlaceurlServer}${game.attributes.wallpaper
        .data.attributes.url}`} 
        coverImg={`${enlaceurlServer}${game.attributes.cover
        .data[0].attributes.url}`}
        // iconImg={`${enlaceurlServer}${game.attributes.icon.data.attributes.url}`}
        gameId={game.id}
        game={game.attributes}
         />



      <Separator height={50}/>
      
    </BasicLayout>
    </>
  )
}
