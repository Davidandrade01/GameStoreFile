import React from 'react'
//ui semantic
import { Confirm  } from 'semantic-ui-react'

export default function ModalConfirm(props) {
    const {...rest }=props
  return (
   <>
    <Confirm className='confirm' size='mini' {...rest}/>
   </>
  )
}
