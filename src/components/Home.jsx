import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='h-screen w-screen flex'>
        <div className='w-1/2 h-full bg-yellow-300'></div>
         <div className='w-1/2 h-full bg-pink-500 px-60 py-25'>
         <div className='h-100 w-110 bg-blue-300'> </div>
         </div>
      
    </div>
    </>
  )
}

export default Home
