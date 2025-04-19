"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
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
              <Image 
                src="/logo/growthmkt-logo.png" 
                width={512} 
                height={512} 
                loading="eager" 
                priority
                alt="Logo Growth Marketing" 
                className="w-full" 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 flex-grow justify-center">
            <a href="#why-us" className="nav_link font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap">Why Us</a>
            <a href="#whats-included" className="nav_link font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap">What&apos;s included?</a>
            <a href="#showcase" className="nav_link font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap">Showcase</a>
            <a href="#blog" className="nav_link font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap">Blog</a>
            <a href="/pricing" className="nav_link font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap">Pricing</a>
            
            {/* Resources dropdown */}
            <div className="relative group">
              <button type="button" className="nav_link font-medium text-gray-700 hover:text-gray-900 inline-flex items-center whitespace-nowrap">
                Resources
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg p-6 z-10 w-96 grid grid-cols-1 gap-4">
                <a href="/guides" className="block p-3 rounded-lg hover:bg-gray-50 transition duration-150">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Image src="images/guides.svg" alt="" width={24} height={24} className="mt-1" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-900">Guides</h4>
                      <p className="mt-1 text-sm text-gray-600">Learn the insider secrets to creating successful web design &amp; app projects.</p>
                    </div>
                  </div>
                </a>
                <a href="/products" className="block p-3 rounded-lg hover:bg-gray-50 transition duration-150">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Image src="images/products.svg" alt="" width={24} height={24} className="mt-1" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-900">Products</h4>
                      <p className="mt-1 text-sm text-gray-600">Become a Growth Design Strategist and learn how to create high-performing websites.</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition duration-150">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <div className="flex items-center">
                        <h4 className="font-semibold text-gray-900">Newsletter</h4>
                        <span className="ml-2 text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-2 py-0.5">(Coming Soon)</span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">Join marketers & entrepreneurs learning to design better businesses & products.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </nav>
          
          {/* Call to action and contact */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://www.careers.growmodo.com/" target="_blank" className="text-gray-700 hover:text-gray-900 font-medium whitespace-nowrap">Contact Us</a>
            <a href="/call" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-150 whitespace-nowrap">Book a Call</a>
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
        className={`lg:hidden ${menuOpen ? 'fixed' : 'hidden'} top-[72px] left-0 right-0 bottom-0 bg-white overflow-y-auto z-40`}
        style={{ height: menuOpen ? 'calc(100vh - 72px)' : '0' }}
      >
        <div className="px-4 py-5 space-y-5 divide-y divide-gray-200">
          <div className="space-y-4">
            <a href="#why-us" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setMenuOpen(false)}>Why Us</a>
            <a href="#whats-included" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setMenuOpen(false)}>What&apos;s included?</a>
            <a href="#showcase" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setMenuOpen(false)}>Showcase</a>
            <a href="#blog" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="/pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setMenuOpen(false)}>Pricing</a>
            
            {/* Resources accordion in mobile */}
            <details className="group">
              <summary className="list-none flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md cursor-pointer">
                Resources
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pt-2 pb-3 space-y-3">
                <a href="/guides" className="flex p-2 rounded-md hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Image src="images/guides.svg" alt="" width={20} height={20} className="mt-1" />
                    </div>
                    <div className="ml-3 text-sm">
                      <p className="font-medium text-gray-900">Guides</p>
                      <p className="text-gray-500">Learn the insider secrets to creating successful web design.</p>
                    </div>
                  </div>
                </a>
                <a href="/products" className="flex p-2 rounded-md hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Image src="images/products.svg" alt="" width={20} height={20} className="mt-1" />
                    </div>
                    <div className="ml-3 text-sm">
                      <p className="font-medium text-gray-900">Products</p>
                      <p className="text-gray-500">Become a Growth Design Strategist.</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="flex p-2 rounded-md hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 0 011 1v5h5a1 0 110 2h-5v5a1 0 11-2 0v-5H4a1 0 110-2h5V4a1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3 text-sm">
                      <div className="flex items-center">
                        <p className="font-medium text-gray-900">Newsletter</p>
                        <span className="ml-2 text-xs font-medium text-gray-500">(Coming Soon)</span>
                      </div>
                      <p className="text-gray-500">Join marketers & entrepreneurs.</p>
                    </div>
                  </div>
                </a>
              </div>
            </details>
          </div>
          
          <div className="pt-5 space-y-4">
            <a href="https://www.careers.growmodo.com/" target="_blank" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setMenuOpen(false)}>Contact Us</a>
            <a href="/call" className="block w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-center font-medium rounded-lg transition duration-150" onClick={() => setMenuOpen(false)}>Book a Call</a>
          </div>
        </div>
      </div>
    
    </header>
  );
}