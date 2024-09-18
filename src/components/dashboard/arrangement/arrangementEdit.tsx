import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, set, remove } from 'firebase/database';
import app from '@/components/firebase/firebaseconfig';

const ArrangementEdit = ({ onClose, ticketId }) => {
  const [itemData, setItemData] = useState({
    title: '',
    dato: '',
    tema: '',
    klokkestart: '',
    klokkeslutt: '',
    adresse: '',
    postnummer: '',
    by: '',
    beskrivelse: '',

    pris: '150',
    publisert: 'nei',
  });

  useEffect(() => {
    console.log(ticketId)
    const database = getDatabase(app);
    const arrangementRef = ref(database, `Arrangement/${ticketId}`);

    onValue(arrangementRef, (snapshot) => {
      if (snapshot.exists()) {
        setItemData(snapshot.val());
      } else {
        console.log("No data available");
      }
    });
  }, [ticketId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItemData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const shouldSubmit = window.confirm("Er du sikker på at du vil lagre arrangementet.");
    if (!shouldSubmit) return;

    const database = getDatabase(app);
    const databaseRef = ref(database, `Arrangement/${ticketId}`);

    set(databaseRef, itemData)
      .then(() => {
        onClose();
      })
      .catch((error) => {
        alert('Update failed:');
      });
  };

  const handleDelete = () => {
    const shouldDelete = window.confirm("Er du sikker på at du vil slette arrangementet?");
    if (!shouldDelete) return;
  
    const database = getDatabase(app);
    const arrangementRef = ref(database, `Arrangement/${ticketId}`);
  
    remove(arrangementRef)
      .then(() => {
        onClose();
      })
  };

  return (
    <main className='absolute my-2 w-[71rem] h-[48rem] bg-gray-100 flex justify-center items-center flex-col'>
      <div className='w-2/3 h-2/3'>
          <div className='mb-6'>
            <div className='flex text-dark mb-[5px]'>
              <p className='w-1/2 mr-2.5'>Tittel</p><p className='w-1/2'>Tema</p>
            </div>
            <input type="text" placeholder="Revyfest" maxLength={13} onChange={handleChange} value={itemData.title || ''} name="title" className='bg-gray-50  input input-bordered input-info w-[49.44%] mr-1 p-2 border shadow-md' />
            <input type="text" placeholder="Afterski" maxLength={20} onChange={handleChange} value={itemData.tema} name="tema" className='bg-gray-50  input input-bordered input-info w-[49.44%] ml-1 p-2 border shadow-md' />
          </div>
          <div className='mb-6'>
            <div className='flex text-dark mb-[5px]'>
              <p className='w-1/2 mr-2.5'>Klokkeslett-start</p><p className='w-1/2'>Klokkeslett-slutt</p>
            </div>
            <input  type="time" placeholder="13:00" maxLength={20} onChange={handleChange}  value={itemData.klokkestart } name="klokkestart" className='bg-gray-50  input input-bordered input-info w-[49.44%] mr-1 p-2 border shadow-md' />
            <input type="time" placeholder="13:00" maxLength={20} onChange={handleChange} value={itemData.klokkeslutt} name="klokkeslutt" className='bg-gray-50  input input-bordered input-info w-[49.44%] ml-1 p-2 border shadow-md' />
          </div>
          <div className='mb-6'>
            <div className='flex text-dark mb-[5px]'>
              <p className='w-1/2 mr-2.5'>Adresse</p><p className='w-1/2'>Dato</p>
            </div>
            <input type="text" placeholder='Vestre Elvebakke 3' maxLength={30} onChange={handleChange} value={itemData.adresse} name="adresse" className='bg-gray-50  input input-bordered input-info w-[49.44%] mr-1 p-2 border shadow-md' />
            <input type="date" placeholder="19.09.2023" onChange={handleChange}  value={itemData.dato} name="dato" className='bg-gray-50  input input-bordered input-info w-[49.44%] ml-1 p-2 border shadow-md' />
          </div>
          <div className='mb-6'>
            <div className='flex text-dark mb-[5px]'>
              <p className='w-1/2 mr-2.5'>Postnummer</p><p className='w-1/2'>Bydel</p>
            </div>
            <input type="number" placeholder="0182" onChange={handleChange}  minLength={4} maxLength={4} value={itemData.postnummer} name="postnummer" className='bg-gray-50  input input-bordered input-info w-[49.44%] mr-1 p-2 border shadow-md' />
            <input type="text" placeholder='Gamle Oslo' onChange={handleChange} value={itemData.by} name="by" maxLength={20} className='bg-gray-50  input input-bordered input-info w-[49.44%] ml-1 p-2 border shadow-md' />
          </div>
          <div className='mb-6'>
            <div className='flex text-dark mb-[5px]'>
              <p className='w-1/2 mr-2.5'>Beskrivelse</p>
            </div>
            <textarea placeholder="Revyfesten blir holdt..." className='input input-bordered input-info w-full h-[6rem] border py-3 shadow-md bg-gray-50 rounded-md' onChange={handleChange} value={itemData.beskrivelse} name="beskrivelse" cols={30} rows={10}/>
          </div>
        </div>
        <div className='flex justify-normal w-2/3 mt-10'>
        <button onClick={onClose} className="flex mr-2  items-center justify-center text-center p-0.5 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-logoBlue to-logoDBlue group-hover:from-logoBlue group-hover:to-logoDBlue hover:text-slate-50 dark:text-slate-50 focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="w-[110px] flex justify-center text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Avbryt</span>
            </button>

            <button onClick={handleSave} className="flex  items-center justify-center text-center p-0.5 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-logoBlue to-logoDBlue group-hover:from-logoBlue group-hover:to-logoDBlue hover:text-slate-50 dark:text-slate-50 focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="w-[110px] flex justify-center text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Lagre</span>
            </button>

            <button onClick={handleDelete} className=" ml-2 flex  items-center justify-center text-center p-0.5 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-rose-700 to-rose-500 group-hover:from-logoBlue group-hover:to-logoDBlue hover:text-slate-50 dark:text-slate-50 focus:ring-2 focus:outline-none focus:ring-rose-400 dark:focus:ring-rose-400">
                <span className="w-[110px] flex justify-center text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Slett  </span>
            </button>
        </div>
    </main>
  );
};

export default ArrangementEdit;