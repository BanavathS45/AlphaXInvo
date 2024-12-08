import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Modal from "./Modal";

const Footer = ({ value }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Social media icons
  const socialIcons = [
    "https://cdn-icons-png.flaticon.com/128/733/733547.png",
    "https://cdn-icons-png.flaticon.com/128/3256/3256013.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968830.png",
    "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
    "https://cdn-icons-png.flaticon.com/128/3938/3938026.png",
  ];

  // Footer link sections
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Design", path: "/design" },
        { name: "Technology", path: "/technology" },
        { name: "Neuromarketing", path: "/marketing" },
        { name: "Digital Marketing", path: "#" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Team", path: "/team" },
        { name: "Career", path: "/career" },
        { name: "Clients", path: "#" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { name: "Work", path: "#" },
        { name: "Blog", path: "#" },
        { name: "Reach Us", path: "#" },
        { name: "Site Map", path: "#" },
      ],
    },
    {
      title: "Policies",
      links: [
        { name: "Privacy Policy", path: "#" },
        { name: "Terms of Use", path: "#" },
        { name: "Refund Policy", path: "#" },
        { name: "Copyright Policy", path: "#" },
      ],
    },
  ];

  return (
    <>
      {value && (
        <div className="footer">
          <section className="quote">
            <h1>Let’s create a measurable impact on your business.</h1>
            <Modal />
          </section>
        </div>
      )}

      <section className="bottomFooter">
        <div className="row">
          {/* Logo and Social Media */}
          <div className="col-3 footerLogo">
            <img
              src="https://th.bing.com/th/id/OIP.14wEUWaBPPcTMwkYc4vNpgHaE8?rs=1&pid=ImgDetMain"
              width="50%"
              alt="Company Logo"
            />
            <div className="socialMedia">
              {socialIcons.map((icon, index) => (
                <a href="#" key={index} aria-label={`Social icon ${index + 1}`}>
                  <img src={icon} alt={`Social icon ${index}`} width="50%" />
                </a>
              ))}
            </div>
            <div className="address mt-3">
              <p>© AlphaX Innovations. <br /> All rights reserved 2023</p>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div className="col-2 links" key={index}>
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Footer;
