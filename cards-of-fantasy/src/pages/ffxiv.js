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

    return (
    <div className="App">
        <header className="Page-header">
        <Mininav />
        <p className="game-title">Have you heard of the critically acclamined MMORPG...?</p>
        </header>
        <div className="info-box">
            <h1>What is Final Fantasy?</h1>
            <p>Final Fantasy is a game created by Square Enix.</p>
        </div>
        <div className="slideshow-box">
            <AliceCarousel autoplay autoPlayInterval="5">
            <h2>
                <a 
                href="https://na.finalfantasyxiv.com/dawntrail"
                target="_blank"
                rel="noreferrer">
                <img src={dawntrail} className="sliderimg" alt=""/>
                </a>
                <footer>New expansion coming Summer 2024!</footer>
            </h2>
            <h2>
                <a
                href="https://fanfest.finalfantasyxiv.com/"
                target="_blank"
                rel="noreferrer">
                <img src={fanfest} className="sliderimg" alt=""/>
                </a>
                <footer>Latest annoucements for what's to come and an amazing convention!</footer>
            </h2>
            <h2>
                <a
                href="https://na.finalfantasyxiv.com/lodestone/community_finder/"
                target="_blank"
                rel="noreferrer">
                <img src={community1} className="sliderimg" alt=""/>
                </a>
                <footer>Are you a Warrior of Light and looking for fellow adventurers? Check out the community hub and free companies!</footer>
            </h2>
            <h2>
                <a
                href="https://na.finalfantasyxiv.com/"
                target="_blank"
                rel="noreferrer">
                <img src={community2} className="sliderimg"alt=""/>
                </a>
                <footer>Ready to start your adventure? Join with the free trial today!</footer>
            </h2>
            </AliceCarousel>
        </div>
    </div>
        
    )
}

export default FFXIV;