import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import DashBoardSpac from './DashBoardSpac';
import DashBoardLaunchSuccess from './DashBoardLaunchSuccess';
import DashBoardLandingSuccess from "./DashBoardLandingSuccess";
function App() {
  return (
    <div >
      <Switch>
                <Route exact path="/" component={DashBoardSpac}/>
                <Route exact path="/LaunchSuccess" component={DashBoardLaunchSuccess}/>
                <Route exact path="/LandingSuccess" component={DashBoardLandingSuccess}/>
                </Switch>
    </div>
  );
}

export default App;
