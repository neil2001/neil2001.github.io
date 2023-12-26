import React from 'react';
import "./project.css"

const Project = ({title, description, tags, imageSource, hover, setHover, link}) => {
  return (
    <a className="project-link" href={link} target="_blank" rel="noreferrer">
  <div className={`project-item ${hover ? 'hovered' : ''} ${link ? 'pointerHover' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
          <div className="project-image">
              <img src={imageSource} alt={`${title}`}/>
          </div>
        <div className="project-details">
          <h3 className="project-title">{title} </h3>
          <p className="project-description">{description}</p>
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
    
  );
};

export default Project;