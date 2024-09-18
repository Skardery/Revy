import { useState, useEffect } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import app from '@/components/firebase/firebaseconfig';

export default function HjelpInput() {

    const database = getDatabase(app);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        bruker: '',
        epost: '',
        telefon: '',
        tema: 'Betalingsproblemer',
        tekst: '',
        lest: 'nei'
    });

    const isFormFilled = () => {
        return formData.bruker && formData.epost && formData.telefon && formData.tema && formData.tekst;
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await push(ref(database, 'Brukerstøtte'), formData);
        setIsSubmitted(true);
    };

        useEffect(() => {
        if (isSubmitted) {
            setTimeout(() => {
                window.location.href = '/';
            }, 1);
        }
    }, [isSubmitted]);

  return (
    <div className='w-full max-w-screen-lg md:h-3/4 flex justify-center items-center bg-slate-50 dark:bg-dark'>
        <div className="bg-white dark:bg-ldark rounded-lg h-full w-[90%] md:w-2/3 p-4 text-center md:text-start  ">
            <h1 className='text-2xl font-semibold px-4 text-dark dark:text-slate-50 mb-4 md:my-0'>Hjelp</h1>
            <form className='w-full flex md:flex-row flex-col'>
                <div className=' w[90%] md:w-1/2 p-2 md:p-4 '>
                    <div className=' mb-2 md:mb-4'>
                        <label className="block text-dark dark:text-slate-50 text-sm font-medium md:mb-1 text-start ">Brukernavn</label>
                        <input required type="text" name="bruker" maxLength={20} value={formData.bruker} onChange={handleInputChange} className="input input-bordered w-[100%] md:w-full md:max-w-xs bg-slate-50 dark:bg-sgrey text-dark dark:text-slate-50" placeholder="bakka123" />
                    </div>
                       
                    
                    
                    <div>
                        <label className="block text-dark dark:text-slate-50 text-sm font-medium md:mb-1 text-start">Epostadresse</label>
                        <input required type="email" name="epost" maxLength={30} value={formData.epost} onChange={handleInputChange} className="input input-bordered w-[100%] md:w-full md:max-w-xs bg-slate-50 dark:bg-sgrey text-dark dark:text-slate-50" placeholder="bakka123@osloskolen.no" />
                    </div>
                </div>
                <div className='w[90%] md:w-1/2 p-2 md:p-4'>
                    <div className='mb-2 md:mb-4'>
                        <label className="block text-dark dark:text-slate-50 text-sm font-medium md:mb-1 text-start">Telefonnummer</label>
                        <input required type="number" name="telefon" maxLength={15} value={formData.telefon} onChange={handleInputChange} className="input input-bordered w-[100%] md:w-full md:max-w-xs  bg-slate-50 dark:bg-sgrey text-dark dark:text-slate-50" placeholder="123 45 678" />
                    </div>
                    <div>
                        <label className="block text-dark dark:text-slate-50 text-sm font-medium md:mb-1 text-start ">Relatert tema</label>
                        <select required name="tema" value={formData.tema} onChange={handleInputChange} className=" w-[100%] md:w-full md:max-w-xs  p-3 input input-bordered rounded-md  outline-none bg-slate-50 dark:bg-sgrey dark:text-gray-50">
                            <option value="Betaling går ikke gjennom" className="text-dark dark:text-slate-50">Betalingsproblemer</option>
                            <option value="Får ikke brukt fåretrukket betalingsmåte" className="text-dark dark:text-slate-50">Generell feedback</option>
                            <option value="Systemfeil" className="text-dark dark:text-slate-50">Systemfeil</option>
                            <option value="Annet" className="text-dark dark:text-slate-50">Annet</option>
                        </select>
                    </div>
                </div>
            </form>
            <div className='Beskrivelse px-2 pt-2 md:px-4 h-[14.6rem] md:h-[16rem] mb-6 w-[100%] md:w-full md:min-w-xs text-dark dark:text-slate-50 text-start text-sm'> Beskrivelse
                <textarea required maxLength={700} name="tekst" value={formData.tekst} onChange={handleInputChange} className='overflow-y h-[14.6rem] md:h-[16rem] w-full mt-1 p-3 resize-none outline-none bg-gray-50 input input-bordered text-dt rounded-md dark:bg-sgrey text-dark dark:text-slate-50' placeholder="Jeg trenger hjelp med..."></textarea>
            </div>

            <div className='flex justify-center md:justify-end mt-[3.2rem] '>
                <button type="submit" disabled={!isFormFilled()} className='rounded-md px-4 bg-gray-300 h-[3rem] mx-4 hover:bg-gray-100 dark:hover:bg-d-blue w-3/4  md:w-1/4 dark:bg-mid-blue dark:text-slate-50' onClick={handleSubmit}>Send inn</button>
            </div>
        </div>
    </div>
  )
}