import React from 'react'
import { BsMusicNoteBeamed } from 'react-icons/bs';
import './DisplayTrack.scss'

const DisplayTrack = ({currTrack, audioRef}) => {
  return (
    <div>
    <audio src={currTrack.src} ref={audioRef} />
    <div className="audio-info">
      <div className="audio-image">
        {currTrack.thumb ? (
          <img src={currTrack.thumb} alt="audio avatar" />
        ) : (
          <div className="icon-wrapper">
            <span className="audio-icon">
              <BsMusicNoteBeamed />
            </span>
          </div>
        )}
      </div>
      <div className="text">
        <p className="title">{currTrack.title}</p>
        <p className='author'>{currTrack.author}</p>
      </div>
    </div>
  </div>
  )
}

export default DisplayTrack