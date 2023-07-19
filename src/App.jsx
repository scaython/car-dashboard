import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Board from "./pages/board/Board"
import Music from "./pages/music/Music"
import Nav from "./pages/nav/Nav"
import { Route,Routes } from 'react-router-dom'
import AnimatedRoutes from './AnimatedRoutes'


function App() {
  
  const [sportMode,setSportMode] = useState(false);
  const [theme,setTheme] = useState("");
  const [speed, setSpeed] = useState(0);
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true)
  }, [])
  const detectKeyDown = (e) => {
    if (e.key === "w") {
      setSpeed(speed => speed + 1)


    }

  }

 
  const handleSport = () =>{
    setSportMode((sportMode)=>!sportMode)
    if(!sportMode){
      setTheme("sport")
    }else{
      setTheme("")
    }
    console.log("handleSport called!");

  }
  return (
    <>
      <div className={`app ${theme}`} >
       <Navbar/>
       <div className="page-container">
          <Routes>
                <Route path='/' element={<Board  handleSport={handleSport} sportMode={sportMode} speed={speed} />} />
                <Route path='/board' element={<Board   handleSport={handleSport} sportMode={sportMode} speed={speed}/>} />
                <Route path='/music' element={<Music />} />
                <Route path='/nav' element={<Nav />} />
            </Routes>
       </div>
      </div>
     
    </>
  )
}

export default App
