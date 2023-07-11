import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Board from "./pages/board/Board"
import Music from "./pages/music/Music"
import Nav from "./pages/nav/Nav"

import { Route,Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <div className='app'>
       <Navbar/>
       <div className="page-container">
         <Routes>
           <Route  path='/board' element={<Board/>}/>
           <Route  path='/music' element={<Music/>}/>
           <Route  path='/nav' element={<Nav/>}/>
         </Routes>
       </div>
      </div>
     
    </>
  )
}

export default App
