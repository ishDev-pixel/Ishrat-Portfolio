import React from 'react'
import Navbar from './Navbar'
import {CodeXml,ArrowRight} from 'lucide-react'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='pt-22 h-screen w-screen flex bg-blue-300'>

        <div className='w-3/5 h-full  '>
        <div className='h-full w-full  p-2 gap-5 flex flex-col'>
        <p className='h-5 w-52 overflow-hidden flex border-black rounded-2xl font-light bg-gray-600 px-0.5'><CodeXml/>Welcome to my Portfolio</p>
       <div className='text-8xl font-bold '>
        <h1>Hello,I'M <br></br> ISHRAT POSGE</h1>
        <h1 className='text-6xl'>CLOUD & DEVOPS TRAINEE</h1>
         <p className='text-4xl font-normal'>Building scalable websites, Automating Workflows and <br></br>exloring the Cloud. </p>
        </div>
        
        <button className='h-12 w-65 gap-0.5 text-2xl rounded-4xl border-blue-950 border-2 font-bold text-white bg-blue-600 flex items-center justify-center'><p>Exlore my Projects</p><span className='size-5'><ArrowRight/></span></button>
              
        </div>

        
        </div>



         <div className='w-2/5 h-full  px-20 py-25'>
         <div className='h-110 w-120 bg-purple-300'> </div>
         </div>
      
    </div>
    </>
  )
}

export default Home
