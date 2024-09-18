import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, set, get, remove, push } from 'firebase/database';
import app from '@/components/firebase/firebaseconfig';

const BilletterEdit = ({ onClose, ticketId }) => {

  const [search, setSearch] = useState('');

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
    tickets: []
  });

  const Søk = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    console.log(ticketId);
    const database = getDatabase(app);
    const arrangementRef = ref(database, `Arrangement/${ticketId}`);

    onValue(arrangementRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const fetchedUndertickets = data.tickets ? Object.keys(data.tickets).map(key => ({
          id: key,
          ...data.tickets[key],
        })) : [];
        setItemData({ ...data, tickets: fetchedUndertickets });
      }
    });
  }, [ticketId]);

  const filteredTickets = itemData.tickets.filter(ticket =>
    ticket.id.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItemData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const shouldSubmit = window.confirm("Er du sikker på at du vil lagre billettinnstillingene?");
    if (!shouldSubmit) return;

    const database = getDatabase(app);
    const databaseRef = ref(database, `Arrangement/${ticketId}`);

    set(databaseRef, itemData)
      .then(() => {
        onClose();
      })
  };

  // const addTicket = async () => {
  //   const database = getDatabase(app);
  //   const underticketsRef = ref(database, `Arrangement/${ticketId}/tickets`);
  
  //   const snapshot = await get(underticketsRef);
  //   const undertickets = snapshot.val();
  //   const nextUnderticketId = undertickets ? Object.keys(undertickets).length : 0;
  
  //   const newUnderticketRef = ref(database, `Arrangement/${ticketId}/tickets/${nextUnderticketId}`);
  //   set(newUnderticketRef, {
  //     status: 'new',
  //     created_at: Date.now(),
  //   });
  // };

  const Publisert = (event) => {
    setItemData(prev => ({
      ...prev,
      publisert: event.target.checked ? 'ja' : 'nei',
    }));
  };

  const addTicket = () => {
    const database = getDatabase(app);
    const underticketsRef = ref(database, `Arrangement/${ticketId}/tickets`);
    const newUnderticketRef = push(underticketsRef);
  
    set(newUnderticketRef, {
      status: 'new',
      created_at: Date.now(),
    });
  };
  

  const handleDelete = (underticketId) => {
    const database = getDatabase(app);
    const underticketRef = ref(database, `Arrangement/${ticketId}/tickets/${underticketId}`);
  
    remove(underticketRef)
      .then(() => {
        console.log(`Underticket ${underticketId} deleted successfully.`);
      })
  };

  function handleGittUt() {
    alert("Du kan ikke gi ut en billett som ikke har blitt kjøpt!")
  }

  return (
    <main className='absolute my-2 w-[71rem] h-[48rem] bg-gray-100 flex justify-center items-center flex-col'>
      <div className='w-2/3'>
        <div className='flex'>
          <p className='ml-6 mr-6'>Nøkkel</p>
          <p className='ml-40'>Pris</p>
          <p className='ml-16'>Elev</p>
          <p className='ml-28'>Telefon</p>
        </div>
        <div className='w-full h-[20rem] mb-6 border border-blue-300 rounded-md p-2 bg-white overflow-x-auto'>
          <ul className='w-full'>
            {filteredTickets.map((ticket) => (
              <li key={ticket.id}>
                <div className='w-full p-2 mb-1 flex items-center justify-between'>
                  <div className='w-full flex'>
                    <p className='w-1/3 mr-6'>{ticket.id}</p>
                    <div>
                      <p className='w-[3.2rem] overflow-x-scroll whitespace-nowrap mr-10'>{itemData.pris} kr</p>
                    </div>
                    <p className='mr-4'>Elev-full-navn</p>
                    <p className='ml-6'>Tlf-nummer</p>
                  </div>
                  <div className='flex justify-end items-center'>
                    <button onClick={handleGittUt} className='mr-4 w-[2rem] h-[2rem] flex items-center justify-center bg-white rounded-sm text-2xl font-semibold border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white pb-[3px]'><span className='text-center'>✓</span></button>
                    <button onClick={() => handleDelete(ticket.id)} className='w-[2rem] h-[2rem] flex items-center justify-center bg-blue-500 rounded-sm text-2xl font-semibold border border-blue-500 hover:bg-white text-white hover:text-blue-500 pb-[3px]'><span className='text-center'>✗</span></button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
          <div className='mb-6'>
            <div className='flex text-dark mb-[5px]'>
              <p className='w-1/2 mr-2.5'>Søk etter nøkkel</p><p className='w-1/2 ml-1'>Pris</p>
            </div>
            <input type="text" placeholder="-Nsm9FYMI6KsQAZKMZz1" onChange={Søk} className='bg-gray-50 input input-bordered input-info w-[49.44%] p-2 border shadow-md' />
            <input type="number" placeholder="200" onChange={handleChange} value={itemData.pris} name="pris" className='bg-gray-50  input input-bordered input-info w-[49.44%] ml-2 p-2 border shadow-md' />
          </div>
          <div className='mb-6'>
            <div className='flex text-dark mb-[5px]'>
              <p className='w-full mr-2.5'>Vil du publisere dette arrangementet. (Før du gjør det burde du være sikker på at alle innstillinger er korrekte.) NB! Husk å lagre endringen!</p>
              <span className='text-blue-600 font-semibold'>Nei</span><input type="checkbox" className="toggle mx-2" checked={itemData.publisert === 'ja'} onChange={Publisert} /><span className='text-blue-600 font-semibold'>Ja</span>
            </div>
          </div>
        </div>
        <div className='flex w-2/3'>
          <p>Antall billetter: <span className='text-blue-500 font-semibold'>{itemData.tickets.length}</span></p>
        </div>
        <div className='flex justify-normal w-2/3 mt-10'>
            <button onClick={addTicket} className="flex mr-2  items-center justify-center text-center p-0.5 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-logoBlue to-logoDBlue group-hover:from-logoBlue group-hover:to-logoDBlue hover:text-slate-50 dark:text-slate-50 focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="w-[10rem] flex justify-center text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Legg til billett</span>
            </button>
            <button onClick={onClose} className="flex mr-2  items-center justify-center text-center p-0.5 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-logoBlue to-logoDBlue group-hover:from-logoBlue group-hover:to-logoDBlue hover:text-slate-50 dark:text-slate-50 focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="w-[110px] flex justify-center text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Avbryt</span>
            </button>

            <button onClick={handleSave} className="flex  items-center justify-center text-center p-0.5 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-logoBlue to-logoDBlue group-hover:from-logoBlue group-hover:to-logoDBlue hover:text-slate-50 dark:text-slate-50 focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="w-[110px] flex justify-center text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Lagre</span>
            </button>
        </div>
    </main>
  );
};

export default BilletterEdit;