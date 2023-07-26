import { NavLink } from 'react-router-dom';
import React from "react";

const Navbar = () => {
    return (
        <>
        <nav>
            <NavLink to="/dawn">Talk to Dawn</NavLink>
            <NavLink to="/game">Think Like an Astrologian</NavLink>
            <NavLink to="/ffxiv">FFXIV</NavLink>
        </nav>
        </>
    )
}

export default Navbar;