import React from 'react';
import './ProjectTechnologies.css';

const ProjectTechnologies = ({ project }) => {
  const { technologies } = project;
  console.log(technologies);

  return (
    <div>
      <div className="list-inline">
        {technologies.map((technology) => (
          <li >{technology}</li>
        ))}
      </div>
    </div>
  );
};

export default ProjectTechnologies;
