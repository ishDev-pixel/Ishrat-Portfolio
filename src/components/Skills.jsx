
import Terraform from './svg/Terraform'
import Git from './svg/Git'
import GitLab from './svg/GitLab'
import Jenkins from './svg/Jenkins'
import AmazonWebServices from './svg/AmazonWebServices'
import Docker from './svg/Docker'
import Grafana from './svg/Grafana'
import Navbar from './Navbar'
import Linux from './svg/Linux'
import GitHub from './svg/GitHub'
import { ArrowRight } from 'lucide-react'
import TailwindCSS from './svg/TailwindCSS'
import HTML5 from './svg/HTML5'
import CSS from './svg/CSS'
import React from './svg/React'
import JavaScript from './svg/Javascript'


const Skills = () => {
  return (
    <>
    <Navbar/>
    <div className='w-screen h-screen pt-22 flex flex-col items-center bg-blue-400'>
         <div className='w-200 h-50 bg-blue-200 border-2 border-blue-200 shadow-xl rounded-2xl  '>
            <div>
              <h3 className='py-0.2 px-3 font-bold text-xl '>Top Skills</h3>
                <div className=' flex gap-6 p-2 '>
                    <div className='h-10 w-20 py-6 ' ><AmazonWebServices/>AWS</div>
                 <div className='h-10 w-15'><Terraform/>Terraform</div>
                 <div className='h-10 w-15' > <Git/>Git</div>
                  <div className='h-10 w-15' ><GitLab/>GitLab</div>
                   <div className='h-10 w-15' ><Jenkins/>Jenkins</div>
                 
                   <div className='h-10 w-15' ><Docker/>Docker</div>
                    <div className='h-10 w-15' ><Grafana/>Grafana</div>
                    <div className='h-10 w-15' ><Linux/>Linux</div>
                    <div className='h-10 w-15'><GitHub/>GitHub</div>
                   
                   
                </div>
            </div>         
        </div> 

        <div className='h-full w-full flex gap-5 bg-amber-50'>

           <div className='w-1/3 bg-amber-500 h-full'>

           </div>


           <div className='w-1/3 bg-green-500 h-full'>

           </div>
              
          <div className='1/3 h-full grid grid-cols-2 bg-red-400 '>  
            <div className=' p-2 flex flex-col gap-8 '> 
            
                  <h1 className='font-bold text-xl'>Frontend Skills</h1>
              
                <div className='text-2xl text-blue-300 font-bold grid grid-cols-2 gap-8 place-items-center'>
                   
                  
                  <div className='size-10'><React/>React </div>
                  <div className='h-10 w-10'><JavaScript/>JavaScirpt</div>
                  
                  <div className='h-10 w-10'><TailwindCSS/>TailwindCss</div>
                  <div className='h-10 w-10'><HTML5/>HTML5</div>
                  <div className='h-10 w-10'><CSS/>CSS</div>
                 
                
               
                
                    <button className='w-45 h-7 border-2 border-blue-300 rounded-2xl flex items-center justify-center gap-0.5 '>Explore Projects<ArrowRight className='size-5'/></button> 
              </div>
            </div>
            

             
             
             
            
          </div> 

        </div>               
      
    </div>
    
    </>
  )
}

export default Skills
