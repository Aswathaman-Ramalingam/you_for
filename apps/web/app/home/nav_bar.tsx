"use client"

import React, { useState } from 'react';

export default function Navigation() {
  const [activeLink, setActiveLink] = useState('Home');

  const handleClick = (link: React.SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container ml-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          <div className="fixed right-8">
            
            <a
              className={`${
                activeLink === 'Contact' ? 'text-white' : 'text-gray-300'
              } hover:text-white px-3 py-2`}
              href="#"
              onClick={() => handleClick('log out')}
            >
              Log Out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}


