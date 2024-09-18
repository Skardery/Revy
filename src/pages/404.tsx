import Link from 'next/link'
import React from 'react'
import Header from '@/components/navbar/main-navbar';
import SmHeader from '@/components/navbar/sm-navbar';
import { Footer } from '@/components/navbar/footer';
import { useRouter } from 'next/router';





export default function FourOFour() {

  // const BackButton: React.FC = () => {
  //   const router = useRouter();
  
  //   const handleGoBack = () => {
  //     router.back();
  //   };
  
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
       
        <main className='min-w-screen min-h-screen bg-gray-50 dark:bg-dark'>
            <div className='hidden md:flex'><Header/></div>
            <div className='flex md:hidden'><SmHeader/></div>
                <div className="text-center justify-between align-center h-screen w-screen mt-64 ">
                        <p className="text-2xl font-semibold text-blue-500 dark:text-logoBlue">404</p>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-slate-50">Page not found</h1>
                        <p className="mt-6 text-base leading-7 text-dark dark:text-slate-50">Beklager, vi finner ikke siden du leter etter</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/" type="button" className="text-gray-50 bg-gradient-to-r from-cyan-500 dark:from-logoBlue dark:to-logoDBlue to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-xl px-16 py-3 md:px-10 md:py-2.5 text-center">Hjem</Link>
                        {/* <button onClick={handleGoBack} type="button" className="text-gray-50 bg-gradient-to-r from-cyan-500 dark:from-logoBlue dark:to-logoDBlue to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-xl px-16 py-3 md:px-10 md:py-2.5 text-center">Tilbake</button> */}


                        </div>

                </div>
        </main>
      </>
    )
  }
  