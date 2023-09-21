"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import NavLink from './navlink'
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from './menuoverlay'
import Image from 'next/image'

const navLinks = [
    {
        title: "About Me",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
]
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
      <Link href="/">
  <p className="text-xl md:text-5xl text-white font-semibold">
  <Image
              src="/images/Gideon-logo.png"
              alt="hero image"
              className="h-21 w-21 mr-2" 
              width={120} 
              height={120} 
            />
  </p>
</Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2  border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            </ul>
        </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        </nav>
  )
}

export default Navbar