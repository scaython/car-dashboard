import React, { useState } from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const Navbar = ({theme}) => {

    const [active,setActive] = useState("board");
    let navbarClick = new Audio("../../../public/sounds/navbar-click.mp3")
    const handleClick = (tab) =>{
        setActive(tab)
        navbarClick.play()
    }
    return (
        
        <>
            <motion.div className={`nav ${theme}`}   >
            
 

                <Link to="/board"   className={active === 'board' ? 'btn active' : 'btn'} onClick={()=>handleClick('board')}>
                    Board 
                </Link>
                <Link to="/nav"   className={active === 'nav' ? 'btn active' : 'btn'} onClick={()=>handleClick('nav')}>
                    Nav
                </Link>
                <Link to="/apps"   className={active === 'music' ? 'btn active' : 'btn'} onClick={()=>handleClick('music')}>
                    Apps
                </Link>
            </motion.div>

        </>
    )
}

export default Navbar