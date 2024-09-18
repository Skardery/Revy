import Header from '@/components/navbar/main-navbar';
import SmHeader from '@/components/navbar/sm-navbar';
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import app from '@/components/firebase/firebaseconfig';

  export default function Billettsalg() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
      const db = getDatabase(app);
      const dataRef = ref(db, 'Arrangement');

      onValue(dataRef, (snapshot) => {
        const dataFromFirebase: { [key: string]: { publisert: string } } = snapshot.val();

        if (dataFromFirebase) {
          const dataArray = Object.values(dataFromFirebase).filter(item => item.publisert === 'ja');
          setData(dataArray);
        }
      });
  
      return () => {
      };
    }, []);

  return (
    <main className='w-screen h-screen bg-gray-50 dark:bg-dark'>
      <div className='hidden md:flex'><Header/></div>
      <div className='flex md:hidden'><SmHeader/></div>
      <p className='w-full flex justify-center text-4xl font-semibold mb-2 text-dark dark:text-slate-50'>Billettsalg</p>
      <p className='w-full flex justify-center text-dark dark:text-slate-50 mb-2'>Kjøp billetter til arrangmentene</p>
      <ul className='grid grid-cols-3 h-[40rem] overflow-y-scroll px-24'>
        {data.map((item, index) => (
          <li key={index} className='w-[25rem] p-4 mt-4'>
            <div className='border-logoBlue dark:border-logoBlue border rounded-[4rem] h-[32rem] p-8 shadow-xl'>
              <p className='w-full flex text-4xl justify-center mb-4 h-[2rem] text-dark dark:text-logoBlue my-6 '>{item.title}</p>
              <div className='border-b border-gray-200 my-10 dark:text-slate-50 mt-[2.6rem] mb-4'></div>
              <div className='flex justify-between my-[2.2rem]  text-gray-500 dark:text-slate-50'>
                <p>Dato</p>
                <p>{item.dato}</p>
              </div>
              <div className='flex justify-between mb-[2.2rem] text-gray-500 dark:text-slate-50'>
                <p>Tid</p>
                <p>{item.klokkestart}-{item.klokkeslutt}</p>
              </div>
              <div className='flex justify-between mb-[2.2rem] text-gray-500 dark:text-slate-50'>
                <p>Sted</p>
                <p>{item.adresse}</p>
              </div>
              <div className='flex justify-between mb-[2.2rem] text-gray-500 dark:text-slate-50'>
                <p>Pris</p>
                <p>{item.pris}kr</p>
              </div>
              <div className='w-full hidden dark:flex justify-center items-center text-center mt-[7rem]'>
                  <button className="flex items-center justify-center text-center p-0.5 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-logoBlue to-logoDBlue group-hover:from-logoBlue group-hover:to-logoDBlue hover:text-slate-50 dark:text-slate-50 focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span className="flex justify-center text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Kjøp billett
                    </span>
                  </button>
              </div>
              <div className='w-full flex dark:hidden justify-center items-center text-center mt-[7.25rem]'>
                  <button className="flex items-center justify-center text-center p-0.5 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-logoBlue to-logoDBlue group-hover:from-logoBlue group-hover:to-logoDBlue hover:text-slate-50 dark:text-slate-50 focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span className="flex justify-center text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Kjøp billett
                    </span>
                  </button>
              </div>
              
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
