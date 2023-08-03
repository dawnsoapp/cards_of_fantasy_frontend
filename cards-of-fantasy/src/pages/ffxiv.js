import React from "react";
import './ffxiv.css';
import '../components/mininav.css';
import Mininav from '../components/mininav'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import dawntrail from '../imgs/dawntrail.jpeg';
import fanfest from '../imgs/fanfest.jpeg';
import community1 from '../imgs/community1.jpeg';
import community2 from '../imgs/community2.png';

function FFXIV() {

    const handleLinkClick = (event, message) => {
        console.log('Link element clicked');
        console.log(message);
    }
    return (
        <div className="App">
        <header className="Page-header">
        <Mininav />
        <p className="game-title">Have you heard of the critically acclamined MMORPG...?</p>
        </header>
        <div className="slideshow-box">
            <AliceCarousel autoplay autoPlayInterval="5" style="width: 500px">
            <p>
                <a 
                href="https://na.finalfantasyxiv.com/dawntrail"
                target="_blank"
                rel="noreferrer">
                <img src={dawntrail} className="sliderimg" alt=""/>
                </a>
            <footer>New expansion coming Summer 2024!</footer>
            </p>
            <p><img src={fanfest} className="sliderimg" alt=""/></p>
            <p><img src={community1} className="sliderimg" alt=""/></p>
            <p><img src={community2} className="sliderimg"alt=""/></p>
            </AliceCarousel>
        </div>
        </div>
        
    )
}

export default FFXIV;