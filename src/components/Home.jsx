import React from 'react';
import './Home.css';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import image from '../images/i2-removebg-preview.png';

const Home = () => {
  return (
    <>
    <main className="i">
      <section className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Hardeep Kaur</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">I'm a web  Developer</div>
            </div>
          </div>
          <div className="i-desc">
            <p className="text">
              I developed this website to publicize my work in this area that I decided to engage
              and work! Putting technology and creativity into practice is something truly
              incredible. Well then, feel free, don't leave with doubts and know that remote projects
              are also totally visible.
            </p>
          </div>
          <button className="cv">Download Cv</button>
        </div>
      </section>
      <section className="i-right">
        <div className="i-bg"></div>
        <img src={image} alt="Hardeep Kaur" className="i-img" />
      </section>
    </main>
    <About />
    <Education />
    <Skills />
    <Projects />
    <Contact/>
    </>
  );
};

export default Home;
