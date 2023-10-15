import React from 'react'

//Semantic ui
import { Modal } from 'semantic-ui-react'

//Styles

import styles from '@/scss/basicmodal.module.scss'

export default function BasicModal({children,showModal,onClose,title}) {
  return (
    <Modal open={showModal} onClose={onClose} size='small' >
        <Modal.Header> {title}</Modal.Header>
        <Modal.Content> {children}</Modal.Content>
    </Modal>
  )
}
