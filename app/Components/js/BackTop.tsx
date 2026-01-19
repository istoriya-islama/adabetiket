'use client';
import { IoIosArrowDropup } from "react-icons/io";
import { useState, useEffect } from 'react';

export default function BackTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 sm:bottom-6 right-3 sm:right-5 p-2 sm:p-3 rounded-full bg-three text-white shadow-lg transition-transform duration-300 hover:scale-110 sm:hover:scale-125 md:hover:scale-130 ${
        isVisible ? 'translate-y-0 translate-x-0 animate-bounce' : 'translate-y-20 sm:translate-y-21 -translate-x-16 sm:-translate-x-20'
      } border-2 border-solid border-white`}
    >
      <IoIosArrowDropup size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
    </button>
  );
}