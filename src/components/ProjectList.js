import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({projects}) {
  console.log(projects);

  // const projectList = projects.map(project => <ProjectItem key={project.id} />)

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */
        projects.map(project => <ProjectItem key={project.id} technologies={project.technologies} name={project.name} about={project.about}/>)}
      </div>
    </div>
  );
}

export default ProjectList;
