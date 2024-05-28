import React from 'react';
import '../App.css';

const dataExperience = [
  { name: 'Agency x', id: 0, description: 'description about the job and functions',date:'2 de mayo 2023 - 12 abril 2024' },
  { name: 'Agency y', id: 1, description: 'description about the job and functions',date:'2 de mayo 2023 - 12 abril 2024' },
  { name: 'Agency z', id: 2, description: 'description about the job and functions',date:'2 de mayo 2023 - 12 abril 2024' },
];

function ExperienceList() {
  return (
    <>
      {dataExperience.map((experience) => (
        <div
        key={experience.id}
        className="">
          <div className="flex">
            <span className="bg-primary-900/50 px-3 py-2 font-bold text-slate-600 rounded-t-2xl text-sm">
              {experience.date}
            </span>
          </div>
          <div className="rounded-b-3xl rounded-tr-3xl overflow-hidden bg-ternary-800 shadow-md">
            <div className="text-left w-full">
              <h4 className="text-3xl font-bold text-secondary-900 border-dashed border-b-2 border-slate-300 p-3">
                {experience.name}
              </h4>
              <p className="text-sm leading-normal text-slate-400 p-5">
                {experience.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ExperienceList;
