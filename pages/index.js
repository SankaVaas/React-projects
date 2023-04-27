import { NextPage } from 'next'
import  React from 'react';
import Head from 'next/head' 
import App from './_app'
import Navbar from './Components/Navbar'
import { StrictMode } from "react";

 

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    

      <Navbar/>
   
       
     
    </div>  
     
  )
}

 
