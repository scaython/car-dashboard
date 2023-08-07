import React, { useState , useEffect} from 'react'
import './Controls.scss'
import {
    IoPlayBackSharp,
    IoPlayForwardSharp,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    IoPlaySharp,
    IoPauseSharp,
  } from 'react-icons/io5';

const Controls = (
 {  audioRef,
    tracks,
    trackIndex,
    setTrackIndex,
    setCurrentTrack,
  }) => {
  const [isPlaying, setisPlaying] = useState(false)
  
  const togglePlayPause = () => {
    setisPlaying((prev) => !prev);
  }
  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };
  
  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };
  
  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };
  
  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };
  
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  return (
    <div className="controls-wrapper">
    <div className="controls">
      <button onClick={handlePrevious}>
        <IoPlaySkipBackSharp />
      </button>
      <button onClick={skipBackward}>
        <IoPlayBackSharp />
      </button>

      <button onClick={togglePlayPause}>
        {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
      </button>
      <button onClick={skipForward}>
        <IoPlayForwardSharp />
      </button>
      <button onClick={handleNext}>
        <IoPlaySkipForwardSharp />
      </button>
    </div>
  </div>
  )
}

export default Controls