import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';


const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <HeroImg2 heading="ABOUT." text="I am a Frontend and Backend Developer.I would to describe myself as hardworking,dedicated and i like to work under pressure because,
          when do work  under pressure i finished on time,and I am a team player,I have 1 year experience as a Full Stack Developer,"/>
        <AboutContent />
      </div>

    </div>
  )
};

export default About
