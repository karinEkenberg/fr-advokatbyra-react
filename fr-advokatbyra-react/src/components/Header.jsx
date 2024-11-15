import React, { useState, useEffect, useRef } from "react";
import MobileMenu from "./MobileMenu";
import Tjanster from "./Tjanster";
import Logo from "./Logo";
import Arrowdown from "./Arrowdown";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="bg-primary bg-opacity-85 sticky top-0 flex h-16 mx-auto justify-evenly items-center z-20 w-full">
        <Logo></Logo>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nav className="hidden md:flex ">
          <ul className="flex text-white justify-evenly w-full py-5 text-[18px]">
            <li className="mx-4">
              <a href="#home">Hem</a>
            </li>
            <li className="relative mx-4" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center focus:outline-none"
              >
                Tjänster
                <span className="ml-1">
                  <Arrowdown></Arrowdown>
                </span>
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-40 bg-primary bg-opacity-85 text-white rounded shadow-lg">
                  <li className="px-4 py-2 hover:bg-primary ">
                    <a href="#privat">Privatperson</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-primary">
                    <a href="#hyresvard">Hyresvärd</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-primary">
                    <a href="#foretag">Företag</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="mx-4">
              <a href="#medarbetare">Medarbetare</a>
            </li>
            <li className="mx-4">
              <a href="#nyheter">Nyheter</a>
            </li>
            <li className="mx-4">
              <a href="#about">Om oss</a>
            </li>
            <li className="mx-4">
              <a href="#kontakt">Kontakta oss</a>
            </li>
          </ul>
        </nav>
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </header>
    </div>
  );
}

export default Header;
