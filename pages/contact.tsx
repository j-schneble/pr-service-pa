/* eslint-disable react/no-unescaped-entities */
import useInView from 'react-cool-inview'
import Container from '../components/Container/index'
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Input,
  Heading,
  useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';
import ErrorMessage from '../components/ErrorMessage'
import { init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
import Image from 'next/image'

const Contact = () => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  })
  init("KhAEHk-gFA5ArVOho");

  const toast = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const clearInput = () => {
      setName('');
      setEmail('');
      setMessage('');
      setIsLoading(false);
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();

      setIsLoading(true);

      emailjs.send("service_042wmpe","template_y0wbbdl", {
          from_name: name,
          from_email: email,
          message: message,
      }).then((result) => {
          clearInput();

          toast({
              title: 'Email sent.',
              description: 'You had successfully sent the email. I will reply your email ASAP. Thank you!',
              status: 'success',
              duration: 9000,
              isClosable: true
          })

      }, (error) => {
          clearInput();

          toast({
              title: 'Email not sent.',
              description: error.text,
              status: 'error',
              duration: 9000,
              isClosable: true
          })
      });
  }


  return (

    
    <Container className='overflow-none overscroll-y-none overflow-y-none over' >
       <Box  >
        <form  onSubmit={handleSubmit}>
        <div className='bg-transparent border border-none rounded-sm ring-1 ring-black/10 filter-blur'>
          <div className='grid grid-rows-1 gap-1 pt-1 pl-2 '>
            <h1 className='flex items-start w-24 text-2xl font-black tracking-normal text-white border-b-2 border-orange-500 contmob font-sfprodisplayheavy'>P R I M E</h1>
   
            <h1 className='flex items-start text-lg tracking-widest text-left text-gray-500 font-sfprodisplayregular'>SERVICES</h1>
          </div>
        <Box className='mt-1 bg-gray-1000'> 
          <div className='flex flex-row items-center gap-4 p-3 text-center place-content-evenly contmobgroup item-center place-items-evenly'>

                <h1 className='text-xl font-bold text-white contmobphrase font-sfprodisplayregular'>
                Call for a FREE estimate!
                </h1>

                  <h1 className='text-xl font-bold text-white contmobphrase font-sfprodisplayregular'>
                 (610) 955-7424
                  </h1>

          </div>
        </Box>

         <div className='px-2 mt-2 '>
  
          <FormControl   >
            <div className='grid grid-cols-1 gap-2 '>
              <Box >
                 <FormLabel className='mb-1 ml-1 text-lg font-medium text-white/90 font-sfprodisplayregular' key={'name'}>Full Name </FormLabel>
                  <Input 
                    className='w-full py-2 pl-1 text-gray-100 bg-gray-700 rounded-sm shadow-xs contactname'
                    id='name'
                    type={'name'}
                    value={name}
                    placeholder="Your Name"
                    onChange={event => setName(event.currentTarget.value)}
                  />
              </Box>
            <Box>
                <FormLabel className='mb-1 ml-1 text-lg font-medium text-white/90 font-sfprodisplayregular'  key={'email'}>Email</FormLabel>
                  <Input 
                    className='w-full py-2 pl-1 rounded-sm shadow-xs contactname '
                    id='email'
                    type={'email'}
                    value={email}
                    placeholder='Your Email'
                    onChange={event => setEmail(event.currentTarget.value)}            
                  />
              </Box>
            </div>
          </FormControl>

          <FormControl className='mt-4 ' >
            <FormLabel 
              className='pt-1 pb-1 pl-2 text-lg font-medium text-white/90 font-sfprodisplayregular' 
              htmlFor="message" key={'message'}>
              Message
            </FormLabel>
             <Input
                className="block w-full py-12 pl-4 mb-3 text-white bg-gray-700 rounded-sm shadow-xs contactname serv4"
                id='message'
                type={'message'}
                value={message}
                placeholder="Tell us about your project and timeline"
                onChange={event => setMessage(event.currentTarget.value)}  
              />
          </FormControl>
          <FormControl>
            <Button 
              className='w-full px-2 py-2 mt-5 bg-orange-500'
              marginLeft={'1'}
              marginRight={'1'}
              variant="solid"
              type="submit"
              mt={4}
              isLoading={isLoading}
              loadingText='Sending'                                            
              >
                <p className='w-full font-semibold tracking-wider text-white font-sfprodisplayregular'>
                  Send Message 
                </p>
              </Button>
          </FormControl>
        </div>
      </div>
    </form>                
  </Box>
  
 </Container>

    )
  }

export default Contact