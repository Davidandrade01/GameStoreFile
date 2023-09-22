import React from 'react'
import { useRouter } from 'next/router'
//styles
import styles from '@/scss/paginationbtn.module.scss'

// ui Semantic
import { Pagination } from 'semantic-ui-react'



export default function PaginationBtn({pageSize,totalPages}) {
  const router=useRouter()
  const onPageChange=(_,data)=>{
    console.log(data)
   const {activePage}=data
   router.push({query:{...router.query,page:activePage}})
  }
  return (
    <div className={styles.container}>
     
     <Pagination defaultActivePage={1}  totalPages={totalPages} ellipsisItem={null}
      firstItem={null} lastItem={null} onPageChange={onPageChange} secondary pointing
     />
    
    </div>
  )
}
