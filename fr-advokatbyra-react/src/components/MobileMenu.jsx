// MobileMenu.js
import React from "react";

function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`${isOpen ? "block" : "hidden"} md:hidden fixed inset-0 bg-primary bg-opacity-90 z-50`}>
      <ul className="flex flex-col items-center justify-center h-full text-white font-semibold space-y-4">
        <li onClick={onClose}>
          <a href="#home">Hem</a>
        </li>
        <li onClick={onClose}>
          <a href="#tjanster">Tjänster</a>
        </li>
        <li onClick={onClose}>
          <a href="#medarbetare">Medarbetare</a>
        </li>
        <li onClick={onClose}>
          <a href="#nyheter">Nyheter</a>
        </li>
        <li onClick={onClose}>
          <a href="#about">Om oss</a>
        </li>
        <li onClick={onClose}>
          <a href="#kontakt">Kontakta oss</a>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
