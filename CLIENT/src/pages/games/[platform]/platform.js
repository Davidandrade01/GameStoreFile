import React from 'react'

//Components
import BasicLayout from '@/layouts/BasicLayout'
import GridGames from '@/components/GridGames'
import { Separator } from '@/components/separator'
import PaginationBtn from '@/components/PaginationBtn'
import { Seo } from '@/components/Seo'

//semantic-ui-react
import { Container } from 'semantic-ui-react'


//Styles

import styles from '@/scss/basiclayout.module.scss'



export default function pagePlatform({game,platform,pagination}) {
    
  const hasProduct= game.length>0 // É interessante ter isto, pois se houver manutenção  no strapi e não houver mais nenhum jogo publicado(comprarem os produtos), então renderizará que não há mais nada disponível devido a condicional aplicada logo abaixo.

  console.log(pagination)
  return (
    <>
    <Seo title={`Game Store -  ${platform.attributes.title}`}/>
        <BasicLayout relative>

        <Container>

         <Separator height={100}/>

          <h2>{platform.attributes.title}</h2>

          {
            hasProduct ?  
            (
              <>
                <GridGames game={game}/>
                <Separator height={32}/>
                <PaginationBtn pageSize={pagination.pageSize} totalPages={pagination.pageCount}  />
                
              </>
            ) 
            :
            (
              <p>No ressults</p>
            )
          }
       
        </Container>

        </BasicLayout>  
    </>
  )
}
