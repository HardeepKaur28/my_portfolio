import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import ErrorPage from './components/ErrorPage'
import '@fortawesome/fontawesome-free/css/all.css';

import "../src/App.css" 
import Footer from './components/Footer'
function App() {
  return (
    <>
   
   <BrowserRouter>
   <Navbar />
   <Routes>
    
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/education' element={<Education />}/>
    <Route path='/skills' element={<Skills />}/>
    <Route path='/projects' element={<Projects/>} />
    <Route path='/contact' element={<Contact/>}/>
    <Route path="*" element={<ErrorPage />}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App