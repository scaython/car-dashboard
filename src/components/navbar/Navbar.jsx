import React, { useState } from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [active,setActive] = useState("board");
    let navbarClick = new Audio("../../../public/sounds/navbar-click.mp3")
    const handleClick = (tab) =>{
        setActive(tab)
        navbarClick.play()
    }
    return (
        
        <>
            <div className='nav'>
            
 

                <Link to="/board" className={active === 'board' ? 'btn active' : 'btn'} onClick={()=>handleClick('board')}>
                    Board 
                </Link>
                <Link to="/nav" className={active === 'nav' ? 'btn active' : 'btn'} onClick={()=>handleClick('nav')}>
                    Nav
                </Link>
                <Link to="/music" className={active === 'music' ? 'btn active' : 'btn'} onClick={()=>handleClick('music')}>
                    Music
                </Link>
            </div>

        </>
    )
}

export default Navbar