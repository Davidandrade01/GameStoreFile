import React from 'react'

import BasicLayout from '@/layouts/BasicLayout'
// class
import { Gameclass } from '@/api/game'

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

export default function detailGames(props) {
  console.log(props)
  return (
    <>
    <BasicLayout>
      <h1>detail Games</h1>
    </BasicLayout>
    </>
  )
}
