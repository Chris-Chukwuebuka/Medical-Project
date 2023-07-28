import React from 'react'
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Section1 from '../Components/Section1';
import Doctors from '../Components/Doctors';
import Problem from '../Components/Problem';
const Homepage = () => {
  return (
    <div>
      {/* <Header /> */}
      <Banner />
          <Section1 />
          <Doctors />
          <Problem/> 
    </div>
  );
}

export default Homepage