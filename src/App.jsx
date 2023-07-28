import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import Header from './Components/Header'
// import  Footer from "./Components/Footer"
import Banner from './Components/Banner';
import Section1 from './Components/Section1';
import Doctors from './Components/Doctors';
import Problem from './Components/Problem';
import Services from './Pages/Services';
import Homepage from './Pages/Homepage';
import Contact from './Pages/Contact';
import Login from "./Pages/Login";
import About from './Pages/About';

function App() {
 
  return (
    <div>
      <Router>
        {/* <Header /> */}

        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/login" element={<Login />} />;
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App
