import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import app from '@/components/firebase/firebaseconfig';
import ArrangementInput from '@/components/dashboard/arrangement/arrangementInput';
import ArrangementEdit from '@/components/dashboard/arrangement/arrangementEdit';
import {FaCirclePlus } from "react-icons/fa6";

const CreateArrangement = () => {
  const [data, setData] = useState([]);
  const [showArrangementInput, setShowArrangementInput] = useState(false);
  const [showArrangementEdit, setShowArrangementEdit] = useState(false);
  const [ticketId, setTicketId] = useState(null);

  useEffect(() => {
    const db = getDatabase(app);
    const dataRef = ref(db, 'Arrangement');

    onValue(dataRef, (snapshot) => {
      const dataFromFirebase = snapshot.val();

      if (dataFromFirebase) {
        const dataArray = Object.values(dataFromFirebase);
        setData(dataArray);
      }
    });

    return () => {
      onValue(dataRef, () => {});
    };
  }, []);

  const openArrangementInput = () => {
    setShowArrangementInput(true);
  };

  const closeArrangementInput = () => {
    setShowArrangementInput(false);
  };

  const openArrangementEdit = (item) => {
    setTicketId(item.ticketId);
    setShowArrangementEdit(true);
  };

  const closeArrangementEdit = () => {
    setShowArrangementEdit(false);
  }

  return (
    <main className="h-full">
      {showArrangementInput && <ArrangementInput onClose={closeArrangementInput} />}
      {showArrangementEdit && <ArrangementEdit onClose={closeArrangementEdit} ticketId={ticketId}  />}
      <div className="w-full h-full p-2 bg-gray-100">
      <div className='w-full text-lg'>Arrangement</div>
      <div className='w-full border-b border-gray-200 h-2 mb-1'></div>
        <div className='flex w-full'>
          <div className='w-2/3 mr-4 mt-2'>
            <div className="h-2 flex"></div>
            <ul className='w-full h-[42rem] overflow-y-scroll'>
            {data.map((item, index) => (
              <li key={index} className='w-full' onClick={() => openArrangementEdit(item)}>
                <div className='mb-2 h-[5rem] p-2 flex items-center border-blue-500 border rounded-md hover:bg-gray-50'>
                  <div className='w-1/2'>
                    <p className='text-gray-400'>Navn</p>
                    <p className=''>{item.title}</p>
                  </div>
                  <div className='w-1/5'>
                    <p className='text-gray-400'>Adresse</p>
                    <p className=''>{item.adresse}</p>
                  </div>
                  <div className='w-1/5'>
                    <p className='text-gray-400'>Dato</p>
                    <p className=''>{item.dato}</p>
                  </div>
                  <div className='w-1/5'>
                    <p className='text-gray-400'>Tid</p>
                    <p className=''>{item.klokkestart}</p>
                  </div>
                </div>
              </li>
            ))}
            </ul>
          </div>
          <div className='w-1/3 border-l border-gray-200 mt-4 pl-4 mr-2'>
            <button onClick={openArrangementInput} className="h-[4rem] min-h-[4rem] flex items-center border rounded-md mb-2 pl-4 hover:bg-gray-50 w-full text-dark"><FaCirclePlus className="mr-2 h-[20px] w-[20px]"/> Legg til</button>
            <input type="text" className='h-[4rem] min-h-[4rem] flex items-center border rounded-md mb-2 bg-gray-100 hover:bg-gray-50 w-full pl-4 outline-none text-dark' placeholder="Søk..." />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateArrangement;