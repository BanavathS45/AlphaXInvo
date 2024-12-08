import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useDarkMode from "../AlphaX/THeme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "../AlphaX/Services/design.css";
import {
  faSun,
  faMoon,
  faChevronDown,
  faChevronUp,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import AllData from "../JSON/AllData.json";
const RoutingFile = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [showDropdownAbout, setShowDropdownAbout] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const routing = AllData.routing;
  const routingAbout = AllData.routingAbout;

  const handleBar = () => {
    setIsMobileMenuOpen(true); // Open mobile menu
  };

  const handleCancel = () => {
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div>
      <div>
        <section id="header">
          {/* Logo Section */}
          <Link to="/" className="logo">
            <p>
              Alpha <span>X</span> Innovations
            </p>
          </Link>

          {/* Nav Bar Section */}
          <div className="dropdown-container " style={{width:"600px"}}>
            <ul id="navbar" className="w-100">
              <li className="w-100">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="w-100">
                <NavLink
                  to="/design"
                  onMouseEnter={() => setShowDropdown(!showDropdown)}
                >
                  Services
                </NavLink>
                {/* Dot and down arrow toggle */}
                <span
                  className="dot-toggle"
                  onMouseEnter={() => setShowDropdown(!showDropdown)}
                >
                  <FontAwesomeIcon
                    icon={!showDropdown ? faCircle : faChevronDown}
                    className="down-arrow"
                  />
                </span>
              </li>
              <li className="w-100">
                <NavLink
                  to="/about"
                  onMouseEnter={() => setShowDropdownAbout(!showDropdownAbout)}
                >
                  About
                </NavLink>
                {/* Dot and down arrow toggle */}
                <span
                  className="dot-toggle"
                  onMouseEnter={() => setShowDropdownAbout(!showDropdownAbout)}
                >
                  <FontAwesomeIcon
                    icon={!showDropdownAbout ? faCircle : faChevronDown}
                    className="down-arrow"
                  />
                </span>
              </li>
              <li className="w-100">
                <NavLink to="/contact">Contact</NavLink>
              </li>

              {/* Dark mode toggle */}
              <div className="theme-toggle-button" onClick={toggleDarkMode}>
                {darkMode ? (
                  <FontAwesomeIcon icon={faMoon} className="fasun" />
                ) : (
                  <FontAwesomeIcon icon={faSun} className="fasun" />
                )}
              </div>

              {/* Cancel Button */}
              <Link to="#" id="close" onClick={handleCancel}>
                <i className="fa fa-times"></i>
              </Link>
            </ul>
          </div>

          {/* Mobile Menu Version */}
          <div id="mobile">
            <i
              id="bar"
              className="fa fa-bars"
              title="Menu"
              onClick={handleBar}
            ></i>
          </div>
        </section>
      </div>
      {showDropdown && (
        <section className="w-100  morecards3">
          <div className="morecards  ">
            <div className="row justify-content-center">
              {routing.map((each, index) => (
                <div className="col-3">
                  <div>
                    <Link to={each.path}>
                      <div class="card">
                        <div class="card-body tech  ">
                          <h1>{each.title}</h1>
                          <div className="row justify-content-between">
                            <div className="col-8">
                              <p>{each.description}</p>
                            </div>
                            <div className="col-2 ">
                              <img src={each.image} alt="" width={"100%"} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {showDropdownAbout && (
        <section className="w-100  morecards3">
          <div className="morecards  ">
            <div className="row justify-content-center">
              {routingAbout.map((each, index) => (
                <div className="col-3">
                  <div>
                    <Link to={each.path}>
                      <div class="card">
                        <div class="card-body tech  ">
                          <h1>{each.title}</h1>
                          <div className="row justify-content-between">
                            <div className="col-8">
                              <p>{each.description}</p>
                            </div>
                            <div className="col-2 ">
                              <img src={each.image} alt="" width={"100%"} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default RoutingFile;
