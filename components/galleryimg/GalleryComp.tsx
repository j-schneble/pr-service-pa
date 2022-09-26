import Image from 'next/image'
import NextLink from 'next/link'
import Parallax from '../Parallax/index'
import { gallery } from '../../data/gallery/galleryItems'
import { IoLogoGithub } from 'react-icons/io'
import { Link, } from '@chakra-ui/react'
import { IoMdArrowRoundForward  } from 'react-icons/io'




export default function GalleryComp() {


  return (
    <div className='grid items-center grid-cols-2 gap-2 place-content-evenly'>
      {gallery.map((item, key) => (
        <Parallax key={key}>
            
          <div
           
            className='bg-gray-900 border border-gray-500 rounded-lg cursor-pointer shadowguy group hover:bg-gray-700'
          >
  
            <div className='h-72 w-40% hov3 relative'
          >
   
              <Image
                src={item.image_path}
                objectFit='cover'
                layout='fill'
              

                className='rounded-t-md '
                alt='Summary image'
              />
       
            </div>
            </div>
           
              

        </Parallax>
      ))}
    </div>
  )
}