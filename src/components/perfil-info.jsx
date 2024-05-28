import {useState } from 'react';
import AcademyList from './Academy-list';
import ProjectList from './Project-list';
import ExperienceList from './Experience-list';
import Modal from './Modal';

function PerfilInfo() {
  const [toggle, setToggle] = useState(1);
  const [showModal, setShowModal] = useState(false);

  function updateToggle(id) {
    setToggle(id);
  }


  return (
    <>
      <Modal isOpen={showModal}>
          <div className="w-full flex justify-end">
            <button
              className="modal-close text-3xl font-bold"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
          </div>
          <div className="modal-content">
            <h2 className="text-3xl font-bold pb-3">Name</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative px-3 py-4 bg-slate-200 rounded-2xl shadow-md">
                <div className="flex justify-between">
                  <span className="font-bold text-lg">Cel</span>
                  <span>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="black"
                    >
                      <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                    </svg> */}
                  </span>
                </div>
                <p>3424432</p>
              </div>
              <div className="relative px-3 py-4 bg-slate-200 rounded-2xl shadow-md">
                <div className="flex justify-between">
                  <span className="font-bold text-lg">Email</span>
                  <span>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="black"
                    >
                      <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                    </svg> */}
                  </span>
                </div>
                <p>nombre@gmail.com</p>
              </div>
            </div>
          </div>
      </Modal>

      
      <section className="flex flex-col justify-center md:h-screen h-full px-4 py-4">
        <div className="flex justify-center md:justify-end">
          <div className="flex justify-center gap-4 w-1/2">
            <span
              onClick={() => updateToggle(1)}
              className="bg-secondary-900 text-primary-900 text-base py-2 px-3 rounded-t-lg hover:bg-primary-900 hover:text-secondary-900 cursor-pointer"
            >
              Projects
            </span>
            <span
              onClick={() => updateToggle(2)}
              className="bg-secondary-900 text-primary-900 text-base py-2 px-3 rounded-t-lg hover:bg-primary-900 hover:text-secondary-900 cursor-pointer"
            >
              Experience
            </span>
            <span
              onClick={() => updateToggle(3)}
              className="bg-secondary-900 text-primary-900 text-base py-2 px-3 rounded-t-lg hover:bg-primary-900 hover:text-secondary-900 cursor-pointer"
            >
              Academy
            </span>
          </div>
        </div>

        <div className="shadow-2xl items-center mx-auto max-w-screen-xl md:grid md:grid-cols-2 p-0 rounded-3xl overflow-hidden">
          <div className="bg-slate-50 px-8 py-10 flex flex-col items-center justify-center   gap-y-3 md:gap-y-10 h-full border-dashed border-b-4 md:border-b-0 md:border-r-4 border-stone-300">
            <h2 className="tracking-tight text-4xl md:text-6xl font-thin text-secondary-900">
              Portfolio
            </h2>
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl md:text-4xl text-primary-900 font-bold">
                Nombre
              </span>
              <div className="relative flex justify-center">
                <div className="rounded-full bg-secondary-900 border-4 border-primary-900 w-32 h-32 md:w-40 md:h-40
                
                bg-cover"></div>
                <span
                  onClick={()=>setShowModal(true)}
                  className="px-4 cursor-pointer transition-all  ease-in-out delay-150 hover:scale-125  font-bold bg-gradient-to-r from-blue-950 to-blue-700 py-2 text-ternary-900 text-base md:text-lg rounded-xl absolute bottom-0"
                >
                  Contact
                </span>
              </div>
            </div>
            <p className="font-normal text-sm md:text-base text-secondary-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium minus enim architecto facere sint repudiandae fugiat
              ullam velit dicta alias eveniet quaerat, veniam natus, qui
              ducimus? Ratione in officiis aliquam.
            </p>
          </div>

          <div className="h-full flex flex-col justify-center items-center bg-slate-50">
            <div className="h-96 w-full px-2 scroll overflow-auto">
              <div className="flex flex-col gap-y-3 px-6 py-5">
                <div
                  className={toggle === 1 ? "flex flex-col gap-3" : "hidden"}
                >
                  <ProjectList />
                </div>
                <div
                  className={toggle === 2 ? "flex flex-col gap-3" : "hidden"}
                >
                  <ExperienceList />
                </div>
                <div
                  className={toggle === 3 ? "flex flex-col gap-3" : "hidden"}
                >
                  <AcademyList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PerfilInfo;
