import { useState } from 'react';
import NavigationNavbar from "@/components/navbar/navigation-navbar";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import SmMenu from '@/components/navbar/sm_menu';
import Link from 'next/link';

export default function SmHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <main>
      <div className="relative">
        <div className={`w-screen flex items-center h-[4rem] justify-between bg-gray-50 dark:bg-dark`}>
        <Link href="/"><div className=" w-[50px] h-[25px] mx-2 bg-[url('/Revyfest_logo.png')] dark:bg-[url('/DarkRevy.png')] bg-cover ml-[18px] )]"></div></Link>

          <Link href="/" className=" text-dark text-lg dark:text-slate-50" >ELVEBAKKEN-REVYFEST</Link>
          <button className='px-4 py-4 text-3xl  text-dark dark:text-slate-50'
            onClick={toggleMenu}>
            {isMenuOpen ? <RxCross1   /> : <RxHamburgerMenu />}
          </button>
        </div>
        {isMenuOpen && <SmMenu />}
  <button className="px-[18px] py-[18px] text-3xl opacity-0 text-dark absolute top-0 right-0 p-4 dark:text-slate-50" onClick={toggleMenu}>
    <RxCross1 className="dark:text-slate-50"/>
  </button>
  
      </div>
    </main>
  );
}