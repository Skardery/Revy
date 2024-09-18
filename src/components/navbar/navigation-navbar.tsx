import Link from "next/link"
import Image from "next/image"
import { FaHouseChimney, FaTicket, FaNewspaper, FaCircleInfo, FaHeadset, FaCircleQuestion, FaFilePen, FaUser, FaChevronDown } from "react-icons/fa6";

import React, { useState, useEffect } from 'react';
import LogoNavbar from "@/components/navbar/logo-navbar";
import { useTheme } from 'next-themes';


export default function NavigationNavbar({ toggleDropdown }) {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

// useEffect(() => {
//   if (typeof window !== 'undefined') {
//     const localTheme = window.localStorage.getItem('theme');
//     setIsDarkMode(localTheme === 'dark');
//     setTheme(localTheme || 'light');
//   }
// }, []);

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
        <div className="flex flex-row w-2/3 md:w-3/4 lg:w-3/4 justify-end mr-11">
            <div className="flex-row flex">
            {/* <div className="w-2/3 md:w-1/2 lg:w-1/2 flex justify-end mr-0 "> */}

          <button className=" py-3 px-2 rounded-lg text-dark dark:text-slate-50 flex items-center justify-around mr-2 dark:hover:bg-sgrey" onClick={toggleDropdown}>Navigasjon<FaChevronDown className="w-[15px] ml-1 h-[15px] text-dark dark:text-slate-50"/>
          </button>
        </div>
      </div>
    );
    }
