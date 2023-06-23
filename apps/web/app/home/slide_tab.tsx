"use client"
import React, { useState } from 'react';

interface SlideItem {
  id: number;
  label: string;
  link: string;
}

export default function VerticalSlideBar(){
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlideItem, setActiveSlideItem] = useState(0);

  const slideItems: SlideItem[] = [
    { id: 0, label: 'Home', link: '/' },
    { id: 1, label: 'About', link: '/about' },
    { id: 2, label: 'Services', link: '/services' },
    { id: 3, label: 'Contact', link: '/contact' },
  ];

  return (
    <div className="fixed -left-16 top-16 bottom-0 flex h-screen w-1/2">
      <div
        className={`w-16 bg-gray-800 text-white overflow-hidden transition-transform duration-300 ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <button
          className="flex items-center justify-center h-16 w-16 bg-gray-900 text-white"
          
        >
          {isOpen ? (
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M6 19L18 12L6 5V19Z" fill="white" />
            </svg>
          ) : (
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6H20V5H4V6ZM4 12H20V11H4V12ZM4 18H20V17H4V18Z"
                fill="white"
              />
            </svg>
          )}
        </button>
      </div>
      
        <nav className=" flex top-0 left-0 bottom-0 w-70 overflow-hidden bg-gray-900 text-white overflow-y-auto">
          <ul className="py-4">
            {slideItems.map((slideItem) => (
              <li
                key={slideItem.id}
                className={`${
                  slideItem.id ? 'bg-blue-500 text-white' : 'text-gray-300'
                } py-2 px-4 hover:bg-blue-500 cursor-pointer`}
                onClick={() => slideItem.id}
              >
                <a href={slideItem.link}>{slideItem.label}</a>
              </li>
            ))}
          </ul>
        </nav>
    
    </div>
  );
};

