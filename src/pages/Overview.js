import React from 'react';
// Styling
import '../styles/overview.css';
// Resources
import clicknotes from '../resources/clicknotes.png';
import cas from '../resources/cas.png';
import boxedin from '../resources/boxedin.png';
import gradder from '../resources/gradder.jpg';
import tempad from '../resources/tempad.png';
import playlist from '../resources/playlist.png';
import food from '../resources/food.png';
import coronaware from '../resources/coronaware.png';
// Components
import Card from '../components/Card';
import Minicard from '../components/Minicard';

export default function Overview() {

    return (
        <div className="overview">
            <h1 data-aos="fade-in" data-aos-duration="5000">
                Check out what I've been working on.
            </h1>
            <h2 data-aos="fade-right" id="full-stack">
                Fully developed web platforms
            </h2>
            <Card no={[3, 1]}
                img={clicknotes}
                title={"IB Click Notes"}
                desc={"Interactive notes for active revision. Designed for IB students."}
                url={"https://ibclicknotes.me"}
            />
            <Card no={[3, 2]}
                img={cas}
                title={"CAS Launchpad"}
                desc={"Crowdsourced database of CAS experiences for IB students, categorised."}
                url={"https://caslaunchpad.netlify.app"}
            />
            <Card no={[3, 3]}
                img={boxedin}
                title={"Boxed In"}
                desc={"Boxed In is a virtual care package platform for students and teachers to connect virtually while classes are moved online."}
                url={"https://github.com/mee-kell/Boxed-In"}
            />
            <Card no={[3, 4]}
                img={gradder}
                title={"Gradder"}
                desc={"An affordable school management system. Worked as a front-end developer intern to implement the user interface."}
                url={"https://github.com/Gradder-Official/gradder_main"}
            />
            <h2 id="hacks" data-aos="fade-right">
                Hackathon projects
            </h2>
            <Card no={[5, 1]}
                img={tempad}
                title={"TemPad Timeline"}
                desc={"Shows the Marvel Cinematic Universe timeline, and what might have happened in a different universe."}
                url={"tempad.tech"}
            />
            <Card no={[5, 2]}
                img={playlist}
                title={"Playlist Generator"}
                desc={"Creates a playlist of songs based on an artist name."}
                url={"https://playlist-builder.meekell.repl.co"}
            />
            <Card no={[5, 3]}
                img={food}
                title={"Recipe Builder"}
                desc={"Creates a list of recipes based on one ingredient."}
                url={"https://im-hungry-for.meekell.repl.co"}
            />
            <Card no={[5, 4]}
                img={coronaware}
                title={"Coronaware"}
                desc={"A Covid-19 game to raise awareness about infection prevention."}
                url={"https://replit.com/talk/share/CORONAWARE-CODE-JAM-9/31316"}
            />
            <h2 id="experiments" data-aos="fade-right">
                Other experiments
            </h2>
            <div className="minicards">
                <Minicard
                    title={"Hand gesture recognition"}
                    desc={"Computer vision program to recognise hand shapes from the camera."}
                    url={"https://github.com/mee-kell/fingers"}
                />
                <Minicard
                    title={"Web scraping"}
                    desc={"Web scraping from GoodReads in Python."}
                    url={"https://github.com/mee-kell/web-scraper"}
                />
                <Minicard
                    title={"Guess the word"}
                    desc={"A hangman game to be played on text messaging using Twilio."}
                    url={"https://github.com/mee-kell/guess-the-word"}
                />
                <Minicard
                    title={"Happy birthday image generator"}
                    desc={"Builds a happy birthday message based on image search."}
                    url={"https://happy-birthday.meekell.repl.co/"}
                />
                <Minicard
                    title={"Pseudo-blockchain"}
                    desc={"Simulating the blockchain process in Python."}
                    url={"https://github.com/mee-kell/blockchain-tutorial"}
                />
                <Minicard
                    title={"Flappy Bird"}
                    desc={"Recreated the Flappy Bird game in Kaboom.js."}
                    url={"https://replit.com/@meekell/Flappy-Bird?v=1"}
                />
                <Minicard
                    title={"Deep Unlearning"}
                    desc={"Research and innovation challenge on combating biases in AI."}
                    url={"https://drive.google.com/drive/folders/1C_YPiMS30SyiFQNuzDbmNS4TlM3u_WEb?usp=sharing"}
                />
                <Minicard
                    title={"New Tab Page"}
                    desc={"New Tab page with time, weather, focus and links."}
                    url={"https://replit.com/@meekell/NewTab-Focus"}
                />
            </div>
        </div>
    )
}
