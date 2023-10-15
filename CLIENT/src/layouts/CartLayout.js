import React from 'react'
import { Separator } from '@/components/separator'
import Footer from '@/components/Footer'
import { Container } from 'semantic-ui-react'
import StepsCart from '@/components/StepsCart'
export default function CartLayout({children}) {
  return (

    <>
        <StepsCart/>
        <Separator height={150}/>
        <Container>{children}</Container>
        <Separator height={70}/>
        <Footer/>

    </>


  )
}
