import React from 'react'

import { Container } from 'semantic-ui-react'
import classNames from 'classnames'

//styles
import styles from '@/scss/basiclayout.module.scss'

// components
import Topbar from '@/components/TopBar'
import Footer from '../components/Footer'


export default function BasicLayout(props) {

    const {children,isOpenSearch=false, isContainer=false, relative=false}=props
  return (
    <>

    <Topbar isOpenSearch={isOpenSearch}/>
    <Container fluid  >

    <div className={classNames({[styles.relative]:relative})}>
    {isContainer ? <Container>{children}</Container>: children}
    </div>

    </Container>
   
    <Footer/>
   
    </>
  )
}
