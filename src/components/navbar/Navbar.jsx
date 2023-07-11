import React, { useState } from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [active, setActive] = useState(null);
    return (
        
        <>
            <div className='nav'>
            
 

                <Link to="/board" className={active === 'board' ? 'btn active' : 'btn'} onClick={() => setActive('board')}>
                    Board 
                </Link>
                <Link to="/nav" className={active === 'nav' ? 'btn active' : 'btn'} onClick={() => setActive('nav')}>
                    Nav
                </Link>
                <Link to="/music" className={active === 'music' ? 'btn active' : 'btn'} onClick={() => setActive('music')}>
                    Music
                </Link>
            </div>

        </>
    )
}

export default Navbar