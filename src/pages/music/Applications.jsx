import React from 'react'
import "./Applications.scss"
import Weather from '../../components/weather/Weather'
import ConsumptionWidget from '../../components/consumption/ConsumptionWidget'
import AirConditioner from '../../components/conditioner/AirConditioner'
const Applications = () => {
  return (
    <div className='apps-wrapper'>
      <Weather/>
      <AirConditioner/>
      <ConsumptionWidget/>
      
    </div>
    
  )
}

export default Applications


