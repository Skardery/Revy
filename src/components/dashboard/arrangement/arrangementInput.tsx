import React, { useState, useEffect } from 'react';
import { getDatabase, ref, push, set, get } from 'firebase/database';
import app from '@/components/firebase/firebaseconfig';

const ArrangementInput = ({ onClose }) => {
    const database = getDatabase(app);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [ticketId, setTicketId] = useState(0);

    const [formData, setFormData] = useState({
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
        const idRef = ref(database, 'ticketId');
        get(idRef).then((snapshot) => {
            if (snapshot.exists()) {
                setTicketId(snapshot.val() + 1);
            } else {
                setTicketId(0);
            }
        }).catch((error) => {
            console.error("Firebase er noe dritt: ", error);
        });
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = () => {
      const shouldSubmit = window.confirm("Er du sikker på at du vil publisere arrangementet");
      
      if (shouldSubmit) {
          const newFormData = { ...formData, ticketId: ticketId };
          const databaseRef = ref(database, 'Arrangement/' + ticketId);
  
          set(databaseRef, newFormData)
              .then(() => {
                  setIsSubmitted(true);
                  const idRef = ref(database, 'ticketId');
                  set(idRef, ticketId);
                  setTicketId(ticketId + 1);
                  setFormData({
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
              })
          onClose();
      }
  };

  return (
    <main className='absolute my-2 w-[71rem] h-[48rem] bg-gray-100 flex justify-center items-center flex-col'>
      <div className='w-2/3 h-2/3'>
          <div className='mb-6'>
            <div className='flex text-dark mb-[5px]'>
              <p className='w-1/2 mr-2.5'>Tittel på arrangement</p><p className='w-1/2'>Tema</p>
            </div>
            <input required type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Revyfest" maxLength={13} className='bg-gray-50  input input-bordered input-info w-[49.44%] mr-1 p-2 border shadow-md' />
            <input required type="text" name="tema" value={formData.tema} onChange={handleInputChange} placeholder="Afterski" maxLength={20} className=' bg-gray-50 input input-bordered input-info w-[49.44%] ml-1 p-2 borde shadow-md' />
          </div>
          <div className='mb-6'>
            <div className='flex text-dark mb-[5px]'>
              <p className='w-1/2 mr-2.5'>Klokkeslett-start</p><p className='w-1/2'>Klokkeslett-slutt</p>
            </div>
            <input required type="time" name="klokkestart" value={formData.klokkestart} onChange={handleInputChange} placeholder="13:00" maxLength={20} className='bg-gray-50 input input-bordered input-info w-[49.44%] mr-1 p-2 borde shadow-md' />
            <input required type="time" name="klokkeslutt" value={formData.klokkeslutt} onChange={handleInputChange} placeholder="13:00" maxLength={20} className='bg-gray-50 input input-bordered input-info w-[49.44%] ml-1 p-2 borde shadow-md' />
          </div>
          <div className='mb-6'>
            <div className='flex text-dark mb-[5px]'>
              <p className='w-1/2 mr-2.5'>Addresse</p><p className='w-1/2'>Dato</p>
            </div>
            <input  required type="text" name="adresse" value={formData.adresse} onChange={handleInputChange} placeholder="Vestre Elvebakke 3" maxLength={30} className='bg-gray-50 input input-bordered input-info w-[49.44%] mr-1 p-2 borde shadow-md' />
            <input required type="date" name="dato" value={formData.dato} onChange={handleInputChange} placeholder="19.09.2023" className='bg-gray-50 input input-bordered input-info w-[49.44%] ml-1 p-2 borde shadow-md' />
          </div>
          <div className='mb-6'>
            <div className='flex text-dark mb-[5px]'>
              <p className='w-1/2 mr-2.5'>Postnummer</p><p className='w-1/2'>Bydel</p>
            </div>
            <input required type="text" pattern="\d{4}" minLength={4} maxLength={4} name="postnummer" value={formData.postnummer} onChange={handleInputChange} placeholder="0182" className='bg-gray-50 input input-bordered input-info w-[49.44%] mr-1 p-2 borde shadow-md' />
            <input required type="text" name="by" value={formData.by} onChange={handleInputChange} placeholder="Gamle Oslo" maxLength={20} className='bg-gray-50 input input-bordered input-info w-[49.44%] ml-1 p-2 borde shadow-md' />
          </div>
          <div className='mb-12'>
            <div className='flex text-dark mb-[5px]'>
              <p className='w-1/2 mr-2.5'>Beskrivelse</p>
            </div>
            <textarea required  name="beskrivelse" value={formData.beskrivelse} onChange={handleInputChange} placeholder="Revyfesten blir holdt..." maxLength={400} className='input input-bordered input-info w-full h-[6rem] border py-3 shadow-md bg-gray-50 rounded-md ' cols={30} rows={10}/>
          </div>
        </div>
        <div className='flex justify-normal w-2/3 mt-12'>
            <button onClick={onClose} className="flex mr-2  items-center justify-center text-center p-0.5 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-logoBlue to-logoDBlue group-hover:from-logoBlue group-hover:to-logoDBlue hover:text-slate-50 dark:text-slate-50 focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="w-[110px] flex justify-center text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white text-dark rounded-md group-hover:bg-opacity-0">
                Avbryt
                </span>
            </button>

            <button onClick={handleFormSubmit} className="flex  items-center justify-center text-center p-0.5 overflow-hidden text-lg font-medium text-dark rounded-lg group bg-gradient-to-br from-logoBlue to-logoDBlue group-hover:from-logoBlue group-hover:to-logoDBlue hover:text-slate-50 dark:text-slate-50 focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className=" w-[110px] flex justify-center text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white text-dark rounded-md group-hover:bg-opacity-0">
                Legg til
                </span>
            </button>
        </div>
    </main>
  );
};

export default ArrangementInput;