import React from "react";
import "./style/footer-style.css";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../assets/svg/LogoIcon";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_logo">
        <Link to={"/"} className="link_to_home">
          <LogoIcon />
        </Link>
      </div>
      <p className="footer_copyright">Copyright 2023</p>
    </div>
  );
};

export default Footer;
