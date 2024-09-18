import React, { useState } from "react";
import LogoNavbar from "@/components/navbar/logo-navbar";
import NavigationNavbar from "@/components/navbar/navigation-navbar";
import MiddleDropdownNavbar from "./dropdown-middle-section";

export default function DropdownNavbar({ isDropdownOpen, toggleDropdown }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${isDropdownOpen ? "block" : "hidden"} w-full bg-white dark:bg-ldark drop-shadow-lg z-50 fixed`}>
        <div className="w-screen flex h-[4rem] items-center justify-between bg-white dark:bg-dark ">
            <LogoNavbar />
            <NavigationNavbar toggleDropdown={toggleDropdown} />
            
           
        </div>
        <MiddleDropdownNavbar />
        
    </div>
  );
}
