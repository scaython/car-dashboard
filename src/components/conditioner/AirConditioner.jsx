import React,{useState} from 'react'
import './AirConditioner.scss'
import { motion } from 'framer-motion'

const AirConditioner = () => {

  const [degree,setDegree] = useState(24)
 

  const handleIncrement = () =>{
    if(degree !== 29){
        setDegree(degree => degree + 1)
    }
    
  }

  const handleDecrease = () =>{

    if(degree !== 18){
        setDegree(degree => degree - 1)
    }
   
  }
  return (
    <motion.div 

       className='wrapper'
      
    >
        <div className="group">
        <div className="button decrease" onClick={handleDecrease}>
            -
        </div>
        <div className="degree">
            {degree}
        </div>
        <div className="button" onClick={handleIncrement}>
            +
        </div>
        </div>
        <hr />
      
    </motion.div>
  )
}

export default AirConditioner