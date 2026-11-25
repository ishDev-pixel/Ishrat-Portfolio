import { motion } from "framer-motion";
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
import Kubernetes from "./svg/Kubernetes";



const Skills = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full h-full pt-22 flex flex-col gap-5 items-center bg-blue-300'>
        <div className='w-200 h-50 p-4'>
         <div className='w-200 h-40 bg-blue-200 border-2 border-blue-200 shadow-xl rounded-2xl  '>
            <div>
              <h3 className='py-0.2 px-3 font-bold text-xl text-center '>Top Skills</h3>
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

        <div className='h-full  flex  gap-5  '>
              
           <div className='w-1/4  h-full flex flex-col gap-4  font-bold text-xl p-4 border-6 border-blue-50 rounded-2xl shadow-2x'>
              <h1>Cloud & Infrastructure</h1>
           
           <diV className='grid grid-cols-2 gap-15'>
               <div className='size-10'><AmazonWebServices/>AWS</div>
               <div className='size-10'><Terraform/>Terraform</div>
              <div className='size-10'>EC2</div>
              <div>AWS Cli</div>
              <div>S3</div>
              <div>EBS</div>
              <div>VPC</div>
              <div>IAM</div>
              

           </diV>
             
                      <div className='w-full px-10 py-5'>
                    <motion.button className='w-55 h-10 border-2 border-blue-200 shadow-2xl rounded-2xl flex items-center justify-center gap-0.5 '
                                    whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8",color:"white"}}
            whileTap={{ scale: 0.95 }}
            >Explore Projects<ArrowRight className='size-5'/></motion.button> 
                       </div>


           </div>


           <div className='w-2/4 h-full flex flex-col gap-4  font-bold text-xl p-2 border-6 border-blue-50 rounded-2xl shadow-2xl '>
            <h1 className='text-center'>DevOps & Automation</h1>
            <div className='grid grid-cols-2 gap-20 place-items-center'>
                  <div className='h-20 w-25' ><Docker/>Docker</div>
                  <div className='h-10 w-15' ><Jenkins/>Jenkins</div>
                  <div className='h-10 w-15' > <Git/>Git</div>
                  <div className='h-10 w-15'><GitHub/>GitHub</div>
                  <div className='h-10 w-15'><Terraform/>Terraform</div>
                  <div className='h-17 w-18 '><Kubernetes/></div>
            </div>
               <div className='w-full px-70 py-20'>
                    <motion.button className='w-55 h-10 border-2 border-blue-200 shadow-2xl rounded-2xl flex items-center justify-center gap-0.5 '
                                    whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" ,color:"white"}}
            whileTap={{ scale: 0.95 }}
>Explore Projects<ArrowRight className='size-5'/></motion.button> 
                       </div>
                

           </div>
              
          <div className='w-1/4  h-full flex flex-col gap-4  font-bold text-xl p-4 border-6 border-blue-50 rounded-2xl shadow-2xl '>  
            
            
                  <h1 className='font-bold text-xl text-center'>Frontend Skills</h1>
              
                <div className='grid grid-cols-2 gap-15'>
                   
                  
                  <div className='size-10'><React/>React </div>
                  <div className='h-10 w-10'><JavaScript/>JavaScirpt</div>
                  <div className='size-10'><GitHub/>GitHub</div>
                  
                  <div className='h-10 w-10'><TailwindCSS/>TailwindCss</div>
                  <div className='h-10 w-10'><HTML5/>HTML5</div>
                  <div className='h-10 w-10'><CSS/>CSS</div>
                   </div>
                
               
                      <div className='w-full px-7 py-10'>
                    <motion.button className='w-55 h-10 border-2 border-blue-200  shadow-2xl rounded-2xl flex items-center justify-center gap-0.5 '
                                    whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8",color:"white" }}
            whileTap={{ scale: 0.95 }}
            >Explore Projects<ArrowRight className='size-5'/></motion.button> 
                       </div>
            
            

             
             
             
            
          </div> 

        </div> 

           <div className='w-250 h-70  flex gap-10 border-4 border-blue-50 rounded-2xl p-4 px-20'>
            <div>
            <h1 className='text-2xl font-bold '>Operating Systems & Networking</h1>
            <div className='text-xl font-bold'>
              <div >Linux</div>
              <div>Ubuntu</div>
              <div>Amazon Linux</div>
              <div>TCP/IP</div>
              <div>DNS</div>
              <div>SSH</div>
            </div>
            </div>
             <div>
              <h1 className='text-2xl font-bold'>Scripting Language</h1>
              <div className='text-xl font-bold'>Python</div>
             </div>

             <div>
              <h1 className='text-2xl font-bold'>DataBase</h1>
              <div className='text-xl font-bold'>SQL</div>
             </div>

            </div> 
            <div className='h-5 w-full '></div>             
      
    </div>
    
    </>
  )
}

export default Skills
