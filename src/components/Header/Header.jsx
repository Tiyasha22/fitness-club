import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { Bars } from "../../assets";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
      {!menuOpened && mobile ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem " }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="Home"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
              activeClass="active"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="Programs"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="Reasons"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              to="Plan"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Plan
            </Link>
          </li>
          <li>
            <Link
              to="Testimonials"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
