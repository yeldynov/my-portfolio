import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';

type Props = {};

export default function Main({}: Props) {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover object-left '
        src='https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        alt='Coder'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50 '>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start font-source_code'>
          <h1 className='sm:text-5xl text-3xl font-bold text-gray-800 '>
            I'm Nikita Yeldynov
          </h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            I'm a
            <TypeAnimation
              sequence={[
                ' Frontend Engineer ',
                2000,
                ' React Developer',
                2000,
                ' Javascript Coder',
                2000,
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a
              href='https://www.linkedin.com/in/nikita-yeldynov-716b7214a/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='cursor-pointer' size={20} />
            </a>
            <a
              href='https://github.com/yeldynov'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub className='cursor-pointer' size={20} />
            </a>
            <a
              href='https://www.codewars.com/users/yeldynov%20'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SiCodewars className='cursor-pointer' size={20} />
            </a>
            <a
              href='https://www.facebook.com/yeldynov/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebookF className='cursor-pointer' size={20} />
            </a>
            <a
              href='https://www.instagram.com/yeldynov'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram className='cursor-pointer' size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
