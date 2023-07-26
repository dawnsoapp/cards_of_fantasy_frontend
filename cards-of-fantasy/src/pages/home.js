import '../App.css';
import React from "react";
import '../components/NavBar.css';
import Navbar from '../components/NavBar'

const Home = () => {
    return (
        <div className="App">
        <header className="App-header">
          <p>
            Welcome to Dawn's Cards of Fantasy!
          </p>
        </header>
        <div class="Select-box">
          <p class="menu-title">MENU</p>
            <Navbar />
        </div>
      </div>
    )
}

export default Home;