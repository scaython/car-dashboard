import React, {useState} from 'react'
import "./Board.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import { faFlagCheckered, faLockOpen, faLock } from '@fortawesome/free-solid-svg-icons';
function Board() {

  const [autoPilotOn, setAutoPilotOn] = useState(false);
  const [sportOn,setSportOn] = useState(false);
  const [lock,setLock] = useState(false);
 
  return (
    <div className='board-container'>
      
      
      <div className='speed-group'>
        <div className="speed">
          0
        </div>
        <div className="kmh">
          KMH
        </div>
      </div>


      <div className="battery-group">
      <svg width="394" height="144" viewBox="0 0 394 144" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_12_35)">
<rect width="386" height="129" rx="35" fill="#D9D9D9"/>
</g>
<g filter="url(#filter1_i_12_35)">
<rect width="348" height="129" rx="35" fill="#72FF4F"/>
</g>
<path d="M110.875 69.4062V75.9062H78.0938L77.75 70.9062L97.0312 40.5H103.625L96.5 52.5938L86.1562 69.4062H110.875ZM105.469 40.5V86H97.1875V40.5H105.469ZM150.176 79.5V86H119.364V80.4375L134.145 64.4688C135.687 62.7188 136.905 61.1979 137.801 59.9062C138.697 58.6146 139.333 57.4479 139.708 56.4062C140.103 55.3438 140.301 54.3333 140.301 53.375C140.301 51.9792 140.051 50.7604 139.551 49.7188C139.051 48.6562 138.322 47.8333 137.364 47.25C136.426 46.6667 135.27 46.375 133.895 46.375C132.374 46.375 131.072 46.7292 129.989 47.4375C128.926 48.125 128.114 49.0833 127.551 50.3125C127.01 51.5417 126.739 52.9479 126.739 54.5312H118.458C118.458 51.8438 119.083 49.3958 120.333 47.1875C121.583 44.9583 123.374 43.1771 125.708 41.8438C128.041 40.5104 130.812 39.8438 134.02 39.8438C137.145 39.8438 139.791 40.3646 141.958 41.4062C144.124 42.4271 145.77 43.8854 146.895 45.7812C148.02 47.6771 148.583 49.9375 148.583 52.5625C148.583 54.0208 148.343 55.4583 147.864 56.875C147.385 58.2917 146.708 59.6979 145.833 61.0938C144.978 62.4688 143.958 63.8646 142.77 65.2812C141.583 66.6979 140.26 68.1458 138.801 69.625L129.926 79.5H150.176ZM191.04 69.4062V75.9062H158.259L157.915 70.9062L177.196 40.5H183.79L176.665 52.5938L166.321 69.4062H191.04ZM185.634 40.5V86H177.353V40.5H185.634ZM228.643 40.5V86H220.049V40.5H228.643ZM255.955 40.5L237.705 62.6875L227.268 73.8438L225.736 65.5L232.986 56.0938L245.424 40.5H255.955ZM246.393 86L232.236 64.6875L238.393 59.125L256.611 86H246.393ZM271.35 59.125V86H263.1V52.1875H270.881L271.35 59.125ZM270.131 67.875H267.6C267.6 65.5208 267.881 63.3542 268.444 61.375C269.027 59.3958 269.881 57.6771 271.006 56.2188C272.131 54.7396 273.517 53.5938 275.163 52.7812C276.829 51.9688 278.756 51.5625 280.944 51.5625C282.465 51.5625 283.86 51.7917 285.131 52.25C286.402 52.6875 287.496 53.3854 288.413 54.3438C289.35 55.2812 290.069 56.5104 290.569 58.0312C291.069 59.5312 291.319 61.3333 291.319 63.4375V86H283.069V64.2812C283.069 62.6979 282.84 61.4583 282.381 60.5625C281.944 59.6667 281.308 59.0417 280.475 58.6875C279.642 58.3125 278.642 58.125 277.475 58.125C276.183 58.125 275.069 58.3854 274.131 58.9062C273.215 59.4062 272.454 60.1042 271.85 61C271.267 61.8958 270.829 62.9271 270.538 64.0938C270.267 65.2604 270.131 66.5208 270.131 67.875ZM290.694 66.3438L287.288 66.9688C287.308 64.8438 287.6 62.8542 288.163 61C288.725 59.125 289.548 57.4896 290.631 56.0938C291.735 54.6771 293.1 53.5729 294.725 52.7812C296.371 51.9688 298.267 51.5625 300.413 51.5625C302.079 51.5625 303.579 51.8021 304.913 52.2812C306.267 52.7396 307.423 53.4792 308.381 54.5C309.34 55.5 310.069 56.8021 310.569 58.4062C311.09 60.0104 311.35 61.9688 311.35 64.2812V86H303.038V64.25C303.038 62.6042 302.808 61.3438 302.35 60.4688C301.913 59.5938 301.277 58.9896 300.444 58.6562C299.61 58.3021 298.631 58.125 297.506 58.125C296.36 58.125 295.36 58.3438 294.506 58.7812C293.673 59.1979 292.965 59.7812 292.381 60.5312C291.819 61.2812 291.392 62.1562 291.1 63.1562C290.829 64.1354 290.694 65.1979 290.694 66.3438Z" fill="black"/>
<defs>
<filter id="filter0_i_12_35" x="0" y="0" width="386" height="129" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_12_35"/>
</filter>
<filter id="filter1_i_12_35" x="0" y="0" width="348" height="129" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_12_35"/>
</filter>
</defs>
</svg>


      </div>


      <div className="button-group">
        <button className='btn-auto'>
          <span>
            <FontAwesomeIcon icon={faTaxi} style={{ color: "#fad900", background: "none", marginLeft: "40px" }} />
          </span>
          Autopilot
        </button>
        <button className='btn-sport'>
          <span>
          <FontAwesomeIcon icon={faFlagCheckered}  style={{ color: "", background: "none", marginLeft: "40px" }} />
          </span>
          Sport</button>
        <button className='btn-lock'>
          <span>
          <FontAwesomeIcon icon={faLockOpen}  style={{ color: "", background: "none", marginLeft: "40px" }} />
          </span>
          Lock</button>
      </div>
    </div>
  )
}

export default Board