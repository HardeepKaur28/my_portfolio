import React, { useState } from 'react';
import './Projects.css';
import p1 from '../images/work1.jpg';
import p2 from '../images/work2.jpg';
import p3 from '../images/work4.jpg';
import p4 from '../images/work5.jpg';
import p5 from '../images/work6.jpg';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const handleSeeMoreClick = () => {
    setShowAll(!showAll);
  };

  const projects = [
    { id: 1, img: p1, title: 'Social Media App', description: 'An engaging platform to connect and interact with friends.', link: 'https://yourprojectlink1.com' },
    { id: 2, img: p2, title: 'E-Commerce Website', description: 'A seamless online shopping experience with a modern UI.', link: 'https://yourprojectlink2.com' },
    { id: 3, img: p3, title: 'Portfolio Website', description: 'Showcasing my projects and skills in a personalized portfolio.', link: 'https://yourprojectlink3.com' },
    { id: 4, img: p4, title: 'Additional Project 1', description: 'An innovative solution with cutting-edge technology.', link: 'https://yourprojectlink4.com' },
    { id: 5, img: p5, title: 'Additional Project 2', description: 'A creative approach to solving modern problems.', link: 'https://yourprojectlink5.com' },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="heading">
          <h3>Portfolio</h3>
          <h2>My Amazing Work</h2>
          <p>Explore my projects showcasing my skills and creativity in web development. Each project represents a blend of modern design and functionality.</p>
        </div>

        <div className="work-list">
          {projects.slice(0, 3).map(project => (
            <div key={project.id} className="work">
              <img src={project.img} alt={project.title} />
              <div className="layer">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="view-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
          {showAll && projects.slice(3).map(project => (
            <div key={project.id} className="work">
              <img src={project.img} alt={project.title} />
              <div className="layer">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="view-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <a href="#portfolio" className="probtn" onClick={handleSeeMoreClick}>
          {showAll ? 'Show Less' : 'See More'}
        </a>
      </div>
    </section>
  );
}

export default Projects;
