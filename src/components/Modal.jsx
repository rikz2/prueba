import React, {useEffect, useRef  } from 'react';
import '../App.css';

function Modal( {isOpen, children}) {

    const ref = useRef();
  
    useEffect(() => {
      const dialog = ref.current;
  
      if (isOpen) {
        dialog.showModal();
      } else {
        dialog.close();
      }
  
      return () => {
        if (dialog.open) {
          dialog.close();
        }
      };
    }, [isOpen]);

    return (
      <section className='bg-slate-900/75 backdrop-blur-lg'>
          <dialog className="rounded-3xl bg-ternary-800 py-4 px-3 pt-1 md:max-w-[600px] w-full" ref={ref}>
            {children}
          </dialog>
      </section>
        
    );
  }

export default Modal;
