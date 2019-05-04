import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

import collabPreview from './images/GwGPreview.jpg';
import cardPreview from './images/megamanPreview.jpg';
import speedTestPreview from './images/typingSpeedTestPreview.jpg';
import mythicPreview from './images/mythicPreview.jpg';
import pixelPreview from './images/pixelArtPreview.jpg';
import askLibbiePreview from './images/Ask-Libbie-App-preview.png';
import myReadsPreview from './images/Book-Reads-App.png';

class HomeContainer extends Component {
    state = {
        myState: ''
    }

    rand = () => { 
        this.setState( {myState: 'hello'} )
        console.log('cur state: ' + this.state.myState)
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <main className="whole-body">
                    <h2 className="intro-text">
                        <strong>Welcome</strong>
                    </h2>
                    <h2 id="leadin">Proficiencies in:</h2>
                    <ul className="skill-shields">
                    {/*
                        Icons thanks to Font Awesome https://github.com/FortAwesome/Font-Awesome 
                    */}
                        <li><i className="fab fa-html5 html5"></i></li>
                        <li><i className="fab fa-css3-alt css"></i></li>
                        <li><i className="fab fa-js-square js"></i></li>
                    </ul>
                    <section className="skillset">
                        <div className="skill-html">
                            <h2>Collaboration</h2>
                            <ul className="projects">
                                <li>
                                    <a href="https://goo.gl/tiUrxH" title="Link to Collaboration project" target="_blank" rel="noopener noreferrer">
                                        <img src={collabPreview} alt="Preview of Collaboration project"/>
                                    </a>Grow with Google Scholar Project
                                </li>
                                <li>
                                <h2>HTML &amp; CSS</h2>
                                <a href="https://lourod1987.github.io/megaman-card" title="Link to Mega Man Card project">
                                    <img src={cardPreview} alt="Preview of Mega Man Card project"/>
                                    </a>Mega Man Card
                                </li> 
                            </ul>
                        </div>
                        <div className="skill-js">
                            <h2>JavaScript</h2>
                            <ul className="projects">
                                <li>
                                <a href="https://lourod1987.github.io/typing-speed-test" title="Link to Typing Speed Test made with JS Example">
                                    <img src={speedTestPreview} alt="Preview of Typing Speed Test project"/>
                                </a>Typing&nbsp;Speed&nbsp;Test
                                </li>
                                <li>
                                <h2>jQuery</h2>
                                    <a href="https://lourod1987.github.io/mythic-matching" title="Link to Matching Game">
                                        <img src={mythicPreview} alt="Preview of Pixel Art Maker project"/>
                                    </a>Mythic&nbsp;Matching&nbsp;Game
                                </li>
                                <li>
                                <a href="https://lourod1987.github.io/pixel-art" title="Link to Pixel Art Project made with jQuery">
                                    <img src={pixelPreview} alt="Preview of Pixel Art Maker project"/>
                                </a>Pixel&nbsp;Art&nbsp;Project
                                </li>
                            </ul>
                        </div>
                        <div className="skill-jquery">
                            <h2>React</h2>
                            <ul className="projects">
                                <li>
                                    <a href="https://condescending-easley-7ba459.netlify.com/" title="Link to Ask Libbie React App">
                                        <img src={askLibbiePreview} alt="Preview of Ask Libbie App"/>
                                    </a>Ask&nbsp;Libbie&nbsp;App
                                </li>
                                <li>
                                    <a href="https://dazzling-shirley-f40879.netlify.com/" title="Link to My Reads React App">
                                        <img src={myReadsPreview} alt="Preview of My Reads App"/>
                                    </a>My&nbsp;Reads&nbsp;App
                                </li>
                            </ul>
                        </div>
                        </section>
                </main>
                <FooterComponent />
            </div>
        )
    }
}

export default HomeContainer;