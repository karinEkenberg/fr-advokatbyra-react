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
      <div className="flex flex-row justify-between w-[80%] mx-auto py-5">
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
