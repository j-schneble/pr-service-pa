import React from 'react'
import { RiInstagramLine} from 'react-icons/ri'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'

const Footer: React.FC = () => {
    return (
        <footer className="">
        <div className="flex items-center justify-center max-w-4xl col-span-2 gap-4 px-4 py-2 text-xs leading-loose text-center text-white flex-cols-1 mb-6overflow-hidden h-xl sm:px-6 lg:px-8">
          
          <div className="sticky ">
            <div className="flex items-center flex-grow space-x-3 text-center">
              
            <a
                  href='https://www.instagram.com/primeservicespa/'
                  className='visible lit2'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Twitter'
                >
                
                  <RiInstagramLine className='items-center h-auto text-center transition-all duration-200 rounded-md fill-current w-7 text-indigo-50 dark:text-pink-500 dark:hover:text-gray-300 hover:text-opacity-100' />
                </a>
                <a
                  href='https://www.facebook.com/primeservicespa/'
                  className='visible lit2'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Github'
                >
                  <IoLogoFacebook className='items-center h-auto text-center transition-all duration-200 rounded-md fill-current w-7 text-indigo-50 dark:text-blue-900 dark:hover:text-gray-300 hover:text-opacity-100' />
                </a>    
            </div>
          </div>
          <p className='items-center p-2 text-xl font-semibold text-center text-black font-sfprodisplayregular'
              
            
        
              
                
              >
                © {new Date().getFullYear()} Prime Services {" "}
              </p>
        </div>
      </footer>
    )
  }
  
  export default Footer
  