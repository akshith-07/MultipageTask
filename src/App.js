import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Calculator from './components/Calculator';
import Rick from './components/Rick';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Profile/>}/>
          <Route exact path="/calculator" element={<Calculator/>}/>
          <Route exact path="/rickmorty" element={<Rick/>}/>
        </Routes>
    </Router>
  );
}

export default App;