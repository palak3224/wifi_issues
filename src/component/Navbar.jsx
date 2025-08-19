import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black w-full py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/api/placeholder/200/60" 
            alt="AlphaWizz Technologies Logo" 
            className="h-10"
          />
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-green-400 hover:text-green-300 font-medium">Home</a>
          <a href="/about" className="text-white hover:text-green-300 font-medium">About Us</a>
          <a href="/projects" className="text-white hover:text-green-300 font-medium">Projects</a>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-white hover:text-green-300 font-medium flex items-center">
              Services
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <a href="/services/web-development" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Web Development</a>
                <a href="/services/mobile-apps" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Mobile Apps</a>
                <a href="/services/ui-ux" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">UI/UX Design</a>
              </div>
            </div>
          </div>
          
          <a href="/careers" className="text-white hover:text-green-300 font-medium">Careers</a>
          <a href="/contact" className="text-white hover:text-green-300 font-medium">Contact Us</a>
        </div>
        
        {/* CTA Button and Social Icons */}
        <div className="flex items-center space-x-4">
          <button className="bg-green-400 hover:bg-green-500 text-black font-bold px-6 py-2 rounded-full">
            Pay Now
          </button>
          
          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="text-white hover:text-green-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.7 7.2H14V5.3c0-.9.6-1.2 1-1.2h3.6V0H14C10.5 0 9.6 2.7 9.6 4.5v2.7h-3v4h3V24h4.4V11.2h3l.7-4z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-green-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.2.4-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.2-.1-1.3-.1-1.6-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.2-.4 1.3 0 1.6-.1 4.9-.1M12 0C8.7 0 8.3 0 7.1.1 5.8.2 5 .5 4.3.8c-.8.3-1.5.7-2.1 1.4-.7.7-1.1 1.4-1.4 2.1C.5 5 .2 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.3 2.1.6 2.8.3.8.7 1.5 1.4 2.1.7.7 1.4 1.1 2.1 1.4.7.3 1.5.5 2.8.6 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.1-.3 2.8-.6.8-.3 1.5-.7 2.1-1.4.7-.7 1.1-1.4 1.4-2.1.3-.7.5-1.5.6-2.8.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.1-.6-2.8-.3-.8-.7-1.5-1.4-2.1-.7-.7-1.4-1.1-2.1-1.4C19 .5 18.2.2 16.9.1 15.3 0 14.9 0 12 0z"/>
                <path d="M12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
                <circle cx="18.4" cy="5.6" r="1.4"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-green-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.4 0H2.6C1.2 0 0 1.2 0 2.6v18.8C0 22.8 1.2 24 2.6 24h18.8c1.4 0 2.6-1.2 2.6-2.6V2.6C24 1.2 22.8 0 21.4 0zM7.1 20.5H3.6V9h3.6v11.5zM5.3 7.4c-1.2 0-2.1-.9-2.1-2.1 0-1.2.9-2.1 2.1-2.1 1.2 0 2.1.9 2.1 2.1 0 1.2-.9 2.1-2.1 2.1zm15.2 13.1h-3.6v-5.6c0-1.3 0-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2z"/>
              </svg>
            </a>
          </div>
          
          {/* Menu Icon (for mobile) */}
          <button className="block md:hidden text-white">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;