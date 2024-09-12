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
    { id: 1, img: p1, title: 'Code Genius Scanner', description: 'Turn your text into a snazzy scannable code with a touch of tech magic! ✨📱', link: 'https://hardeepkaur28.github.io/CodeGenius/' },
    { id: 2, img: p2, title: 'E-Commerce Website', description: 'A seamless online shopping experience with a modern UI.', link: 'https://yourprojectlink2.com' },
    { id: 3, img: p3, title: 'Find My Stay', description: 'Your simple way to discover the perfect place to crash! 🛏️🔍', link: 'https://hardeepkaur28.github.io/FindMyStay/' },
    { id: 3, img: p3, title: 'Time Teller', description: 'Curious about how many trips around the sun you have taken?', link: 'https://hardeepkaur28.github.io/TimeTeller/' },
    { id: 4, img: p4, title: 'Speak Craft', description: 'SpeakCraft turns your chatter into text—because who needs a pen when you have got a voice? 🎤📜', link: 'https://hardeepkaur28.github.io/SpeakCraft/' },
    { id: 5, img: p5, title: 'Weather App', description: ' Your go-to sidekick for dodging raindrops and sunburns with just a swipe! ☔🌞', link: 'https://hardeepkaur28.github.io/WeatherApp/' },
    { id: 2, img: p2, title: 'E-Commerce Website', description: 'A seamless online musics experience with a modern UI.', link: 'https://hardeepkaur28.github.io/magenta-lime-music-site/' },
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
