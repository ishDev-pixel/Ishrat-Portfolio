import React from 'react'
import Navbar from './Navbar'
import {CodeXml,ArrowRight} from 'lucide-react'
import Terraform from './svg/Terraform'
import Git from './svg/Git'
import GitLab from './svg/GitLab'
import Jenkins from './svg/Jenkins'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='pt-22 h-screen w-screen flex bg-blue-300'>

        <div className='w-3/5 h-full  '>
        <div className='h-full w-full  p-3 gap-5 flex flex-col'>
            
        <div className='h-7 w-52  flex items-center justify-center border-blue-950 border-2 rounded-2xl font-normal bg-blue-200 text-blue-950'><CodeXml/>Welcome to my Portfolio</div> 
       <div className='text-8xl font-bold '>
        <h1>Hello,I'M <br></br> ISHRAT POSGE</h1>
        <h1 className='text-6xl'>CLOUD & DEVOPS TRAINEE</h1>
         <p className='text-4xl font-normal'>Building scalable websites, Automating Workflows and <br></br>exloring the Cloud. </p>
        </div>
        
        <button className='h-12 w-65 gap-0.5 text-2xl rounded-4xl border-blue-950 border-2 font-bold text-white bg-blue-600 flex items-center justify-center'><p>Exlore my Projects</p><span className='size-5'><ArrowRight/></span></button>
          
           <div className='w-full h-30 bg-blue-800 shadow-xl rounded-2xl border border-transparent'>
                <div className=' flex gap-5 p-2'>
                 <div className='h-10 w-15'><Terraform/></div>
                 <div className='h-10 w-15' > <Git/></div>
                   <div className='h-10 w-15' ><GitLab/></div>
                   <div className='h-10 w-15' ><Jenkins/></div>
                  
                   
                   

                </div>

            </div>   
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
