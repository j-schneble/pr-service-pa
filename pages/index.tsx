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
    <div className='grid items-center grid-rows-1 gap-1 py-1 text-center bg-stone-200/20 place-content-evenly '>


    
           <h1 className='flex items-center font-black tracking-widest text-center text-black border-b-2 border-orange-500 place-content-evenly text-7xl indent-1 tx font-sfprodisplayheavy'>  PRIME   </h1>
           <h1 className='flex items-center text-6xl font-light tracking-wide text-center text-gray-500 tx font-sfprodisplayregular'>  SERVICES  </h1>
</div>
         
   
       
        </header>
        <div className='flex items-center pt-1 '>

       
        <div className='pl-1 ml-1 text-xl font-light text-center text-gray-500 txs indent-2 font-sfprodisplaylight'>
          <p className='py-2 '>
          Excavation and Landscaping company serving Chester County and surrounding areas.   
          </p>
         
          </div> 
        
          </div> 
     <div className='flex items-center mb-2 text-center place-content-evenly'>
      <button>
        <h1 className='flex items-center px-4 py-2 text-2xl font-medium text-center text-white border border-gray-900 rounded serv4 font-sfprodisplayregular'>
         Contact Us ➤
        </h1>
 
      </button>

     </div>

          <div className='flex col-span-2 gap-3 pt-6 border-t-2 rounded-sm flex-cols-2 border-zinc-400'>

       
        <div className='items-center p-4 mb-4 ml-2 text-xl font-medium text-center text-gray-800 rounded-sm shadow-sm bg-stone-200/20 tracking-medium bio font-sfprodisplayregular'>
          We are a team of experienced professionals, who love what they do, and are passionate about doing it well.

      </div>
      <div className='p-4 mb-4 ml-2 text-xl font-medium text-center text-gray-800 rounded-sm shadow-sm bg-stone-200/20 tracking-medium bio font-sfprodisplayregular'>
          
          Our process ensures that you get the highest-quality solution, that fits your needs, and is delivered on-time.
      </div>
      </div>
      <div className='grid items-center grid-rows-1 mx-auto'>
        <h1 className='items-center pt-2 pb-4 text-3xl font-medium text-center text-orange-500 font-sfprodisplayregular'>
        ⇣ Services We Offer ⇣
        </h1>
        </div>
       
        
       
      <div className=''>
      <Tools />
      </div>
  
    
          
  
  
    

  
        
    </Container>
  
    )
  }
  
  export default Home