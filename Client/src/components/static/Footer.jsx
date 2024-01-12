import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const year = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <footer className="py-3 ">
          <p className="text-center">
            <i> © {year} Emre Yetiş- Tüm Hakları Saklıdır.</i>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
