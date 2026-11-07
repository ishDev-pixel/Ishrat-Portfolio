import React from 'react'
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
      
    </div>
    </>
  )
}

export default Skills
