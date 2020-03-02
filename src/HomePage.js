import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import iconTwitter from './iconTwitter.svg';
import iconEmail from './iconEmail.svg';
import iconFacebook from './iconFacebook.svg';
import iconWhatsapp from './iconWhatsapp.svg';
import iconGithub from './iconGithub.svg';
import iconLinkedin from './iconLinkedin.svg';
import iconJavaScript from './iconJavaScript.svg';
import iconReactJS from './iconReactJS.svg';
import iconCss from './iconCss.svg';
import iconHTML from './iconHTML.svg';
import iconNodeJS from './iconNodeJS.svg';
import iconGit from './iconGit.svg';
import iconGA from './iconGA.svg';
import iconSketch from './iconSketch.svg';

//import iconX from './iconX';

function HomePage() {

    return (
        <div className='App'>
            <div
                className="inner-container">
                <header className="App-header">
                    <div className="Logo"></div>
                    <Link to="/contact">
                        <button className="Contact-button">CONTACT</button>
                    </Link>
                    <div className="Menu-button">
                        <div className="Line top"></div>
                        <div className="Line bottom"></div>
                    </div>
                </header>
                <div className="App-body">
                    <div className="Welcome">
                        <h1 className="moving hi">Hi. Octavian here.</h1>
                        <h4 className="moving iam">I am a professional full stack software developer.</h4>
                        <h4 className="moving need">Need some code? Have some questions?</h4>
                        <Link to="/contact">
                            <h4 className="moving connect">Let's connect!</h4>
                        </Link>
                    </div>
                    <div className="Skills">
                        <h2 className="skills font">Skills</h2>
                        <div className="skillsIcons">
                            <img className="iconJavaScript" src={iconJavaScript} alt="iconJavaScript" />
                            <h5>JavaScript ES6</h5>
                            <img className="iconReactJS" src={iconReactJS} alt="iconReactJS" />
                            <h5>ReactJS</h5>
                            <img className="iconHTML" src={iconHTML} alt="iconHTML" />
                            <h5>HTML5</h5>
                            <img className="iconCss" src={iconCss} alt="iconCss" />
                            <h5>CSS3</h5>
                            <img className="iconNodeJS" src={iconNodeJS} alt="iconNodeJS" />
                            <h5>NodeJS</h5>
                            <img className="iconGit" src={iconGit} alt="iconGit" />
                            <h5>Git</h5>
                            <img className="iconGithub" src={iconGithub} alt="iconGithub" />
                            <h5>Github</h5>
                            <img className="iconGA" src={iconGA} alt="iconGA" />
                            <h5>Google Analytics</h5>
                            <img className="iconSketch" src={iconSketch} alt="iconSketch" />
                            <h5>Sketch</h5>
                        </div>
                    </div>
                    <div className="Work">
                        <h2 className="work font">Works</h2>
                    </div>
                    <div className="About-me">
                        <h2 className="about font">About me</h2>
                    </div>
                </div>
                <footer className="App-footer">
                    <div className="Contact">
                        <h2 className="contact font">Contact</h2>
                        <div className="icons">
                            <img className="iconC" src={iconWhatsapp} alt="iconWhatsapp" />
                            <img className="iconC" src={iconEmail} alt="iconEmail" />
                            <img className="iconC" src={iconGithub} alt="iconGithub" />
                            <img className="iconC" src={iconLinkedin} alt="iconLinkedin" />
                            <img className="iconC" src={iconTwitter} alt="iconTwitter" />
                            <img className="iconC" src={iconFacebook} alt="iconFacebook" />
                        </div>
                        <h5 className="low url">iamoctavian.com</h5>
                    </div>
                </footer>
            </div>
        </div>
    );
}
export default HomePage;