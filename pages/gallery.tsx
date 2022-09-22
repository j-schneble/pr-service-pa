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
       
        
        <div className='col-span-12 sm:col-span-6 lg:col-span-6 '>
        
  
              <GalleryComp     />
             
         </div>
      </Container>
    );
  
  }
  
  export default Gallery;
  
  