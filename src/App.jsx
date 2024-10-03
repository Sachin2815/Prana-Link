import { useState } from 'react';
import './App.css';
import Homepage from './Pages/Homepage/main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './Pages/User/User';
import Healer from './Pages/Healer/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/user" element={<User />} />
        <Route path="/healer" element={<Healer />} />
      </Routes>
    </Router>
  );
}

export default App;
