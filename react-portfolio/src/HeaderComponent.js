import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/orangeTinyDragon_v1.png';

class HeaderComponent extends Component {
    render() {
        return (
            <div className="for-bg">
                    <header className="header">
                        <a href="index.html" title="Link back to Home page through logo">
                        <img src={logo} alt="Luis Rodriguez Fire Breathing Dragon site logo" id="logo"/>
                        </a>
                        <h1 onClick={this.rand}>Luis A. Rodriguez III</h1>
                        <h2>Web Developer</h2>
                    </header>
                    <div className="nav-bar">
                        <nav>
                            <ul>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about-me">
                                    About&nbsp;Me
                                </Link>
                            </li>
                            {/* <li>
                                <a href="portfolio-page.html" title="Link to Portfolio Examples page">Portfolio</a>
                            </li> */}
                            </ul>
                        </nav>
                    </div>   
                </div>
        )
    }
}

export default HeaderComponent;