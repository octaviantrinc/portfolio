import React from "react";
import HomePage from './HomePage';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
      {/* <Route exact path="/contact" component={Contact}/> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App;
