 
 import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='w-screen h-22  flex  items-center justify-center fixed bg-blue-600'>
       <div className='text-4xl font-bold flex gap-15'>
        <button>Home</button>
        <button>Skills</button>
        <button>Projects</button>
        <button>About</button>
        <button >Contact</button>
        </div> 
      
    </div>
    </>
  )
}

export default Navbar
