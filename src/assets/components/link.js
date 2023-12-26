import React from 'react';
import "./link.css"

const Link = ({link}) => {
    return (
        <div className="showLink">
        <h3>View full resume</h3>
        <i className="fas fa-arrow-right" />
        </div>
    );
};

export default Link;