import React from "react";
import LegalNotices from "./LegalNotices";
import NavLinks from "./NavLinks";
import NetworkLinks from "./NetworkLinks";
import NewsletterInput from "./NewsletterInput";

function Footer() {
  return (
    <div className="flex flex-col p-5 bg-navBlue w-full">
      <NewsletterInput />
      <NavLinks />
      <NetworkLinks />
      <LegalNotices />
    </div>
  );
}

export default Footer;
