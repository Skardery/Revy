// footer.tsx

import React from 'react';

export const Footer = () => {
  return (
    
<footer className="bg-gray-50 dark:bg-dark rounded-lg shadow  m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="" className="flex items-center mb-4 sm:mb-0">
                <div className=" w-[60px] h-[31px] mx-2 bg-[url('/Revyfest_logo.png')] bg-cover dark:bg-[url('/DarkRevy.png')]"></div>
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-dark dark:text-slate-50">RevyFest</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-dark dark:text-slate-50 sm:mb-0 ">
                <li>
                    <a href="/" className="mr-4 hover:underline md:mr-6 ">Hjem</a>
                </li>
                <li>
                    <a href="billettsalg" className="mr-4 hover:underline md:mr-6">Billettsalg</a>
                </li>
                <li>
                    <a href="faq" className="mr-4 hover:underline md:mr-6 ">FAQ</a>
                </li>
                <li>
                    <a href="konto" className="hover:underline">Konto</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-dark dark:text-slate-50 sm:text-center ">© 2023 <a href="#" className="hover:underline">RevyFest™</a>. All Rights Reserved.</span>
    </div>
</footer>


  );
};