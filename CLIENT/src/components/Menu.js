//React 
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import {map} from "lodash"
import classNames from 'classnames'
import { useRouter } from 'next/router'

// UI semantic
import {  Icon, Input } from "semantic-ui-react";

// styles
import styles from '../scss/menu.module.scss'
// api
import { Platform } from '@/api/platform'

//component
import { ENV } from '@/utils'

const platformCtrl = new Platform();

export default function Menu({isOpenSearch,data}) {

    const [platforms, setPlatforms] = useState(null);
    const [showSearch,setShowSearch]=useState(isOpenSearch)
    const [busca, setBusca]=useState("")
    const enlaceurlServer=`${ENV.SERVER_HOST}`
    
    
    const router=useRouter()

    const openCloseSearch=()=> setShowSearch((prevState)=>!prevState)
    //console.log(platforms)
    //console.log(showSearch)
    
    useEffect(() => {
        (async () => {
          try {
            const response = await platformCtrl.getAll(); 
            setPlatforms(response.data);
          } catch (error) {
            console.error(error);
          }
        })();
      }, []);


      // //Ou seja, todas as vezes que a rota  obtiver alguma coisa escrita, seja atualizada no estado
      useEffect(()=>{
        setBusca(router.query.result || "")
      },[])
    
      const handleChange =(e)=>{
        // console.log(e)
        setBusca(e)
        router.push(`/search?result=${e}`)
      }
   

  return (
    
    <div className={styles.container}>
    {map(platforms, (item) => (
      <Link key={item.id} href={`/games/${item.attributes.slug}`}>
        <li> 
         <img src={`${enlaceurlServer}${item.attributes.icon.data.attributes.url}`} />  
        {item.attributes.title}
        </li>
      </Link>
    ))}
      
    <button className={styles.search} onClick={openCloseSearch}>
        <Icon name="search" />
      </button>

      <div
        className={classNames(styles.inputContainer, {
          [styles.active]: showSearch,
        })}
      >
        <Input
          id="search-games"
          placeholder="Search"
          className={styles.input}
          focus={true}
          onChange={(e)=>handleChange(e.target.value)}
          value={busca}
          
         
         
     
        />
        <Icon
          name="close"
          className={styles.closeInput}
          onClick={openCloseSearch}
         
        />
      </div>
    </div>
  );
}