import React from 'react'
import Navbar from './Navbar'

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
                

          <div className='w-2/5 h-full bg-purple-400'>
     

          </div>

      
    </div>
    </>
  )
}

export default About
