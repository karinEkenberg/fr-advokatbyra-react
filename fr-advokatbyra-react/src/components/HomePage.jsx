import React from "react";
import SectionWithBackground from "./SectionWithBackground";
import Link from "./Link";

const HomePage = () => {
  return (
    <>
      <SectionWithBackground bgColor="bg-bg" padding="py-10">
        <div className="flex flex-col sm:flex-row mx-auto">
          <div className="max-w-[80%] sm:max-w-[45%] mx-auto pb-5">
            <h2>Välkommen till Fastighetsrådgivarna Advokatbyrå</h2>
            <p>
              Vi erbjuder expertjuridisk rådgivning och representation inom
              fastighetsrätt, skräddarsydd för privatpersoner, hyresvärdar och
              företag. Med över 35 års erfarenhet är vi din pålitliga partner
              när det gäller komplexa juridiska frågor och tvister. Utforska
              våra tjänster för att hitta den hjälp du behöver.
            </p>
          </div>
          <div className="max-w-[80%] sm:max-w-[45%] mx-auto">
            <img className="" src="./images/fr-advokater.jpg" alt="Lawyers" />
          </div>
        </div>
      </SectionWithBackground>
      <SectionWithBackground bgColor="bg-bgsec" padding="py-10">
        <h2 className="text-center pb-5">Vi erbjuder tjänster till</h2>
        <div className="flex flex-col sm:flex-row gap-4 text-center">
          <div className="pb-5">
            <a href="">
              <img
                className="pb-5 w-[80%] sm:w-auto mx-auto"
                src="./images/fr-privatpersoner.jpg"
                alt="signing contract"
              />
            </a>
            <Link href="#privatperson">Privatperson</Link>
          </div>
          <div className="pb-5">
            <a href="">
              <img
                className="pb-5 w-[80%] sm:w-auto mx-auto"
                src="./images/fr-hyresvarden.jpg"
                alt="laptop and men"
              />
            </a>
            <Link href="#hyresvard">Hyresvärd</Link>
          </div>
          <div className="pb-5 w-[80%] sm:w-auto mx-auto">
            <a href="">
              <img
                className="pb-5"
                src="./images/fr-foretag.jpg"
                alt="man and woman high five"
              />
            </a>
            <Link href="#foretag">Företag</Link>
          </div>
        </div>
      </SectionWithBackground>
      <SectionWithBackground bgColor="bg-bg" padding="py-10">
        <h2 className="text-center pb-5">Samarbetspartners</h2>
        <div className="flex flex-col items-center gap-5 sm:flex-row mx-auto justify-evenly">
          <img className="max-h-[50px] max-w-[15%]" src="./images/fr-skb.png" alt="bank icon" />
          <img className="max-h-[50px] max-w-[15%]" src="./images/fr-folkbanken.webp" alt="bank icon" />
          <img className="max-h-[50px] max-w-[15%] " src="./images/fr-byggmastarna.webp" alt="byggmästarna" />
          <img className="max-h-[50px] max-w-[15%]" src="./images/fr-svenska-fastigheter.webp" alt="svenska fastigheter" />
          <img className="max-h-[50px] max-w-[15%]" src="./images/fr-supermaklarna.webp" alt="supermäklarna" />
        </div>
      </SectionWithBackground>
    </>
  );
};

export default HomePage;
