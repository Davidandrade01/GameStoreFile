import BasicLayout from "@/layouts/BasicLayout"
//components
import BannerLastGame from "@/components/BannerLastGame"
import LatestGames from "@/components/LatestGames"

//Semantic Ui React
import { Container } from "semantic-ui-react"

export default function Index() {
 
  

  return (
    <>
    <BasicLayout  >
  
    <BannerLastGame/>

    <Container><LatestGames title="Last Games"/></Container>

    </BasicLayout>
      
     
    </>
  )
}
