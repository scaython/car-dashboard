import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSun } from '@fortawesome/free-solid-svg-icons'
import './Weather.scss'


import React from 'react'

const Weather = () => {
  return (
    <div className='widget'>
        <p className='location'>Palo Alto</p>
        <p className='degree'>39°</p>
        <div className="condition-wrapper">
          <FontAwesomeIcon icon={faSun} style={{color: "#fbff00", fontSize:'30px',zIndex:'1',}} />
          <p className='condition'>Sunny</p>
        </div>
        
    </div>
  )
}

export default Weather