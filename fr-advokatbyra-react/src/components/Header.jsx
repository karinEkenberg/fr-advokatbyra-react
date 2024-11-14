import React, { useState, useEffect, useRef } from "react";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
      <header className="bg-primary bg-opacity-85 sticky flex h-full mx-auto justify-evenly py-5">
        <figure>
          <img className="h-12" src="images/fr-logo.webp" alt="favicon" />
        </figure>
        <nav className="py-5">
          <ul className="flex text-white justify-evenly w-full font-semibold">
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
                  <figure>
                    <img
                      className="h-5"
                      src="images/arrow-down-svgrepo-com.svg"
                      alt="arrow down"
                    />
                  </figure>
                </span>
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-40 bg-primary bg-opacity-85 text-white rounded shadow-lg">
                  <li className="px-4 py-2 hover:bg-primary">
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
      </header>
    </div>
  );
}

export default Header;