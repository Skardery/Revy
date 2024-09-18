import Header from '@/components/navbar/main-navbar';
import Margin3 from '@/components/margins/[3rem]-margin';
import SmHeader from '@/components/navbar/sm-navbar';
import HjelpInput from '@/components/dashboard/brukerstøtte/hjelpInput';
import { Footer } from '@/components/navbar/footer';

export default function Betalingsproblemer() {

  return (
    <main className='min-w-screen h-screen bg-slate-50 dark:bg-dark'>
    <div className='hidden md:flex'><Header/></div>
    <div className='flex md:hidden'><SmHeader/></div>
      <div className="hidden md:flex h-[3rem]"></div>
        <div className=" bg-slate-50 dark:bg-dark flex justify-center pb-28"><HjelpInput/></div>
    <div className="my-0 bg-slate-50 dark:bg-dark mt-10"><Footer/></div>
    </main>
  )
}