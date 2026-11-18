import Navbar from './Navbar'

const Contact = () => {
  return (
    <> <Navbar/>
       <div className='w-screen h-screen pt-22'>
        <diV className='w-full h-100 bg-blue-300 flex gap-5 p-5'>
            <div className='w-1/3 h-full bg-blue-400'>
                <div>
                    <h1>Hire me!</h1>
                    <h1>Ishrat I Posge</h1>
                    <h1>BCA Graduate</h1>
                </div>
              </div>
            <div className='w-2/3 h-full bg-purple-400'></div>
        </diV>
        <div className='bg-blue-200 w-full h-30 rounded-b-4xl'></div>


      
       </div>
    </>
  )
}

export default Contact
