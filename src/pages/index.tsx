import Link from 'next/link';
import Header from '@/components/navbar/main-navbar';
import SmHeader from '@/components/navbar/sm-navbar';
import Margin1 from '@/components/margins/[1rem]-margin';
import Margin2 from '@/components/margins/[2rem]-margin';
import Margin6 from '@/components/margins/[6rem]-margin';
import Margin8 from '@/components/margins/[8rem]-margin';
import { Footer } from '@/components/navbar/footer';

export default function Home() {

  return (
    <main className='min-w-screen min-h-screen bg-gray-50 dark:bg-dark'>
      <div className='hidden md:flex'><Header/></div>
      <div className='flex md:hidden'><SmHeader/></div>
        <div className='px-10 flex justify-between min-w-screen h-[90vh] md:h-screen'>
            <div className='sm:w-[100%] md:w-[48%] lg:w-[48%]'>
                <div className='flex md:hidden'>
                  <Margin2/>
                </div>
                <div className='hidden md:flex lg:flex'>
                  <Margin8/>
                </div>
                <div className='items-center md:flex lg:flex hidden'>
                  <Link href="/faq" className='px-3 py-1 bg-gray-100 dark:bg-sgrey rounded-full text-blue-500 dark:text-logoBlue font-semibold hover:bg-gray-50 dark:hover:bg-hoverg '>FAQ</Link>
                  <Link href="/faq"><p className='ml-3 text-dark dark:text-slate-50'>Ofte stilte spørsmål</p></Link> 
                </div>
                    <div className="h-[18rem] bg-gray-300 bg-[url('/Fest.png')] bg-cover flex mx-auto md:hidden lg:hidden rounded-lg"></div>
                          
                    <Margin2/>
                    <h1 className='md:text-7xl lg:text-7xl text-4xl text-center md:text-start font-semibold text-dark dark:text-slate-50'>Kjøp revyfest billettene her nå!</h1>
                    <Margin1/>
                    <p className='text-lg text-dark text-center md:text-start dark:text-slate-50'>For å hindre flere dødsfall og å tjene oss penger, lanserer vi nå digitalt innkjøp av revyfest billetter.</p>
                    <Margin2/>
                    <div className='flex justify-center md:justify-start'>
                      <Link href="/billettsalg" type="button" className="text-gray-50 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-logoBlue dark:to-logoDBlue hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-logoBlue font-medium rounded-lg text-xl px-16 py-3 md:px-5 md:py-2.5 text-center justify-center flex ">Kjøp Bilett</Link>
                    </div>   
                    <div className='items-center md:hidden flex justify-center mt-[2rem]'>
                            <Link href="/faq" className='px-3 py-1 bg-gray-100 dark:bg-sgrey lg:rounded-full rounded-md  text-blue-700 dark:text-logoBlue font-semibold hover:bg-gray-50 dark:hover:bg-hoverg'>Ofte stilte spørsmål</Link>
                          </div>
                </div>
            <div className=' w-[0%] md:w-[48%]'>
              <Margin6/>
              <div className="h-[28rem] bg-gray-300 bg-[url('/Fest.png')] bg-cover rounded-lg "></div>
            </div>
        </div>
        <div className="my-0"><Footer/></div>
    </main>
  )
}
