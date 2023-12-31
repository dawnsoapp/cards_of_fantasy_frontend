import { NavLink } from 'react-router-dom';
import React from "react";

const Navbar = () => {
    return (
        <>
        <nav className="nav-bar">
            <NavLink to="/dawn">Talk to Dawn</NavLink>
            <NavLink to="/game">Think Like an Astrologian</NavLink>
            <NavLink to="/ffxiv">FFXIV</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
        </>
    )
}


export default Navbar;