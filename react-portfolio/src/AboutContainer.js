import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import sketch from './images/lou_sketch.png';

class AboutContainer extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <main>
                    <div class="about-me-text">
                    <figure>
                        <img id="loupic" src={sketch} alt="Sketch of me done by Frances Chen"/>
                        <figcaption>
                        Sketch by <a href="https://github.com/frances-chen" target="_blank">Frances Chen</a>
                        </figcaption>
                    </figure>
                    <section class="who-i-am">
                        <h2>Who I Am</h2>
                        <p>
                        I've studied game design, art, and programming. I love all three of those knowledge bases. I am passionate about learning, I am ever curious, constantly looking for ways to improve the world around me, and I find joy in the simplest of things. Some of my favorite things to do are read books, play video games, watch anime and movies of all kinds, draw, write, and in general create. I enjoy problem solving and creative solutions which is why this site even came to be in the first place. If you are looking for a creative web developer, designer with technical aptitude, and or an artist that understands technical requirements reach out to me and we'll collaborate to achieve the solutions your business needs.
                        </p>
                    </section>
                    <section class="workexp">
                        <h2>Work Experience</h2>
                        <h3>Stability Analyst</h3>
                        <p>EA Tiburon</p>
                        <p>February 2016 - February 2017</p>
                        <p>
                        I worked with my team to ensure that the codebase for Madden 2018 was stable as features were added and fixes checked in. This involved reviewing bot and automation results which were tests for primary player paths. Reporting test results, analyzing issues, documenting bugs, assigning bugs to developers, and working in tandem to assist developers with bug diagnosis and fixes were some of my daily tasks.
                        </p>
                        <h3>Quality Assurance</h3>
                        <p>21st Century Learning Solutions</p>
                        <p>September 2015 - December 2015</p>
                        <p>
                        Together a team and I collaborated to update outdated html code and test functionality for courses for a large scale online university. This involved using dreamweaver documenting errors and correct outdated html code to be inline with HTML5 standards.
                        </p>
                        <h3>Media Specialist</h3>
                        <p>Raytheon</p>
                        <p>March 2013 - February 2014</p>
                        <p>
                        Worked with a team to provide imagery for courses based on the requirements set out by course instructors. Using photoshop to output clean and crisp imagery.
                        </p>
                    </section>
                    <section class="education">
                        <h2>Education</h2>
                        <h3>University of Central Florida - Orlando, FL</h3>
                        <p>Bachelor of Arts in Digital Media - Game Design, 2016</p>
                        <p>
                        Coursework was intensive and invovled three compentencies; Art, design, and programming. I focused on art but the program instructs all students with expectation that you learn and have at least an intermediate mastery and understanding of all three areas.
                        </p>
                        <h3>Valencia College - Kissimmee, FL</h3>
                        <p>General A.A. (art focus), 2012</p>
                        <p>
                        General education for college course requirements. Classes ranged from Humanities courses to College Algebra. To be noted I particularly focused on art courses in order to further develop my skills in art and design knowledge and practical application.
                        </p>
                        <h3>Udacity</h3>
                        <p>Front-End Developer</p>
                        <p>In progress...</p>
                    </section>
                    </div>
                </main>
                <FooterComponent />
            </div>
        )
    }
}

export default AboutContainer;