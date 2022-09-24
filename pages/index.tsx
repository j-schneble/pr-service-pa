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
      
  
     
      <Container className='top-20' >
        <div className='grid items-center grid-rows-1 gap-1 pb-1 text-center place-content-evenly '>
          
           <h1 className='flex items-center font-black tracking-widest text-center text-black border-b-2 border-orange-500 place-content-evenly text-8xl indent-1 tx font-sfprodisplayheavy'>  PRIME   </h1>
           <h1 className='flex items-center font-light tracking-wider text-center text-gray-500 text-7xl txsmall font-sfprodisplayregular'>  SERVICES  </h1>
        </div>

        <div className='flex items-center '>
           <div className='pb-2 text-xl font-light text-center border-b-2 border-zinc-400 text-gray-50 txs font-sfprodisplayregular'>
            <p className=''>
              Excavation and Landscaping company serving Chester County and surrounding areas.   
            </p>
          </div> 
       </div> 
<div className='pb-2 border-b-2 border-zinc-400'>


    <div className=' gal'>
          <img src='/images/img1.png'  alt='galer' />
          <img src='/images/img2.png'  alt='galer' />
          <img src='/images/img3.png' alt='galer' />
          <img src='/images/img4.png'  alt='galer' />
          <img  src='/images/img6.png'  alt='galer' />
          <img  src='/images/img7.png'  alt='galer' />
          <img  src='/images/img8.png'  alt='galer' />
          <img  src='/images/img9.png'  alt='galer' />
          <img  src='/images/img10.png'  alt='galer' />
          <img  src='/images/img12.png' alt='galer' />
          <img  src='/images/img13.png' alt='galer' />
          <img src='/images/img14.png' alt='galer' />

      <div className='grid items-center grid-cols-3 gap-3 pb-4 mt-6 text-center rounded-sm btt place-content-evenly '>
        <div className='mobgone'>
          <h1 className='px-1 py-1 text-lg font-semibold text-white border-t-2 border-b-2 border-orange-500 rowsm bg-gray-800/75 font-sfprodisplayregular '>
              Monday - Friday
          </h1>
        </div>

        <div className='flex items-center mb-2 text-center bg-black rounded-full shadow-sm shadow-gray-800 place-content-evenly'>
          <button className='rowbut '>
            <h1 className='flex items-center px-1 py-2 text-2xl font-medium text-center text-white rounded-full font-sfprodisplayregular'>
         Contact Us
            </h1>
          </button>
        </div>

        <div className='mobgone'>
          <h1 className='px-1 py-1 text-lg font-medium text-white border-t-2 border-b-2 border-orange-500 rowsm bg-gray-800/75 font-sfprodisplayregular '>
            8am - 7pm
          </h1>
        </div>
      </div>
    </div>
    </div>
    <div className='flex items-center mb-2 text-center bg-black rounded-full shadow-sm shadow-gray-800 place-content-evenly'>
     </div>

      <div className='grid items-center grid-rows-1 mx-auto'>
        <h1 className='items-center pb-4 text-3xl font-medium text-center text-orange-500 font-sfprodisplayregular'>
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