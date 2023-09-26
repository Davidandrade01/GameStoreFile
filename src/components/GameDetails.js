import React from 'react'
import ReactPlayer from 'react-player'
// styles
import styles from '@/scss/gamedatails.module.scss'

//Semantic ui

import { Container } from 'semantic-ui-react'

//Components
import { Separator } from './separator'


export default function GameDetails({game}) {
    //console.log(game)
  return (
   <>
    <Container className={styles.container}>
        <div className={styles.summary}>
            <p>{game.summary}</p>
        </div>

        <div className={styles.more_info}>

        <ul>
            <li><span> Release Date: {game.releaseDate}</span></li>
        </ul>

        </div>

        
    </Container>

    <Container className={styles.container_media}>
    
    <div className={styles.media}>

        TESTSE
    </div>

    <Separator height={30}/>
    <ReactPlayer url={game.video} className={styles.video} width="100%" height='500px'/>
    </Container>
   </>
  )
}

