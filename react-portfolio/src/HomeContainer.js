import React, { Component } from 'react';

class HomeContainer extends Component {
    render() {
        return (
            <div>
                <div class="for-bg">
                    <header class="header">
                        <a href="index.html" title="Link back to Home page through logo">
                        <img src="images/orangeTinyDragon_v1.png" alt="Luis Rodriguez Fire Breathing Dragon site logo" id="logo"/>
                        </a>
                        <h1>Luis A. Rodriguez III</h1>
                        <h2>Web Developer</h2>
                    </header>
                    <div class="nav-bar">
                        <nav>
                            <ul>
                            <li>
                                <a href="index.html" title="Link back to Home page">Home</a>
                            </li>
                            <li>
                                <a href="about-me.html" title="Link to About Me page">About&nbsp;Me</a>
                            </li>
                            {/* <li>
                                <a href="portfolio-page.html" title="Link to Portfolio Examples page">Portfolio</a>
                            </li> */}
                            </ul>
                        </nav>
                    </div>   
            </div>
            <main class="whole-body">
                    <h2 class="intro-text">
                        <strong>Welcome</strong>
                    </h2>
                    <div class="Calculator"> </div>
                    <div class="Online-Shop"> </div>
                    <div class="Game"> </div>
                    <div class="OnlineColoringBookApp"></div>
                    <h2 id="leadin">Proficiencies in:</h2>
                    <ul class="skill-shields">
                    {/*
                        Icons thanks to Font Awesome https://github.com/FortAwesome/Font-Awesome 
                    */}
                        <li><i class="fab fa-html5 html5"></i></li>
                        <li><i class="fab fa-css3-alt css"></i></li>
                        <li><i class="fab fa-js-square js"></i></li>
                    </ul>
                    <section class="skillset">
                    <div class="skill-html">
                        <h2>Collaboration</h2>
                        <ul class="projects">
                            <li>
                                <a href="https://goo.gl/tiUrxH" title="Link to Collaboration project" target="_blank">
                                <img src="images/GwGPreview.jpg" alt="Preview image of Collaboration project"/>
                                </a>Grow with Google Scholar Project
                            </li>
                            <li>
                            <h2>HTML &amp; CSS</h2>
                            <a href="megaman-card.html" title="Link to Mega Man Card project">
                                <img src="images/megamanPreview.jpg" alt="Preview image of Mega Man Card project"/>
                                </a>Mega Man Card
                            </li> 
                        </ul>
                    </div>
                        <div class="skill-js">
                            <h2>JavaScript</h2>
                            <ul class="projects">
                                <li>
                                <a href="typing-speed-test.html" title="Link to Typing Speed Test made with JS Example">
                                    <img src="images/typingSpeedTestPreview.jpg" alt="Preview image of Typing Speed Test project"/>
                                </a>Typing&nbsp;Speed&nbsp;Test
                                </li>
                            </ul>
                        </div>
                    </section>
                </main>
                <footer>
                <h2>Keep in Contact</h2>
                <div id="footer-imgs">
                {/*
                Images courtesy of their respective entities (Gmail, Github, LinkedIn, and Twitter)
                */}
                    <a href="mailto:louart87@gmail.com">
                    <img src="images/logo_gmail_48px.png" alt="Gmail logo image"/></a>
                    <a href="https://github.com/lourod1987" target="_blank">
                    <img src="images/GitHub-Mark-48px.png" alt="GitHub logo image"/>
                    </a>
                    <a href="https://www.linkedin.com/in/lourod1987/" target="_blank">
                    <img src="images/In-2C-48px-R.png" alt="LinkedIn logo image"/>
                    </a>
                    <a href="https://twitter.com/LuisARIII" target="_blank">
                    <img src="images/Twitter_Social_Icon_Circle_Color_48px.png" alt="Twitter logo image"/>
                    </a>  
                </div>
                <p>Made with &hearts; by Luis Rodriguez III</p>
                </footer>
        </div>
        )
    }
}

export default HomeContainer;