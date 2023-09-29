import React from 'react'
import styles from '@/scss/galleryscrshots.module.scss'
import Image from 'next/image'
import { ENV } from '@/utils'
import  { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container } from 'semantic-ui-react';





export default function GalleryScrShots({game}) {
    const {screenshots}=game
    const enlaceurlServer=`${ENV.SERVER_HOST}`
    const ArrScreenshots=(screenshots.data)
    console.log(ArrScreenshots)


  return (


   <>
      {
        ArrScreenshots.length>=2 && (

          <Container>
          <h2> Screenshots</h2>
        
        <Carousel className={styles.carousel}  axis={'horizontal'} centerMode={true} centerSlidePercentage={33}
           showStatus={false}  showThumbs={false} autoPlay infiniteLoop >
    
     {ArrScreenshots.map((item) => (
      
    
          <div className={styles.cards}>
          <img className={styles.img}  key={item.id} src={`${enlaceurlServer}${item.attributes.url}`}  alt={item.attributes.title}/> 
          </div> 

          )
          
          )}
          </Carousel>
      

          </Container>
     

        )
      }

    
        
    
     </>
  )
    
    
}
