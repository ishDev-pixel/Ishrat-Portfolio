import React from 'react'
import Navbar from './Navbar'
import LinkedIn from './svg/LinkedIn'
import WhatsApp from './svg/WhatSapp'
import GitHub from './svg/GitHub'
import Gmail from './svg/Gmail'

const About = () => {
  return (
    <>
    <Navbar/>
    <div className='h-screen w-screen flex pt-22'>
     
       <div className='w-3/5 h-full p-4 gap-5 flex flex-col'>
            <h1 className='text-center text-6xl font-bold'> Ishrat Posge</h1>
         <div className='text-2xl text-blue-600 p-2 '>
              <p className=''>   <span className='text-transparent'>---</span>I'm a Computer Science graduate passionate about cloud computing, DevOps,
              <span className='text-transparent'>---***###</span>and building technology that makes a difference. </p>
               <p className='leading-11'> I love understanding what's happening behind the screen.</p>

              <p className='leading-11'><span className='text-transparent'>***</span>My journey started with web development, but my curiosity gradually led me towards Linux, cloud infrastructure, and DevOps. </p>

              <p className='leading-11'><span className='text-transparent'>###</span>I enjoy working with Linux, exploring AWS services, experimenting with Docker, and discovering how applications move from code to production. </p>
              <p className='leading-11'> <span className='text-transparent'>$$$</span>For me, technology isn't just about writing code — it's about understanding systems, solving problems, and never stopping learning.</p>
        </div>

             <div className='flex justify-between'>
               <ul class="list-[circle] list-inside text-2xl text-blue-700 font-bold">Fluency in Languages
                  <li>English</li>
                  <li>Hindi</li>
                  <li>Kannada</li>
                </ul>

                <ul>
                  <li></li>
                </ul>

             </div>

      </div>
                

          <div className='w-2/5 h-full bg-yellow-50'>
               <div className='w-full h-4/6 bg-purple-400 border-b-2 rounded-b-4xl'></div>
                 <div className='w-full h-2/6 bg-yellow-50 p-5 grid grid-cols-2 gap-5'>
                 <a
    href="https://www.linkedin.com/in/ishrat-posge-995506285/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bma0M9yifRQWpVbZEFbzX9g%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit my LinkedIn profile"
      className='flex gap-2 text-xl items-center justify-center '
  >
    <LinkedIn className="w-10 h-10 hover:scale-110 transition-transform" />ishrat-posge
  </a>
                 <a
    href="https://github.com/ishDev-pixel"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit my GitHub profile"
    className='flex gap-2 text-xl items-center justify-center'
  >
    <GitHub className="w-10 h-10 hover:scale-110 transition-transform" />ishDev-pixel
  </a>
                 <a className=' flex justify-center items-center gap-2'><WhatsApp  className="w-10 h-10 hover:scale-110 transition-transform" />6361200626</a>
                 <a className=' flex justify-center items-center gap-2'><Gmail  className="w-10 h-10 hover:scale-110 transition-transform  " />posgeishrat@gmail.com</a>

                 </div>
     

          </div>

      
    </div>
    </>
  )
}

export default About
