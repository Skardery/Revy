import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import app from '@/components/firebase/firebaseconfig';
import BilletterEdit from './billetterEdit';

const Billettsalg = () => {

    const [data, setData] = useState([]);
    const [showBillettEdit, setShowBillettEdit] = useState(false);
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

    const openBillettEdit = (item) => {
      setTicketId(item.ticketId);
      setShowBillettEdit(true);
    };
    

    const closeBillettEdit = () => {
      setShowBillettEdit(false)
    }

  return (
    <main className="h-full">
      {showBillettEdit && <BilletterEdit onClose={closeBillettEdit} ticketId={ticketId}  />}
      <div className="w-full h-full p-2 bg-gray-100">
      <div className='w-full text-lg'>Billettsalg</div>
      <div className='w-full border-b border-gray-200 h-2 mb-1'></div>
        <div className='flex w-full'>
          <div className='w-full mt-2 mr-2'>
            <ul className='w-full grid grid-cols-4 h-[44rem] overflow-y-scroll gap-4'>
            {data.map((item, index) => (
              <li key={index} onClick={() => openBillettEdit(item)}>
                <div className='w-full border border-blue-700 rounded-md h-[16rem] p-2 hover:bg-white text-blue-700 flex justify-center items-center overflow-x-auto'>
                  <div className=''>
                    <p className='font-bold text-2xl'>{item.title}</p>
                    <p className='text-gray-500'>Publisert: <span className='font-semibold text-blue-600'>{item.publisert}</span></p>
                  </div>
                </div>
              </li> 
            ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Billettsalg;
