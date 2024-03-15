import React, { useState, useEffect } from "react";
import "./style/header-style.css";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../assets/svg/LogoIcon";
import { HamburgerMenuIcon } from "../../assets/svg/HamburgerMenuIcon";
import { IconClose } from "../../assets/svg/IconClose";

const Header = () => {
  const [activeButton, setActiveButton] = useState<string>("");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize(); // Check initial screen width
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (id: string, buttonName: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveButton(buttonName);
      if (isMobile) {
        setShowMenu(false);
      }
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <div className="header_container">
      <div className="header_logo">
        <Link to={"/"} className="link_to_home">
          <LogoIcon />
        </Link>
      </div>

      {isMobile ? (
        <div className="mobile_menu_icon" onClick={toggleMenu}>
          <HamburgerMenuIcon />
        </div>
      ) : (
        <ul className="header_menus">
          <Link to={"/"} className="link_to_home">
            Home
          </Link>
          <li>
            <button
              className={activeButton === "Schulung/Seminare" ? "active" : ""}
              onClick={() =>
                scrollToSection("Schulung/Seminare", "Schulung/Seminare")
              }
            >
              <span className="text_of_section"> Schulung/Seminare</span>
            </button>
          </li>
          <li>
            <button
              className={activeButton === "Mentor-ship" ? "active" : ""}
              onClick={() => scrollToSection("Mentor-ship", "Mentor-ship")}
            >
              <span className="text_of_section">Mentor-ship</span>
            </button>
          </li>
        </ul>
      )}

      {isMobile && showMenu && (
        <div
          className={`mobile_dropdown_container ${showMenu ? "active" : ""}`}
        >
          <button className="close_button" onClick={closeMenu}>
            <IconClose />
          </button>
          <ul className="mobile_dropdown_menu">
            <Link to={"/"} className="link_to_home">
              Home
            </Link>
            <li>
              <button
                className={activeButton === "Schulung/Seminare" ? "active" : ""}
                onClick={() =>
                  scrollToSection("Schulung/Seminare", "Schulung/Seminare")
                }
              >
                <span className="text_of_section"> Schulung/Seminare</span>
              </button>
            </li>
            <li>
              <button
                className={activeButton === "Mentor-ship" ? "active" : ""}
                onClick={() => scrollToSection("Mentor-ship", "Mentor-ship")}
              >
                <span className="text_of_section">Mentor-ship</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
