import React from 'react'
import "./Applications.scss"
import Weather from '../../components/weather/Weather'
import ConsumptionWidget from '../../components/consumption/ConsumptionWidget'
import AirConditioner from '../../components/conditioner/AirConditioner'
import MusicPlayer from '../../components/musicPlayer/MusicPlayer'
const Applications = () => {
  return (
    <>
     <div className='apps-wrapper'>
      <div className="upper-row">
       <Weather/>
       <AirConditioner/>
       <ConsumptionWidget/>
      </div>
    <div className='second-row'>
     <MusicPlayer/>
    </div>
    </div>
 
    
    </>
 
  )
}

export default Applications


