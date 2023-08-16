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
        <main>
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
            <div className="info-box">
                <h1>What is Final Fantasy?</h1>
                <p> Final Fantasy is a massive multiplayer online role-playing game first released in 2010.
                    Since then, it has grown and flourished into a full-fledged RPG with one of the biggest
                    gaming communities.
                </p>
                <p> The game is set in a fantasy region of Eorzea where they have just recovered from a 
                    Great Calamity; however, darkness and corruption still stirs in the mist, and you,
                    the Warrior of Light, are there to uncover the darkness with the help of the Scions!
                </p>
                <p> As you traverse deeper and deeper, the web becomes more intricate, you meet more 
                    characters, spread your wings into different worlds and classes.
                    Completely immerse yourself into the world of FFXIV!
                </p>
            </div>
        </main>
    </div>
        
    )
}

export default FFXIV;