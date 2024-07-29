import React from 'react';

import "./Education.css";

import img from "../images/email.png";
const Education = () => {
  return (
    <>
    <div className="edu">
      <p>My Journey</p>
    </div>
    <div className="timeline">
      <div className="edu-container left-container">
        <img src={img} alt="edu" />
        <div className="text-box">
          <h2>
            "The journey of a thousand miles begins with one step."
          </h2>
          <p>-Lao Tzu</p>
          <span className="left-container-arrow"></span>
        </div>
      </div>

      <div className="edu-container right-container">
      <img src={img} alt="edu" />
        <div className="text-box">
          <h2>
            Bachelor's Degree
          </h2>
          <small>2021-2025</small>
          <p>RAYAT BAHRA UNIVERSITY, MOHALI,PUNJAB (NAAC accreditation). <br/>I am Currently pursuing my bachelorette degree in Engineering in computer science from Punjab for the exposure and experience.</p>
          <span className="right-container-arrow"></span>  
        </div>
      </div>

      <div className="edu-container left-container">
      <img src={img} alt="edu" />
        <div className="text-box">
          <h2>
            Higher School Degree
          </h2>
          <small>2019 - 2021</small>
          <p>MERITORIOUS SCHOOL PATIALA ,PUNJAB <br/>I Did my Higher schooling from Patiala , with average score of 86.8% in the stream science .</p><span className="left-container-arrow"></span>
        </div>
      </div>
      
      <div className="edu-container right-container">
      <img src={img} alt="edu" />
        <div className="text-box">
          <h2>
          Matriculation
          </h2>
          <small>2018-2019</small>
          <p>GOVT. MODEL SCHOOL, SHERON ,SUNAM ,PUNJAB(CBSE affiliated). <br/>I Did my elementary schooling from GMSS School with a decent score of 73.4%.</p>
          <span className="right-container-arrow"></span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Education