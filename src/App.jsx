import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import About from './Components/pages/About';
import Resume from './Components/pages/Resume';
import Service from './Components/pages/Service';
import Works from './Components/pages/Works';
import Review from './Components/pages/Review';
import Routlayouts from './Components/Layouts/Routlayouts';
import Home from './Components/pages/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

   <Routes>
    {/* <Route path="" element={<Error/>}/> */}

       <Route path="/" element={<Routlayouts/>}> 

         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/resume' element={<Resume/>} />
         <Route path='/service' element={<Service/>} />
         <Route path='/works' element={<Works/>} />
         <Route path='/review' element={<Review/>} />
         
       </Route>
   
    </Routes>
    </>
  )
}

export default App
