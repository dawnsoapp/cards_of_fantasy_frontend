import { NavLink } from 'react-router-dom';
import React from "react";

const Mininav = () => {
    return (
        <>
        <nav className="mini-nav">
            <NavLink to="/home">Back</NavLink>
        </nav>
        </>
        
    )
}


export default Mininav;