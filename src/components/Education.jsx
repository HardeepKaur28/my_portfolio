import React, { useState } from 'react';
import { FaGraduationCap, FaSchool, FaUserGraduate } from 'react-icons/fa';

import "./Education.css";

import img from "../images/email.png";

const achievementDetails = {
  bachelors: [
    'Learned advanced programming concepts and real-world project development.',
    'Organized hackathons and coding events.'
  ],
  highschool: [
    'Excelled in science and mathematics subjects.'
  ],
  matric: [
    'Demonstrated leadership as class monitor.',
    'Won awards in quiz and debate competitions.'
  ]
};

function Achievement({ text, detail }) {
  const [show, setShow] = useState(false);
  return (
    <li className="edu-achievement-item"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}>
      {text}
      {show && <span className="edu-tooltip">{detail}</span>}
    </li>
  );
}

const Education = () => {
  return (
    <>
    <div className="edu">
      <h2 className="edu-journey-title fade-in-down">My Journey</h2>
      <div className="edu-journey-sub">A timeline of my academic growth and achievements</div>
      <div className="edu-journey-underline"></div>
    </div>
    <div className="education-modern">
      <div className="edu-progress-line"></div>
      <div className="edu-bg-accent"></div>
      <div className="edu-card fade-in-up" style={{ animationDelay: '0.1s' }} onClick={e => {
        const ripple = document.createElement('span');
        ripple.className = 'edu-ripple';
        ripple.style.left = `${e.nativeEvent.offsetX}px`;
        ripple.style.top = `${e.nativeEvent.offsetY}px`;
        e.currentTarget.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      }}>
        <div className="edu-icon-wrapper">
          <FaGraduationCap className="edu-icon" />
        </div>
        <div className="edu-content">
          <h3 className="edu-title">Bachelor's Degree <span className="edu-badge current">Current</span></h3>
          <span className="edu-year">2021-2025</span>
          <p className="edu-desc">Rayat Bahra University, Mohali, Punjab (NAAC accredited). Currently pursuing B.Tech in Computer Science and Engineering.</p>
          <ul className="edu-achievements">
            <Achievement text="Relevant coursework: Data Structures, Algorithms, Web Development" detail={achievementDetails.bachelors[0]} />
            <Achievement text="Active member of Coding Club" detail={achievementDetails.bachelors[1]} />
          </ul>
        </div>
      </div>
      <div className="edu-card fade-in-up" style={{ animationDelay: '0.3s' }} onClick={e => {
        const ripple = document.createElement('span');
        ripple.className = 'edu-ripple';
        ripple.style.left = `${e.nativeEvent.offsetX}px`;
        ripple.style.top = `${e.nativeEvent.offsetY}px`;
        e.currentTarget.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      }}>
        <div className="edu-icon-wrapper">
          <FaUserGraduate className="edu-icon" />
        </div>
        <div className="edu-content">
          <h3 className="edu-title">Higher School Degree <span className="edu-badge completed">Completed</span></h3>
          <span className="edu-year">2019-2021</span>
          <p className="edu-desc">Meritorious School Patiala, Punjab. Science stream, 86.8% average.</p>
          <ul className="edu-achievements">
            <Achievement text="Top 10% of class" detail={achievementDetails.highschool[0]} />
          </ul>
        </div>
      </div>
      <div className="edu-card fade-in-up" style={{ animationDelay: '0.5s' }} onClick={e => {
        const ripple = document.createElement('span');
        ripple.className = 'edu-ripple';
        ripple.style.left = `${e.nativeEvent.offsetX}px`;
        ripple.style.top = `${e.nativeEvent.offsetY}px`;
        e.currentTarget.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      }}>
        <div className="edu-icon-wrapper">
          <FaSchool className="edu-icon" />
        </div>
        <div className="edu-content">
          <h3 className="edu-title">Matriculation <span className="edu-badge completed">Completed</span></h3>
          <span className="edu-year">2018-2019</span>
          <p className="edu-desc">Govt. Model School, Sheron, Sunam, Punjab (CBSE). Scored 73.4%.</p>
          <ul className="edu-achievements">
            <Achievement text="Class Monitor" detail={achievementDetails.matric[0]} />
            <Achievement text="Participated in inter-school quiz competitions" detail={achievementDetails.matric[1]} />
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Education