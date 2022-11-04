import React from "react";
import LegalNotices from "./LegalNotices";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NetworkLinks from "./NetworkLinks";
import NewsletterInput from "./NewsletterInput";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center p-5 bg-navBlue w-full  h-354">
      <Logo />
      <NewsletterInput />
      <NavLinks />
      <NetworkLinks />
      <LegalNotices />
    </div>
  );
}

export default Footer;
