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
import { FiMessageCircle } from 'react-icons/fi'
   import { MdOutlineContactPage} from 'react-icons/md'

  const Home: NextPage = () => {


  
    return (
      
  
     
      <Container className='top-20 ' >
        <div className='grid items-center grid-rows-1 gap-1 pb-1 text-center place-content-evenly '>
          
           <h1 className='flex items-center font-black tracking-widest text-center text-white border-b-2 border-orange-500 place-content-evenly text-8xl indent-1 tx hov font-sfprodisplayheavy'>  PRIME   </h1>
           <h1 className='flex items-center font-light tracking-wider text-center text-gray-500 text-7xl txsmall hov font-sfprodisplayregular'>  SERVICES  </h1>
        </div>

        <div className='flex items-center '>
           <div className='pb-2 text-xl font-light text-center text-white/90 txs font-sfprodisplayregular'>
            <p className=''>
              Excavation and Landscaping company serving Chester County and surrounding areas.   
            </p>
          </div> 
       </div> 
       <Box className='mt-1 '> 
          <div className='grid items-center grid-cols-2 gap-4 p-3 text-center place-content-evenly homecallgc item-center place-items-evenly'>
          <div className="justify-center rounded-lg centered-label dark:hover:border-opacity-50 galbtn ring-1 ring-black/10 bg-primary filter-blur ">
	<a className="flex items-center gap-4 p-2 text-xl font-light text-center text-zinc-300 font-sfprodisplayregular " href="#popup1"><span className='text-xl text-white dark:hover:text-opacity-75'> Contact Info</span><p className='text-white dark:hover:text-opacity-75'><MdOutlineContactPage className='dark:hover:text-opacity-75' color='white' size={25} /></p></a>
</div>

<div id="popup1" className="overlayup">
	<div className="inset-0 z-10 popupup bg-primary filter-blur',
                ' shadow-2xl ',
                'ring-1 ring-black/10 ',
                'flex flex-col'">
  <div className="edge"> </div>
  <div className='grid grid-rows-1 gap-1 pt-1 pl-1 '>
            <h1 className='flex items-start w-24 text-2xl font-black tracking-normal text-white border-b-4 border-orange-500 contmob font-sfprodisplayheavy'>P R I M E</h1>
   
            <h1 className='flex items-start text-lg tracking-widest text-left text-gray-500 font-sfprodisplayregular'>SERVICES</h1>
          </div>
          <div className='pt-2 '>
          <div className=''>

         

          <div className='grid items-center grid-cols-2 gap-2 mb-2 text-center serv2 place-content-evenly contmobgroup place-items-evenly'>

<h1 className='text-lg text-white/90 contmobphrase font-sfprodisplayregular'>
Monday - Friday
</h1>

  <h1 className='text-lg text-white/90 contmobphrase font-sfprodisplayregular'>
 8am - 7pm
  </h1>

</div>
          <div className='grid items-center grid-cols-2 gap-2 text-center place-content-evenly contmobgroup place-items-evenly'>

<h1 className='text-lg text-white/90 contmobphrase font-sfprodisplayregular'>
Call for a FREE estimate
</h1>

  <h1 className='text-lg text-white/90 contmobphrase font-sfprodisplayregular'>
 (610) 955-7424
  </h1>

</div>
     
          <div className='grid items-center grid-cols-1 gap-2 mt-2 text-center place-content-evenly contmobgroup place-items-evenly'>



  <h1 className='items-center text-lg text-center text-white/90 contmobphrase font-sfprodisplayregular'>
 Primeservicespa@gmail.com
  </h1>
  </div>
</div>
  


  

<div className='flex flex-row mt-4 '>
<Link href='contact' className='p-2 font-medium text-orange-600 rounded-full text-md font-sfprodisplayregular'>
                Send a message 
                    </Link>
</div>
		<a className="closeup" href="#">&times;</a>
		</div>
	</div>
</div>
                  <div className='p-2 rounded-lg galbtn homecallgc2 ring-1 ring-black/10 bg-primary dark:hover:border-opacity-75 filter-blur'>
                    <Link href='gallery' className='p-3 text-xl font-light tracking-wider text-white dark:hover:text-opacity-75 -z-10 font-sfprodisplayregular'>
                   View Gallery ⮕ 
                    </Link>
                  </div>
                
             
             

          </div>
          
        </Box>

     
<div className='pb-2 '>


   
    </div>
    <div className='flex items-center mb-2 text-center bg-black rounded-full shadow-sm shadow-gray-800 place-content-evenly'>
     </div>

      <div className='grid items-center grid-cols-3 text-center mobmobile place-items-center'>
      <h1 className='text-lg mobgone text-white/95 font-sfprodisplayregular'>
              Monday - Friday
          </h1>
         
        <h1 className='font-medium text-orange-600 service font-sfprodisplayregular'>
        ⇣ Our Services ⇣ 
        </h1>
        <h1 className='text-lg mobgone text-white/95 font-sfprodisplayregular'>
            8am - 7pm
          </h1>
      </div>
  
  <div className='tool'>
      <Tools />
  </div>
      
</Container>


    )
  }
  
  export default Home