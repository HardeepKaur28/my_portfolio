import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import Contact1 from './Contact1';
import ExternalLink from './ExternalLink';

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="c">
        <div className="c-bg"></div>
        <h1 className="c-title">CONTACT</h1>
        <p className="c-subtitle">
          Get in touch
        </p>
        <div className="c-wrapper">
          <div className="c-left">
            <div className="c-info">
              <div className="c-info-item">
                <FontAwesomeIcon icon={faPhone} style={{ color: '#5F833E' }} className="c-icon" />
                +91 6329240910
              </div>
              <div className="c-info-item">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: '#0C2E41' }} className="c-icon" />
                hardeepkaur27682@gmail.com
              </div>
              <div className="c-info-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#C23607' }} className="c-icon" />
                Rayat-Bahra University<br />
                V.P.O. Sahauran, Tehsil Kharar Distt, Kharar, Punjab 140103
              </div>
              <div className="c-social-icons">
                <ExternalLink to="https://github.com/HardeepKaur28/" className="c-social-icon">
                  <FontAwesomeIcon icon={faGithub} style={{ color: '#333' }} />
                </ExternalLink>
                <ExternalLink to="https://www.linkedin.com/in/hardeep-kaur-a08327264/" className="c-social-icon">
                  <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077b5' }} />
                </ExternalLink>
                <ExternalLink to="https://instagram.com/hardeepkaur._.28/" className="c-social-icon">
                  <FontAwesomeIcon icon={faInstagram} style={{ color: '#e4405f' }} />
                </ExternalLink>
                <ExternalLink to="https://x.com/HardeepKaur285" className="c-social-icon">
                  <FontAwesomeIcon icon={faTwitter} style={{ color: '#1da1f2' }} />
                </ExternalLink>
              </div>
            </div>
          </div>
          <div className="c-right">
            <form ref={formRef} onSubmit={handleSubmit} className="c-form">
              <input type="text" placeholder="Name" name="user_name" className="c-input" />
              <input type="text" placeholder="Subject" name="user_subject" className="c-input" />
              <input type="text" placeholder="Email" name="user_email" className="c-input" />
              <textarea rows="5" placeholder="Message" name="message" className="c-textarea"></textarea>
              <button type="submit" className="c-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Contact1 />
    </>
  );
};

export default Contact;
