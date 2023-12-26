import React from 'react';
import "./experience.css"

const Experience = ({ date, title, company, description, tags, hover, setHover}) => {
  return (
    <div className={`experience-item ${hover ? 'hovered' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className="experience-date">{date}</div>
      <div className="experience-details">
        <h3 className="experience-title">{title}</h3>
        <h4 className="experience-company">{company}</h4>
        <p className="experience-description">{description}</p>
        <div className="experience-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;