import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CreateArrangement from '@/components/dashboard/arrangement/createArrangement';
import Hjelp from '@/components/dashboard/brukerstøtte/hjelp';
import Billettsalg from '@/components/dashboard/arrangement/billetter';
import Veiledning from '@/components/dashboard/veiledning';
import { useTheme } from 'next-themes';

import { FaHouseChimney, FaTicket, FaNewspaper, FaCircleInfo, FaHeadset, FaCircleQuestion, FaFilePen, FaUser, FaCalendarDays, FaCirclePlus, FaCircle } from "react-icons/fa6";



export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('Arrangement');
  const [brukerstøtte, setBrukerstøtte] = useState(false);
  const [hjelp, setHjelp] = useState('Hjelp');
  const [billettsalg, setBillettsalg] = useState('Billettsalg');
  const [veiledning, setVeiledning] = useState('Veiledning');

  const componentMap = {
    Arrangement: CreateArrangement,
    Hjelp: Hjelp,
    Billettsalg: Billettsalg,
    Veiledning: Veiledning
  };

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };


  const RenderedComponent = componentMap[activeComponent];

  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let localTheme = window.localStorage.getItem('theme');
      
      if (!localTheme) {
        localTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      
      setIsDarkMode(localTheme === 'dark');
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    setIsDarkMode(theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', newTheme);
    }
  };

  return (
    <div className='w-full h-full flex'>
      <div className="flex md:hidden bg-slate-50 text-dark text-xl min-w-full h-[60rem] flex-col">
        <div className=" text-center justify-center"><p className=" pt-[300px] p-16">Beklager, dashboardet kan kun vises på pc eller større skjerm.</p></div> </div>
      <div className="hidden md:flex w-full h-full flex-row">
      <div className='flex flex-col w-1/5 bg-gray-100 h-screen pr-4 border-blue-400 border-r'>
        <div className='flex flex-col bg-gray-100 pl-4 py-4 overflow-y-scroll h-3/4'>
            <button className='h-[4rem] min-h-[4rem] flex items-center border rounded-md mb-2 hover:bg-gray-50 w-full text-dark' onClick={() => handleButtonClick('Arrangement')}> <FaCalendarDays className="mr-6 ml-6 w-[20px] h-[20px] text-dark"/> Arrangement</button>
            <button className='h-[4rem] min-h-[4rem] flex items-center border rounded-md mb-2 hover:bg-gray-50 w-full text-dark' onClick={() => handleButtonClick('Billettsalg')}><FaTicket className="mr-6 ml-6 w-[20px] h-[20px] text-dark"/>Billetter</button>
            <button className='h-[4rem] min-h-[4rem] flex items-center border rounded-md mb-2 hover:bg-gray-50 w-full text-dark' onClick={() => handleButtonClick('Hjelp')}><FaHeadset className="mr-6 ml-6 w-[20px] h-[20px] text-dark"/>Hjelp</button>
        </div>
          <div className="flex flex-col pl-4 mt-28 mb-2">
              <button className='h-[4rem] min-h-[4rem] flex items-center border rounded-md mb-2 hover:bg-gray-50 w-ful text-dark' onClick={() => handleButtonClick('Veiledning')}><FaCircleQuestion className="mr-6 ml-6 w-[20px] h-[20px] text-dark"/>Hvordan bruke siden?</button>
              <button className='h-[4rem] min-h-[4rem] flex items-center border rounded-md mb-2 hover:bg-gray-50 w-full text-dark pl-6'>
                <label className="cursor-pointer grid place-items-center">
                  <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" onChange={toggleTheme} checked={isDarkMode}/>
                  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                <span className='ml-6'>Light / Dark mode</span>
              </button>
              <Link className='h-[4rem] min-h-[4rem] flex items-center border mb-2 rounded-md hover:bg-gray-50 w-full text-dark' href="/"><FaHouseChimney className="mr-6 ml-6 w-[25px] h-[25px] text-dark"/>Hjem</Link>
          </div>
        </div>
      <main className='w-4/5 h-flex bg-gray-300'>
        <div className='h-screen w-full bg-gray-100 pl-2 text-dark'>
          {RenderedComponent && <RenderedComponent />}
        </div>
      </main>
    </div>
    </div>
  );
}
