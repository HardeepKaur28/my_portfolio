import React from 'react';
import './About.css';
import image from '../images/i2-removebg-preview.png';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="about-img">
          <img src={image} alt="Hardeep Kaur" className="about-photo" />
        </div>
        <div className="about-content">
          <h2 className="heading">
            About <span className="highlight">Me</span>
          </h2>
          <h3>Passionate Web Developer</h3>
          <p>
            I am Hardeep Kaur, a B.Tech student specializing in Computer Science and Engineering at Rayat Bahra University. I am dedicated to leveraging technology to solve real-world challenges.
          </p>
          <p>
            My academic journey has equipped me with proficiency in C++, Java, and Python, alongside web development skills in HTML, CSS, JavaScript, and Bootstrap. I am skilled in database management, Node.js, Express, and Mongoose, enabling me to build robust applications.
          </p>
          <p>
            I have completed certifications in Full Stack Development and Python, and my portfolio includes projects like a Hotel Booking Application and an Amazon clone, showcasing my ability to transform ideas into functional solutions.
          </p>
          {/* <div className="about-info">
            <div>
              <h4>Name: Hardeep Kaur</h4>
              <h4>DOB: 28 May, 2004</h4>
              <h4>Qualification: B.Tech, CSE</h4>
            </div>
            <div>
              <h4>Phone: 06239240910</h4>
              <h4>Email: hardeepkaur27862@gmail.com</h4>
              <h4>Status: Fresher</h4>
            </div>
          </div> */}
          <div className="social-links">
            <a href="https://www.linkedin.com/in/hardeep-kaur-a08327264" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/HardeepKaur28" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:hardeepkaur27682@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
