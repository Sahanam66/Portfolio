import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Project from './components/Project'
import Timelines from './components/Timelines'

const App = () => {
  return (
    <div>
     <Router>
       <Nav/>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/Skills' element={<Skills/>}/>
       <Route path='/Projects' element={<Project/>}/>
       <Route path='/Timeline' element={<Timelines/>}/>
       </Routes>
      </Router> 
    </div>
  )
}

export default App
