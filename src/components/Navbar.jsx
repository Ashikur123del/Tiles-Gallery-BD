"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import NavLink from './NavLink'; // Link component ta import koro

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'All Tiles', href: '/all-tiles' },
    { name: 'My Profile', href: '/my-profile' },
  ];

  return (
    <nav className='bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <HiOutlineSquares2X2 size={24} />
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-800">
                TILE<span className="text-blue-600">LUX</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation (NavLink Use kora hoyeche) */}
          <div className="hidden md:flex items-center space-x-8 font-semibold">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/signin" 
              className="px-5 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-all"
            >
              Log In
            </Link>
            <Link 
              href="/signup" 
              className="px-6 py-2 text-sm font-bold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-md"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium border-none" 
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2 flex flex-col gap-3 border-t border-gray-50">
              <Link 
                href="/signin" 
                className="w-full text-center py-3 font-bold text-gray-700 bg-gray-50 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
              <Link 
                href="/signup" 
                className="w-full text-center py-3 font-bold text-white bg-blue-600 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;