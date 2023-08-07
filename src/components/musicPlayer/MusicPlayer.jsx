import React, { useState, useRef } from 'react'

import './MusicPlayer.scss'
import DisplayTrack from './DisplayTrack'
import Controls from './Controls'
import ProgressBar from './ProgressBar'
import { tracks } from '../../data/data'
import { motion } from 'framer-motion'

const MusicPlayer = () => {

    
    const [trackIndex, setTrackIndex] = useState(0);
    const [currTrack, setCurrentTrack] = useState(tracks[trackIndex]);

  const audioRef = useRef();
    
    return (
        <motion.div className='player-widget-wrapper'>
            <div className="left">
                <DisplayTrack currTrack={currTrack} audioRef={audioRef} />
                <Controls audioRef={audioRef}   {...{

                    tracks,
                    trackIndex,
                    setTrackIndex,
                    setCurrentTrack,
                }} />
                
            </div>
            <div className="right">

            </div>
        </motion.div>
  )
}

export default MusicPlayer