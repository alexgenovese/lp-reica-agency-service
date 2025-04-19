"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="w-full px-4 md:px-8 lg:px-12 mx-auto max-w-7xl">
        {/* Desktop header */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-40 md:w-48 flex-shrink-0 transition-all duration-300">
            <Link href="/" aria-current="page" className="block">
              <h2 className="text-2xl font-bold logo-text text-black">growth mkt</h2>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 flex-grow justify-center">
            <Link href="/#why-us" className="nav_link font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap">Why Us</Link>
            <Link href="/#whats-included" className="nav_link font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap">What&apos;s included?</Link>
            <Link href="/#showcase" className="nav_link font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap">Showcase</Link>
            <Link href="/pricing" className="nav_link font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap">Pricing</Link>
          </nav>
          
          {/* Call to action and contact */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact-us" className="text-base text-gray-700 hover:text-gray-900 font-medium whitespace-nowrap">Contact Us</Link>
            <Link href="/call" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-base rounded-md font-medium transition duration-150 hover:text-gray-50">Book a Call</Link>
          </div>
          
          {/* Hamburger menu button for mobile */}
          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {menuOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu - Make sure it appears below the header */}
      <div 
        className={`lg:hidden ${menuOpen ? 'fixed' : 'hidden'} top-[62px] left-0 right-0 bottom-0 bg-white overflow-y-auto z-40`}
        style={{ height: menuOpen ? 'calc(100vh - 72px)' : '0' }}
      >
        <div className="px-4 py-5 space-y-5 divide-y divide-gray-200">
          <div className="space-y-4">
            <Link href="#why-us" className="block px-3 py-2 text-4xl font-bold hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setMenuOpen(false)}>Why Us</Link>
            <Link href="#whats-included" className="block px-3 py-2 text-4xl font-bold hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setMenuOpen(false)}>What&apos;s included?</Link>
            <Link href="#showcase" className="block px-3 py-2 text-4xl font-bold hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setMenuOpen(false)}>Showcase</Link>
            <Link href="/pricing" className="block px-3 py-2 text-4xl font-bold hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setMenuOpen(false)}>Pricing</Link>
          </div>
          
          <div className="pt-5 space-y-4">
            <Link href={process.env.BOOK_A_CALL || '#'} target="_blank" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setMenuOpen(false)}>Book A Call</Link>
            <Link href="/contact-us" className="block w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-center font-medium rounded-lg transition duration-150" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </div>
        </div>
      </div>
    
    </header>
  );
}