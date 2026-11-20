import Navbar from './Navbar'
import { motion } from 'framer-motion'
import Linux from './svg/Linux'
import AmazonWebServices from './svg/AmazonWebServices'
import Docker from './svg/Docker'
import Terraform from './svg/Terraform'
import React from './svg/React'
import Git from './svg/Git'
import GitHub from './svg/GitHub'
import TailwindCSS from './svg/TailwindCSS'
import Nginx from './svg/Nginx'
import LinkedIn from './svg/LinkedIn'
import WhatsApp from './svg/WhatSapp'
import Gmail from './svg/Gmail'



const Contact = () => {
  return (
    <> <Navbar/>
       <div className='w-screen h-screen pt-22'>
         <diV className='w-full h-125 bg-blue-300 flex gap-5 p-5'>
             <div className='w-3/5 h-full '>
                <div className=''>
                   <div className='flex p-2 '>
                       <div className=' w-190 text-5xl font-medium text-blue-50 text-center'>LET'S WORK TOGETHER</div>
                      <div className=' p-2 '>
                           <motion.h1 className=' border-2 border-blue-50 shadow-2xl rounded-2xl w-30 text-center text-2xl font-bold text-blue-50 '
                               whileHover={{scale:1.1}}>Hire me!</motion.h1>
                     </div>  
                  </div>
                  <div className='text-2xl font-medium  grid grid-cols-2 gap-10 w-190 p-5'>
                     <a
                        href="https://www.linkedin.com/in/ishrat-posge-995506285/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bma0M9yifRQWpVbZEFbzX9g%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my LinkedIn profile"
                        className='flex gap-2 text-xl items-center justify-center text-blue-50'>
                        <LinkedIn className="w-10 h-10 hover:scale-110 transition-transform" />ishrat-posge
                    </a>
                    <a
                        href="https://github.com/ishDev-pixel"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my GitHub profile"
                        className='flex gap-2 text-xl items-center justify-center'>
                       <GitHub className="w-10 h-10 hover:scale-110 transition-transform" /><p className='text-blue-50'>ishDev-pixel</p>
                    </a>
                    <a className=' flex justify-center items-center text-blue-50 gap-2'><WhatsApp  className="w-10 h-10 hover:scale-110 transition-transform" />6361200626</a>
                    <a className=' flex justify-center items-center text-blue-50 gap-2'><Gmail  className="w-10 h-10 hover:scale-110 transition-transform  " />posgeishrat@gmail.com</a>

                  </div> 

                    <div className=' w-full h-60 text-2xl text-white p-2 font-medium'>
                      <p> LET'S BUILD SOMETHING GREAT!  </p>
                      <p> I'm currently open to exciting career opportunities in Cloud Computing and DevOps.</p>
                      <p> I'm a dedicated, adaptable and curious learner who loves taking on challenges and turning ideas into reality.</p>
                      <p>Give me an opportunity, and I'll give my best to make a difference in your team!</p>
                    </div> 
                </div>
            </div>
            <div className='w-2/5 h-full bg-sky-200 flex-col py-5 px-10'>
               <div className='h-90 w-130 bg-red-200 '></div>
               <h1 className='text-center text-sky-50 text-6xl'>Ishrat Posge</h1>
            </div>
         </diV>
         <div className='bg-blue-200 w-full h-30 rounded-b-4xl flex py-3 p-13 gap-27'>
            <motion.div className='size-17 py-5 text-center' whileHover={{scale:1.1}} ><AmazonWebServices/>AWS</motion.div>
            <motion.div className='size-12 text-center'whileHover={{scale:1.1}}><Terraform/>Terraform</motion.div>
            <motion.div className='h-10 w-15 text-center' whileHover={{scale:1.1}}><Docker/>Docker</motion.div>
            <motion.div className='h-10 w-17 text-center' whileHover={{scale:1.1}}> <Git/>Git</motion.div>
            <motion.div className='h-10 w-15 text-center' whileHover={{scale:1.1}}><Linux/>Linux</motion.div>
            <motion.div className='size-17 text-center' whileHover={{scale:1.1}}><React/>React </motion.div>
            <motion.div className='h-10 w-15 text-center' whileHover={{scale:1.1}}><GitHub/>GitHub</motion.div>
            <motion.div className='size-17 py-5 text-center' whileHover={{scale:1.1}}><TailwindCSS/>TailwindCss</motion.div>
            <motion.div className='size-16 text-center' whileHover={{scale:1.1}}><Nginx/>Nginx</motion.div>
          </div>


      
       </div>
    </>
  )
}

export default Contact
