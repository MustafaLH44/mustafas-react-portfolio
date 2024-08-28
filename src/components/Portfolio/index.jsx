import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: 'path/to/project1-image.jpg',
      deployedUrl: 'https://your-deployed-project1.com',
      githubUrl: 'https://github.com/yourusername/project1'
    },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
