import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [loaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, [])

  return (
    <div className='App'>
      <div 
        className={`inner-container${loaded ? '' : ' pre-load'}`}>
        <header className="App-header">
            <div className="Logo">O</div>
            <button className="Contact-button">Contact</button>
            <div className="Menu-button">
              <div className="Line top"></div>
              <div className="Line bottom"></div>
            </div>
        </header>
        <div className="App-body">
          <div className="Welcome">
            <h1 className="moving">Hi. Octavian here.</h1>
            <h4 className="moving">I am a professional full stack software developer.</h4>
            <h4 className="moving">Need some code? Have some questions?</h4>
            <h4 className="moving">Let's connect!</h4>
          </div>
          <div className="Skills">
            <h2>Skills</h2>
          </div>
          <div className="Work">
            <h2>Work</h2>
          </div>
          <div className="About-me">
            <h2>About me</h2>
          </div>
        </div>
        <footer className="App-footer">
          <div className="Contact">
            <h2>Contact</h2>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
