import React from 'react';
import '../App.css';

const dataProject = [
  {
    name: "Project x",
    id: 0,
    description: "Some description about the project x",
    // image:
    //   "https://cdnb.artstation.com/p/assets/images/images/060/791/179/medium/marta-nael-atraxa.jpg?1679336657",
  },
  {
    name: "Project y",
    id: 1,
    description: "Some description about the project y",
    // image:
    //   "https://cdnb.artstation.com/p/assets/images/images/048/250/731/medium/marta-nael-422157-final-martanael.jpg?1649594583",
  },
  {
    name: "Project z",
    id: 2,
    description: "Some description about the project z",
    // image:
    //   "https://cdna.artstation.com/p/assets/images/images/044/224/910/medium/marta-nael-419522-final-martanael.jpg?1639427349",
  },
];

function ProjectList() {
  return (
    <>
      {dataProject.map(project => (
        <div
          key={project.id}
          className="flex justify-center grid-cols-2 items-center rounded-3xl overflow-hidden bg-ternary-800 shadow-md"
        >
          <div className="text-left w-1/2">
            <h4 className="text-3xl font-bold text-secondary-900 border-dashed border-b-2 border-slate-300 p-3">
              {project.name}
            </h4>
            <p className="text-sm leading-normal text-slate-400 p-3">
              {project.description}
            </p>
          </div>
          <div
          // style={{backgroundImage: `url(${project.image})`}}
            className="bg-cover bg-no-repeat bg-center object-cover h-40 h-max-32 w-1/2"
          ></div>
        </div>
      ))}
    </>
  );
}

export default ProjectList;
