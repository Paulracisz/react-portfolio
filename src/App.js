import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from "./components/HomePage.jsx"
import FourZeroFour from "./components/FourZeroFour.jsx"
import BugSquasher from './components/BugSquasher.jsx';



// const token = localStorage.getItem('token')

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element = {<HomePage /> }></Route>
          <Route path = "/test" element = {<BugSquasher />}></Route>
          <Route path = "*" element={<FourZeroFour />} />
        </Routes>
    </Router>
  )
};

export default App;