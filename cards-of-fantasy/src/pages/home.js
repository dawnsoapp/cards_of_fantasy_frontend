import '../App.css';
import React from "react";
import '../components/NavBar.css';
import Navbar from '../components/NavBar'
import dawnhome from '../imgs/dawnhome.png';

const Home = () => {
    return (
        <div className="App">
        <header className="App-header">
          <p>
            Welcome to Dawn's Cards of Fantasy!
          </p>
        </header>
        <main>
        <div className="Select-box">
          <p className="menu-title">MENU</p>
            <Navbar />
        </div>
        <img src={dawnhome} className="img" alt=""/>
        </main>
      </div>
    )
}

export default Home;