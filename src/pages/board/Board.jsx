import React, {useState, useEffect, useRef} from 'react'
import "./Board.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import { faFlagCheckered, faLockOpen, faLock } from '@fortawesome/free-solid-svg-icons';
import { motion, animate, useAnimation } from "framer-motion"
import "../../components/Battery/Battery"
import Battery from '../../components/Battery/Battery';

function Board({handleSport, sportMode, speed}) {

  const [autoPilotOn, setAutoPilotOn] = useState(false);
  //const [sportMode,setSportMode] = useState(false);
  const [lock,setLock] = useState(false);
 
  
  

  let bootup = new Audio("../../../public/sounds/bootup.mp3")
  let lockSound = new Audio("../../../public/sounds/lock.mp3")
  
  let notification = new Audio("../../../public/sounds/notification.mp3")



  const handleLock = ()=>{
    setLock(!lock)
    lockSound.play()
  }
  const handlePilot = () =>{
    setAutoPilotOn(!autoPilotOn)
    if(autoPilotOn== false){
      notification.play()
    }
  }


  
  const controls = useAnimation();
  const sport = useAnimation();

  const sportStyle = {
    on_color:"red",
    off_color:"",
    
  }
 

  return (
    <div className='board-container'>


      <div className='speed-group'>
        <motion.div className="speed" animate={controls}  >
          {speed}
        </motion.div>
        <div className="kmh">
          KMH
        </div>
      </div>

      <Battery/>

      <motion.div className="button-group" 
      initial={{
        y:200
      }}
      animate={{
        y:-30
      }}>
        <button className='btn-auto' onClick={handlePilot}>
          {autoPilotOn? (
            <motion.span animate={{rotate:360, scale:1.2}}>
             <FontAwesomeIcon icon={faTaxi} style={{ color: "#fad900", background: "none", marginLeft: "40px" }} />
           </motion.span>
          ):(
            <motion.span >
            <FontAwesomeIcon icon={faTaxi} style={{ color: "", background: "none", marginLeft: "40px" }} />
            </motion.span>
          )}
          <span className='text'>
             Autopilot

          </span>
        </button>

        <button className='btn-sport' onClick={handleSport}>
          <motion.span    animate={sportMode?{
              rotate:[0,-20,-20],
              y:[0,-3,5],
              scale:1.1,
              
              textShadow: "0 5px 50px #0072ff, 0 0 20px red",
              transition:{
               duration:0.7,
               
              }
            }:{}}>
            <FontAwesomeIcon icon={faFlagCheckered}  style={{ color: sportMode? sportStyle.on_color:sportStyle.off_color , background: "none", marginLeft: "40px" }}
            />
          </motion.span>
            <motion.span 
            initial={{
              x:10,
              opacity:1
            }}
            animate={sportMode?{
                x:[-500,10],
                opacity:[0,0.5,1],
                color:"#30475E"
            }:{}}>

               Sport
            </motion.span>
        </button>

        <button className='btn-lock' onClick={handleLock}>
          {lock || autoPilotOn? (
              <motion.span animate={{ scale: [1,1.2,1], rotate:[0,5,0], originX:0.5, transition:{duration:0.2}}}>
               <FontAwesomeIcon icon={faLock}  style={{ color: "#2796E5", background: "none", marginLeft: "40px", transition:"1s" }} />
              </motion.span>
          ):( <span>
            <FontAwesomeIcon icon={faLockOpen}  style={{ color: "", background: "none", marginLeft: "40px" }} />
            </span>)}
         
          <span className= {lock? "text locked" : "text"}>Lock</span></button>
      </motion.div>
    </div>
  )
}

export default Board