import React from 'react'
import Navbar from './components/navbar/Navbar'
import Board from "./pages/board/Board"
import Music from "./pages/music/Music"
import Nav from "./pages/nav/Nav"
import { Route,Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

const AnimatedRoutes = () => {
  
  const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Board />} />
                <Route path='/board' element={<Board />} />
                <Route path='/music' element={<Music />} />
                <Route path='/nav' element={<Nav />} />
            </Routes>
        </AnimatePresence>
  )
}

export default AnimatedRoutes