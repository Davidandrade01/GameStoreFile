import React from 'react'
import { useEffect } from 'react'

//Semanti ui
import { Container } from 'semantic-ui-react'
import { size } from 'lodash'

// component
import BasicLayout from '@/layouts/BasicLayout'
import GridGames from '@/components/GridGames'
import { Separator } from '@/components/separator'
import PaginationBtn from '@/components/PaginationBtn'
//class
import { Gameclass } from '@/api/game'


const gameCtrl=new Gameclass()
export async function getServerSideProps(context){
  
 console.log(context)
 const{query}=context
 const{result,page=1}=query

 const response= await gameCtrl.searchGames(result,page);

 return{
   props:{
     game:response.data,//de acordo com o  console log de response
     pagination:response.meta.pagination,
     searchText:result,

   }
 }

}

export default function searchPage(props) {
  const{game,pagination,searchText}=props
  const hasResult= game.length>0

  //Este useEfect manterá o foco no input, mesmo quando a página mudar. Se a necessidade do usuário ter que clicar para digitar novamente, já que a página mudou
  useEffect(()=>{
    document.getElementById("search-games").focus()
  },[]) 
  return (
    <>
       <BasicLayout relative isOpenSearch >
        <Container>
        <Separator height={50}/>

        <h2>Looking for: {searchText}</h2>
          {
            hasResult ? (
              <>
              <GridGames game={game}/>
              <Separator height={32}/>
              <PaginationBtn pageSize={pagination.pageSize} totalPages={pagination.pageCount}  />
              </>
              
            ):
            (<>
              <h1>No results</h1>
            </>)
          }
        </Container>

       </BasicLayout>
    </>
  )
}
