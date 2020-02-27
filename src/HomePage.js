import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {

    return (
        <div className='App'>
            <div
                className="inner-container">
                <header className="App-header">
                    <div className="Logo">O</div>
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
                    </div>
                </footer>
            </div>
        </div>
    );
}
export default HomePage;