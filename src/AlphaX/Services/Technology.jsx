import React, { useEffect, useState } from "react";
import RoutingFile from "../../singles/RoutingFile";
import { Link } from "react-router-dom";
import AOS from "aos"; // Animation on scroll library
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer"; // Footer component
import RiseLoader from "react-spinners/RingLoader"; // Loader component
import ScrollAnimation from "./ScrollAnimation";

import { Modal, Button } from "react-bootstrap"; // Modal and Button from React Bootstrap
import AllData from "../../JSON/AllData.json"; // Data from a JSON file
import "./Technologies.css"; // Importing the CSS file for styling

const Technology = () => {
  // State to manage selected technology for the modal
  const [selectedTech, setSelectedTech] = useState("");
  const [show, setShow] = useState(false); // State to manage modal visibility

  // Handle opening the modal and setting the selected technology
  const handleShow = (tech) => {
    console.log(tech);
    setSelectedTech(tech);
    setShow(true);
  };

  // Image URLs used in the page
  const arrowImg = "https://cdn-icons-png.flaticon.com/128/545/545682.png";
  const bannerImg = "https://wallpaperaccess.com/full/1510405.jpg";
  const mainbannerImg =
    "https://merida.anahuac.mx/hs-fs/hubfs/apreu/Blog/2019%20Blog%20APREU/APREU%20Blog%20-%20Abril%2019/dribbble-shot_6.gif?width=1600&name=dribbble-shot_6.gif";

  // Function to close the modal
  const handleClose = () => setShow(false);

  // Initialize AOS (Animation on Scroll) on component mount
  useEffect(() => {
    AOS.init({ duration: 2000 });

  }, []);

  const navigate = useNavigate();

  // Extracting data from JSON file
  const data = AllData.effort;
  const techDetails = AllData.techDetails;
  const MobileTech = AllData.MobileTech;
  const technoloyTools = AllData.technoloyTools;

  return (
    <>
      {/* Balls following the scroll */}
      <ScrollAnimation />

      {/* Routing File for navigation */}
      <RoutingFile />

      {/* Loading section with a spinner */}
      <section className="design-section w-100">
        <div className="design-container d-flex justify-content-end w-100">
          <RiseLoader
            color="blue"
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </section>

      {/* Section with the main heading and breadcrumbs */}
      <section className="design-section" data-aos="fade-up">
        <div className="design-container">
          <div className="row">
            <div className="col-12">
              <div className="design-text">
                <h4
                  className="section-title "
                  style={{ fontWeight: "bold", color: "teal" }}
                >
                  Technogy
                </h4>
                <nav className="breadcrumb ">
                  <div className="row w-100">
                    <div className="col-4">
                      <span>Home</span>
                    </div>
                    <div className="col-4">
                      <span> •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Services</span>
                    </div>
                    <div className="col-4 ">
                      <span>
                        {" "}
                        •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Technology Services
                      </span>
                    </div>
                  </div>
                </nav>
                <h1 className="main-text ">Decoding the power of coding</h1>
                <h2 style={{ fontWeight: "bold" }} className="mt-4">
                  We design to empower human experiences.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section describing the services offered */}
      <div className="section3  d-flex flex-column justify-content-start align-content-start align-items-start w-100   ">
        <div
          className="title ps-5"
          data-aos="fade-up"
          style={{ color: "teal" }}
        >
          What do we serve ?
        </div>

        {/* Description of technology services */}
        <div className="ps-5 mt-5 mb-5 " data-aos="fade-down">
          <h1 className="main-text">
            Comprehensive technology services that integrate digital
            craftsmanship and business goals.
          </h1>
        </div>

        {/* Web Technologies Section */}
        <div className="ps-5 mt-5 mb-5 " data-aos="fade-up">
          <h1
            className=""
            style={{ color: "teal", fontWeight: "bold", fontSize: "40px" }}
          >
            Web
          </h1>
        </div>

        {/* Displaying Web Technologies */}
        <div
          className="w-100 ms-5 d-flex flex-wrap justify-content-center"
          data-aos="fade-right"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {Object.keys(techDetails).map((tech, index) => (
            <div className="col-12 col-md-4 technologies" key={index}>
              <ul className="list-unstyled">
                <li>
                  <button
                    className="tech-link mb-4"
                    onClick={() => handleShow(tech)}
                  >
                    <h2>{tech}</h2>
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Technologies Section */}
        <div className="ps-5 mt-5 mb-5 " data-aos="fade-up">
          <h1
            className=""
            style={{ color: "teal", fontWeight: "bold", fontSize: "40px" }}
          >
            Mobile Apps
          </h1>
        </div>

        {/* Displaying Mobile Technologies */}
        <div
          className="w-100 ms-5 d-flex flex-wrap justify-content-center"
          data-aos="fade-right"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {Object.keys(MobileTech).map((mobile, index) => (
            <div className="col-12 col-md-4 technologies" key={index}>
              <ul className="list-unstyled">
                <li>
                  <button
                    className="tech-link mb-4"
                    onClick={() => handleShow(mobile)}
                  >
                    <h2>{mobile}</h2>
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Card Section */}
      </div>

      {/* Section explaining the process */}
      <div
        className="title section150 ms-5 mt-5 d-flex justify-content-center"
        data-aos="fade-up"
      >
        <h1 className=" " style={{ color: "teal", fontWeight: "bold" }}>
          HOW WE DO IT ?
        </h1>
      </div>
      <h3
        className="title section150 ms-5 mt-5 d-flex justify-content-center"
        data-aos="fade-up"
        style={{ fontWeight: "bold" }}
      >
        Going the extra mile with an extra bit of effort at every step.
      </h3>
      <div
        className="cards-container d-flex flex-wrap gap-5 justify-content-start align-items-start"
        style={{ paddingTop: "120px" }}
      >
        {data.map((e) => {
          return (
            <div
              className="card-wrapper"
              style={{ width: "48%" }} // Adjusting width to 48% for two columns with some gap
              data-aos="fade-up"
              key={e.title}
            >
              <div className="card-body ms-5">
                <h2 className="card-title">{e.title}</h2>
                <h5 className="card-text mt-3 " style={{ lineHeight: "1.5" }}>
                  {e.description}
                </h5>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tools We Use Section */}
      <section className="ToolsWeUse" data-aos="fade-up">
        <h1 className="text-center my-5 fw-bold" style={{ color: "brown" }}>
          Tools We Use
        </h1>
        <div className="container">
          <div className="row justify-content-center">
            {technoloyTools.map((eachimg, index) => (
              <div key={index} className="col-3 p-5 mx-4 my-2 border">
                <img
                  width={"90%"}
                  src={eachimg.toolImg}
                  alt={eachimg.toolImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travelxp Section */}
      <section>
        <div className="travelxp-container section150 ms-5 " data-aos="fade-up">
          <h1 className="heading" style={{ color: "teal" }}>
            Technology
          </h1>
          <div className="image-banner">
            <img src={bannerImg} alt="Travelxp Banner" className="banner-img" />
          </div>
          <div className="list-section text-start mt-3">
            <h2>Travelxp</h2>
            <div className="content-section">
              <p>
                Created great experience for clients looking to book holidays.
              </p>
            </div>
            <ul className="platform " style={{ width: "120px" }}>
              <li>UI-UX</li>
              <li>Web</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Other services section with links */}
      <section>
        <div className="morecards ms-5 my-5 section150 ">
          <div className="title">
            <h1 className="heading text-center" style={{ color: "teal" }}>
              Other services
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-5">
              <div>
                <Link class="card" to="/service">
                  <div class="card-body tech">
                    <h1> Design.</h1>
                    <div className="row justify-content-between">
                      <div className="col-8">
                        <p> Leverage the power of code.</p>
                      </div>
                      <div className="col-2 ">
                        <img src={arrowImg} alt="" width={"50%"} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* markting */}
            <div className="col-5">
              <div>
                <Link class="card" to="d/marketing">
                  <div class="card-body marketing">
                    <h1> Marketing.</h1>
                    <div className="row justify-content-between">
                      <div className="col-8">
                        <p> Creative strategies for brands.</p>
                      </div>
                      <div className="col-2 ">
                        <img src={arrowImg} alt="" width={"50%"} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer value={true} />

      {/* Modal Section */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedTech}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {techDetails[selectedTech]
            ? techDetails[selectedTech]
            : MobileTech[selectedTech]}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Technology;
