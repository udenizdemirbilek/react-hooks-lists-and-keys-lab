import React from "react";

function ProjectItem({ name, about, technologies }) {


  // const renderTechnologies = technologies.map(e => {
  //   return (
  //     <span key={e}>{e}</span>
  //   )
  // })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */
          technologies.map(technology => <span key={technology}>{technology}</span> )}
      </div>
    </div>
  );
}

export default ProjectItem;
