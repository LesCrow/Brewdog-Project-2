import React from "react";
import LegalNotices from "../footer/LegalNotices";
import Logo from "../global/Logo";
import NavLinks from "../global/NavLinks";
import NetworkLinks from "../footer/NetworkLinks";
import NewsletterInput from "../footer/NewsletterInput";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center p-5 bg-navBlue w-full h-354 relative z-50">
      <Logo />
      <NewsletterInput />
      <NavLinks />
      <NetworkLinks />
      <LegalNotices />
    </div>
  );
}

export default Footer;
