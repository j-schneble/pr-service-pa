import NextLink from 'next/link'

import React from "react";
import Container from '../components/Container/index'
import { useState } from "react";
import GalleryComp from '../components/galleryimg/GalleryComp';
import { gallery as galleryData } from '../data/gallery/galleryItems';
import { Link } from '@chakra-ui/react'
import { BsBoxArrowInUpRight } from 'react-icons/bs'

const Gallery = () => {
    const [gallery, setGallery] = useState(galleryData);
    const [active, setActive] = useState("all");
  
  
    /* ProjectCard still works if implemented, Created Projects Comp to work on Parallax */
  
    return (
      <Container  >

<div className='grid grid-cols-3 gap-2 pb-2 mb-4 border-b-2 border-gray-800 rounded-sm bg-stone-200/20 '>

<div className='items-center text-center bg-black'>
  <h1 className='items-center text-lg font-semibold text-center text-white font-sfprodisplayregular '>
    We work clean.
    </h1>
  </div>

  <div className='items-center text-center bg-black'>
  <h1 className='items-center text-lg font-semibold text-center text-white font-sfprodisplayregular '>
    We respect your time.
    </h1>
  </div>

  <div className='items-center text-center bg-black'>
  <h1 className='items-center text-lg font-semibold text-center text-white font-sfprodisplayregular '>
    We are professionals. 
    </h1>
    </div>



</div>

<div className='grid items-center grid-cols-1 pb-2'>
  <h1 className='items-center text-lg font-light text-center text-gray-800 place-content-evenly font-sfprodisplayregular'>
  Our process ensures that you get the highest-quality solution, that fits your needs, and is delivered on-time.
  </h1>
  </div>

       
        
        <div className='col-span-12 sm:col-span-6 lg:col-span-6 '>
        
  
              <GalleryComp     />
             
         </div>
      </Container>
    );
  
  }
  
  export default Gallery;
  
  