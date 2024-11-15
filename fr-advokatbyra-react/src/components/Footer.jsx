import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-primary text-white">
      <div className="flex flex-row justify-between w-[80%] mx-auto py-5">
        <section>
          <h2 className="font-slab">
            Fasitghetsrådgivarna <br />
            Advokatbyrå
          </h2>
          <p className="text-[14px] py-2">Org.nr: 00000000000</p>
          <p>Moms.nr: 0000000000</p>
        </section>
        <section className="flex flex-col">
          <h2 className="font-slab">Sidor</h2>
          <a className="underline text-[14px] pt-2 pb-2" href="#kontakt">
            Kontakt
          </a>
          <a className="underline text-[14px] pt-2 pb-2" href="#omoss">
            Om Oss
          </a>
          <a className="underline text-[14px] pt-2 pb-2" href="#medarbetare">
            Medarbetare
          </a>
          <a className="underline text-[14px] pt-2 pb-2" href="#tjanster">
            Tjänster
          </a>
          <a className="underline text-[14px] pt-2 pb-2" href="#nyheter">
            Nyheter
          </a>
          <a className="underline text-[14px] pt-2 pb-2" href="#policy">
            Integritetspolicy
          </a>
          <a className="underline text-[14px] pt-2 pb-2" href="#cookies">
            Kakor
          </a>
        </section>
        <section>
          <h2 className="font-slab">Om Oss</h2>
          <p className="max-w-40 break-words">
            FR Advokatbyrå erbjuder juridisk expertis med fokus på
            fastighetsrätt och hyresrätt. Vi är här för att ge dig det stöd du
            behöver, oavsett om du är privatperson, hyresvärd eller företag.
          </p>
        </section>
        <section>
          <h2 className="font-slab">Kontakt</h2>
          <div className="flex flex-row items-center">
            <figure className="w-5">
              <img src="public/images/phone-svgrepo-com.svg" alt="phone" />
            </figure>
            <a className="underline pl-1" href="tel:+08000000">
              08 000 000
            </a>
          </div>

          <div className="flex flex-row items-center">
            <figure className="w-5">
              <img src="public/images/mail-svgrepo-com.svg" alt="phone" />
            </figure>
            <a className="underline pl-1" href="mailto:info@fradvokatbyra.se">
              info@fradvokatbyra.se
            </a>
          </div>
        </section>
        <section >
          <h2 className="font-slab">Sociala Medier</h2>
          <div className="flex flex-row justify-evenly py-2">
          <figure className="w-10">
            <img src="public/images/linkedin-rounded-border-svgrepo-com.svg" alt="linkedin" />
          </figure>
          <figure className="w-10">
            <img src="public/images/instagram-svgrepo-com.svg" alt="instagram" />
          </figure>
          <figure className="w-10">
            <img src="public/images/facebook-rounded-border-svgrepo-com.svg" alt="facebook" />
          </figure>
          </div>
     
        </section>
      </div>
      <div className="border-t-2 border-white w-full my-4">
        <p className="text-center pt-5 pb-20">
          © 2024 FR Advokatbyrå. Samtliga rättigheter reserverade.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
