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

<div className='grid grid-cols-3 gap-2 pb-2 mb-4 rounded-sm '>

<div className='items-center text-center border-b-2 border-orange-500 rounded-sm shadow serv2'>
  <h1 className='items-center text-lg font-medium text-center text-white gallerymobile font-sfprodisplayregular '>
    Clean.
    </h1>
  </div>

  <div className='items-center text-center border-b-2 border-orange-500 rounded-sm shadow serv2'>
  <h1 className='items-center text-lg font-semibold text-center text-white gallerymobile font-sfprodisplayregular '>
    Punctual.
    </h1>
  </div>

  <div className='items-center text-center border-b-2 border-orange-500 rounded-sm shadow serv2'>
  <h1 className='items-center text-lg font-semibold text-center text-white gallerymobile font-sfprodisplayregular '>
    Professional. 
    </h1>
    </div>

</div>

<div className='grid items-center grid-cols-1 pb-2'>
  <h1 className='items-center text-lg font-light text-center text-gray-200 place-content-evenly font-sfprodisplayregular'>
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
  
  