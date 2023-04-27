import * as React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import '../styles/globals.css'
import Head from 'next/head' 
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Card1 from './Cards/card1'
import Card2 from './Cards/card2'
import Card3 from './Cards/card3'
import Card4 from './Cards/card4'
import Card5 from './Cards/card5'
import Card6 from './Cards/card6'
import Card7 from './Cards/card7'
import Card8 from './Cards/card8'
import Card9 from './Cards/card9'
import useMediaQuery from '@mui/material/useMediaQuery'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { makeStyles} from '@mui/styles'
import Paper from '@mui/material/Paper'

 const useStyles =  makeStyles({
      gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px'
      }
 });
 
 
 

 /*Create dynamic cards to avoid hydration error*/
  const DynamicCard1 = dynamic(() => import('./Cards/card1'), {
    ssr: false
});

 const DynamicCard2 = dynamic(() => import('./Cards/card2'), {
    ssr: false
});
 const DynamicCard3 = dynamic(() => import('./Cards/card3'), {
    ssr: false
});
 const DynamicCard4 = dynamic(() => import('./Cards/card4'), {
    ssr: false
});
 const DynamicCard5 = dynamic(() => import('./Cards/card5'), {
    ssr: false
});
 const DynamicCard6 = dynamic(() => import('./Cards/card6'), {
    ssr: false
});
 const DynamicCard7 = dynamic(() => import('./Cards/card7'), {
    ssr: false
});
 const DynamicCard8 = dynamic(() => import('./Cards/card8'), {
    ssr: false
});
 const DynamicCard9 = dynamic(() => import('./Cards/card9'), {
    ssr: false
});
 

export default function App() {
  const classess = useStyles(); 
  return (<>

<div>
 
    
     
          <Head>
      <title>Create Next App</title>
      <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

    </Head>
    <Navbar/>

       
      <Grid container className='gridContainer' spacing={1} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}   direction="row"
  justifyContent="space-between"
  alignItems="flex-start">

      

      <Grid  item xs={3} height={100}>
        <DynamicCard1 />
      </Grid>

        

      <Grid  item xs={3} >
        <DynamicCard2 />
      </Grid>

          

      <Grid  item xs={3} >
        <DynamicCard3 />
      </Grid>

         

      <Grid  item  xs={3} >
        <DynamicCard4 />
      </Grid>

         

      <Grid  item xs={3}  >
        <DynamicCard5 />
      </Grid>

          
      <Grid  item  xs={3} >
        <DynamicCard6 />
      </Grid>

          

      <Grid  item xs={3} >
        <DynamicCard7 />
      </Grid>

          

      <Grid  item xs={3}  >
        <DynamicCard8/>
      </Grid>

         
      <Grid  item xs={3} >
        <DynamicCard9 />
      </Grid>
          


      </Grid>
 
 
    
      </div>
       
           
        
      <Navbar/> 
    
     
     
  
       
   </> 
    
  )
  }