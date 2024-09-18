import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import app, { db } from '@/components/firebase/firebaseconfig';
import HjelpChat from '@/components/dashboard/brukerstøtte/hjelpChat';

const Hjelp = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [showUnopened, setShowUnopened] = useState(false);
  const [showOpened, setShowOpened] = useState(false);
  const [chatOpened, setChatOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const dataRef = ref(db, 'Brukerstøtte');

    onValue(dataRef, (snapshot) => {
      const dataFromFirebase = snapshot.val();
      console.log(dataFromFirebase)
      if (dataFromFirebase) {
        const dataArray = Object.values(dataFromFirebase);
        
        setData(
          dataArray.map((item, index) => {
            item["id"] = Object.keys(dataFromFirebase)[index];
            return item
        }))

      }
    });

    return () => {
      onValue(dataRef, () => {});
    };
  }, []);

  const openChatOpened = (item) => {
    setSelectedItem(item);
    setChatOpened(true);
  };

  const closeChatOpened = () => {
    setChatOpened(false);
  };

  return (
    <>
    {chatOpened && <HjelpChat onClose={closeChatOpened} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>}
    <div className="w-full h-full p-2 bg-gray-100">
      <div className='w-full text-lg'>Brukerstøtte | Hjelp</div>
      <div className='w-full border-b border-gray-200 h-2 mb-2'></div>
      <div className='flex justify-between w-[66.5%] text-gray-700'>
        <p className='w-[27%]'>Bruker</p><p>Tema</p><p>Besvart</p>
      </div>
      <div className='w-full border-b border-gray-200 h-2 mt-1'></div>
      <div className='flex w-full'>
        <div className='w-2/3 mr-4 mt-2'>
          <div className="h-2 flex"></div>
            <ul className='w-full h-[42rem] overflow-y-scroll'>
            {data.filter(item => item.bruker?.toLowerCase().includes(searchInput.toLowerCase()))
              .filter(item => {
                if (showOpened && showUnopened) {
                  return true;
                } else if (showOpened) {
                  return item.lest === 'ja';
                } else if (showUnopened) {
                  return item.lest === 'nei';
                }
                return true;
              })
              .map((item, index) => (
                <li onClick={() => openChatOpened(item)} key={index} className='w-full'>
                  <div className='mb-2 h-[5rem] p-2 flex items-center border-blue-500 border rounded-md hover:bg-gray-50'>
                    <div className='w-3/5'>
                      <p className='font-semibold'>{item.bruker}</p>
                      <p className='text-gray-500'>{item.epost}</p>
                    </div>
                    <div className='w-2/5 text-gray-500 flex justify-between'>
                      <div>{item.tema}</div>
                      <div>{item.lest === 'ja' ? 'Ja' : 'Nei'}</div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className='w-1/4 border-l border-gray-200 mt-4 pl-4 mr-2'>
          <input
            type="text"
            className='outline-none p-2 w-[19.5rem] h-[3rem]'
            placeholder="Søk..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className='flex h-[3rem] items-center p-2'>
            <input className='w-6 h-6 mr-4' type="checkbox" onChange={() => setShowOpened(!showOpened)}/>
            <p>Besvart</p>
          </div>
          <div className='flex h-[3rem] items-center p-2'>
            <input className='w-6 h-6 mr-4' type="checkbox" onChange={() => setShowUnopened(!showUnopened)}/>
            <p>Ubesvart</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hjelp;
