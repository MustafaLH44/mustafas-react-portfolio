import React from 'react';

function Project({ project }) {
  return (
    <div className="project">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>
        <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">View Project</a>
        {' | '}
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </p>
    </div>
  );
}

export default Project;
