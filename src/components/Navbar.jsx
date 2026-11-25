 
 import React from 'react'
 import { motion } from "framer-motion";
 import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav>
    <div className='w-screen h-22  flex  items-center justify-center fixed bg-blue-600'>
      <div className='text-4xl font-bold flex gap-15 justify-between text-blue-50'>
      <Link to="/">  <motion.button   
            whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
            whileTap={{ scale: 0.95 }}
            style={{
                 padding: "12px 24px",
                 backgroundColor: "#2563eb",
                 color: "white",
                 border: "none",
                 borderRadius: "50px",
                 cursor: "pointer",
                }}>Home
        </motion.button> </Link> 


        <Link to="/skills"><motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
            whileTap={{ scale: 0.95 }}
            style={{
                   padding: "12px 24px",
                   backgroundColor: "#2563eb",
                   color: "white",
                   border: "none",
                   borderRadius: "50px",
                   cursor: "pointer",
                   }}
                >Skills 
         </motion.button> </Link>


        <Link to="/about"><motion.button
             whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
             whileTap={{ scale: 0.95 }}
             style={{
                    padding: "12px 24px",
                    backgroundColor: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "50px",
                    cursor: "pointer",
                    }}
                  >About
         </motion.button> </Link>
         
         <Link to=""></Link><motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
            whileTap={{ scale: 0.95 }}
            style={{
                    padding: "12px 24px",
                    backgroundColor: "#2563eb",
                     color: "white",
                     border: "none",
                     borderRadius: "50px",
                     cursor: "pointer",
                   }}
                  >Projects
        </motion.button>

         <Link to="/contact"><motion.button
             className='border-0 bg-blue-300 shadow-2xl w-40 h-16 rounded-2xl'
             whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
             whileTap={{ scale: 0.95 }}
             >Contact
         </motion.button></Link>
        
      </div> 
      
    </div>
    </nav>
    </>
  )
}

export default Navbar
