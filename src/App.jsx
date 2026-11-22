
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'



const App = () => {
  return (
<div>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='contact' element={<Contact/>}/>
     </Routes>
      
    
      
    </div>
  )
}

export default App