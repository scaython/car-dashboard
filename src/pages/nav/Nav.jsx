import React, { useEffect, useState, useRef } from 'react'
import "./Nav.scss"
import { motion } from "framer-motion"

 
const Nav = () => {
  

  return (
    <motion.div className='nav-wrapper'
     initial={{
      opacity:0
     }}
     animate={{
      opacity:1,
      transition:{
        duration:1
      }
     }}
    > 
      
      <iframe 
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101391.54238615619!2d-122.20539002759268!3d37.425629339051454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb07b9dba1c39%3A0xe1ff55235f576cf!2sPalo%20Alto%2C%20Kaliforniya%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1689159457611!5m2!1str!2str" 
         width="1600" 
         height="800" 
         style={{border:0, borderRadius:"15px"}}
          allowFullScreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
    

      ></iframe>
    </motion.div>
  )
}

export default Nav