import { useState, useEffect } from "react";
import { getDatabase, ref, update, onValue } from 'firebase/database';
import app from '@/components/firebase/firebaseconfig';

const HjelpChat = ({ onClose, selectedItem, setSelectedItem }) => {
  const [textinput, setTextinput] = useState('');
  const [messages, setMessages] = useState(Object.entries(selectedItem).filter(([key]) => key.startsWith('send')).map(([, value]) => value));

  useEffect(() => {
    const database = getDatabase(app);
    const itemRef = ref(database, `Brukerstøtte/${selectedItem.id}`);

    const unsubscribe = onValue(itemRef, (snapshot) => {
      const data = snapshot.val();
      const loadedMessages = Object.entries(data)
        .filter(([key]) => key.startsWith('send'))
        .map(([, value]) => ({ text: value }));

      setMessages(loadedMessages);
    });

    return () => unsubscribe();
  }, [selectedItem.id]);

  async function Send() {
    const newMessage = { id: new Date().toISOString(), text: textinput };
    setTextinput('');

    setMessages(prevMessages => {
        const updatedMessages = [...prevMessages, newMessage];
        const messageKey = `send${updatedMessages.length}`;


        const database = getDatabase(app);
        const itemRef = ref(database, `Brukerstøtte/${selectedItem.id}`);
        const updates = {
            [messageKey]: newMessage.text,
            lest: 'ja'
        };


        update(itemRef, updates);

        setSelectedItem({ ...selectedItem, [messageKey]: newMessage.text });

        return updatedMessages;
    });
  }

  return (
    <div className="fixed w-full h-full flex justify-center items-center bg-gray-100 z-50">
      <div className="my-2 w-full h-full p-8 rounded-md flex">
        <div className="w-1/3">
          <div>
            <div className="flex justify-between w-full"><p className="text-gray-500">Elev</p><p className='text-black font-semibold'>{selectedItem.bruker}</p></div>
            <div className="flex justify-between w-full"><p className="text-gray-500">Epost</p><p className='text-black'>{selectedItem.epost}</p></div>
            <div className="flex justify-between w-full"><p className="text-gray-500">Tema</p><p className='text-black'>{selectedItem.tema}</p></div>
            <div className="flex justify-between w-full"><p className="text-gray-500">Telefon</p><p className='text-black'>{selectedItem.telefon}</p></div>
          </div>
          <div className="w-full h-3/4 py-4 pt-20">
            <p className="text-black mb-1">Chat</p>
            <textarea name="svar" value={textinput} onChange={event => setTextinput(event.target.value)} id="svar" cols={30} rows={10} className="resize-none outline-none w-full h-[26rem] p-2"/>
          </div>
          <button onClick={onClose} className="bg-blue-400 mr-2 text-white py-2 px-4 rounded-sm hover:bg-white hover:text-blue-400 border border-blue-400">Lukk</button>
          <button className="bg-blue-400 text-white py-2 px-4 rounded-sm hover:bg-white hover:text-blue-400 border border-blue-400" onClick={Send}>Send</button>
        </div>
        <div className="w-2/3 ml-4 flex">
        </div>
      </div>
    </div>
  );
};

export default HjelpChat;

{/* <div className="ml-4 h-full border border-gray-300 mr-8"></div>
          <div className="flex flex-col w-full break-all overflow-y-scroll">
            <p className="text-blue-600">{selectedItem.bruker}</p>
            <div className="w-full mt-1 h-[6rem]">
              {selectedItem.tekst}
              <div>
                <p className="text-blue-600 mt-4">Ditt svar</p>
                {messages.map((message, index) => (
                  <div key={message.id}>
                    <p>{message.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div> */}