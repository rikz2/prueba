import React from 'react';

const dataAcademy = [
  { name: 'Academy x', id: 0, description: 'Title Design University',date:'2 de mayo' },
  { name: 'Academy y', id: 1, description: 'Academy Degree',date:'2 de abril' },
  { name: 'Academy z', id: 2, description: 'Web course',date:'2 de junio' },
  { name: 'Academy A', id: 3, description: 'Web course',date:'13 de junio' }
];

function AcademyList() {
  return (
    <>
      {dataAcademy.map((academy) => (
        <div key={academy.id} className="">
          <div className="flex">
            <span className="bg-primary-900/50 px-3 py-2 font-bold text-slate-600 rounded-t-2xl text-sm">
              {academy.date}
            </span>
          </div>
          <div className="rounded-b-3xl rounded-tr-3xl overflow-hidden bg-ternary-800 shadow-md">
            <div className="text-left w-full">
              <h4 className="text-3xl font-bold text-secondary-900 border-dashed border-b-2 border-slate-300 p-3">
                {academy.name}
              </h4>
              <p className="text-sm leading-normal text-slate-400 p-5">
                {academy.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default AcademyList;
