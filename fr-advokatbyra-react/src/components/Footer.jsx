import React from "react";
import FooterCompanyInfo from "./FooterCompanyInfo";
import FooterSidor from "./FooterSidor";
import FooterOmOss from "./FooterOmOss";
import FooterKontakt from "./FooterKontakt";
import FooterSocialaMedier from "./FooterSocialaMedier";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-primary text-white">
      <div className="flex flex-col md:flex-row justify-between w-[80%] md:w-[90%] mx-auto py-5 md:py-20">
        <FooterCompanyInfo></FooterCompanyInfo>
        <FooterSidor></FooterSidor>
        <FooterOmOss></FooterOmOss>
        <FooterKontakt></FooterKontakt>
        <FooterSocialaMedier></FooterSocialaMedier>
      </div>
      <FooterCopyright></FooterCopyright>
    </footer>
  );
};

export default Footer;
