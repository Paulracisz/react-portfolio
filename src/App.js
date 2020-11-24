import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from "./components/HomePage.jsx"
import FourZeroFour from "./components/FourZeroFour.jsx"
import Work from "./components/Work.jsx"
import Resume from "./components/Resume.jsx"



// const token = localStorage.getItem('token')

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/paulracisz.github.io"><HomePage /></Route>
        <Route path="/work"><Work/></Route>
        <Route path="/resume"><Resume/></Route>
        <Route component={FourZeroFour} />
        </Switch>
    </Router>
  )
};

export default App;