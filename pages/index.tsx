import Container from '../components/Container/index'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import React from 'react'
import Image from 'next/image'
import { 
  Grid, 
  Text, 
  Link, 
  Box,
  Flex,
  Divider
  

   } from '@chakra-ui/react'
   import Tools from './tools'
   import {BiPhoneCall } from 'react-icons/bi'

   import { GrFacebook, GrInstagram } from 'react-icons/gr'

  const Home: NextPage = () => {


  
    return (
      
  
     
      <Container >
 
 <header className=''>
    <div className='grid items-center grid-rows-1 gap-1 py-1 text-center place-content-evenly '>


          
           <h1 className='flex items-center font-black tracking-widest text-center text-black border-b-2 border-orange-500 place-content-evenly text-7xl indent-1 tx font-sfprodisplayheavy'>  PRIME   </h1>
           <h1 className='flex items-center text-6xl font-light tracking-wide text-center text-gray-500 tx font-sfprodisplayregular'>  SERVICES  </h1>
</div>
         
   
       
        </header>

      
        <div className='flex items-center '>
          
         

       
        <div className='pl-1 ml-1 text-xl font-light text-center text-gray-800 txs indent-2 font-sfprodisplayregular'>
          <p className=''>
          Excavation and Landscaping company serving Chester County and surrounding areas.   
          </p>
         
          </div> 
        
          </div> 
          
    
     <div className='grid items-center grid-cols-3 gap-3 pt-2 pb-4 text-center border-b-2 rounded-sm place-content-evenly border-zinc-400'>

    <div className=''>
<h1 className='py-1 text-lg font-medium text-black font-sfprodisplayregular '>
Monday - Friday 
</h1>

</div>
<div className='flex items-center mb-2 text-center bg-black rounded-full shadow-sm shadow-gray-800 place-content-evenly'>
      <button>
        <h1 className='flex items-center px-4 py-2 text-2xl font-medium text-center text-white rounded-full font-sfprodisplayregular'>
         Contact Us ➤
        </h1>
 
      </button>

     </div>

<div className=''>
<h1 className='py-1 text-lg font-medium text-black font-sfprodisplayregular '>
8am - 7pm
</h1>
</div>
       

</div>

      <div className='grid items-center grid-rows-1 mx-auto'>
        <h1 className='items-center pt-2 pb-4 text-3xl font-medium text-center text-orange-500 font-sfprodisplayregular'>
        ⇣ Services We Offer ⇣
        </h1>
        </div>
       
        
       
      <div className='tool'>
      <Tools />
      </div>
  
    
          
  
  
    

  
        
    </Container>
  
    )
  }
  
  export default Home