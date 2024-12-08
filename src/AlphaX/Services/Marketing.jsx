import React, { useEffect, useState } from "react";
import RoutingFile from "../../singles/RoutingFile";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer";
import { Modal, Button } from "react-bootstrap";
import AllData from "../../JSON/AllData.json";
import ScrollAnimation from "./ScrollAnimation";

const Marketing = () => {
  // Extracting data from the JSON file
  const data = AllData.branding;
  const digital = AllData.digital;
  const MarketingTools = AllData.MarketingTools;

  // Image URLs
  const arrowImg = "https://cdn-icons-png.flaticon.com/128/545/545682.png";
  const bannerImg = "https://wallpaperaccess.com/full/1510405.jpg";
  const mainbannerImg =
    "https://merida.anahuac.mx/hs-fs/hubfs/apreu/Blog/2019%20Blog%20APREU/APREU%20Blog%20-%20Abril%2019/dribbble-shot_6.gif?width=1600&name=dribbble-shot_6.gif";

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const navigate = useNavigate();

  // State for selected technology and modal visibility
  const [selectedTech, setSelectedTech] = useState("");
  const [show, setShow] = useState(false);

  // Open modal with selected technology details
  const handleShow = (tech) => {
    setSelectedTech(tech);
    setShow(true);
  };

  // Close modal
  const handleClose = () => setShow(false);

  return (
    <>
      {/* Balls following the scroll */}
      <ScrollAnimation />
      {/* Navigation Section */}
      <RoutingFile />

      {/* Main Banner Section */}
      <section className="design-section">
        <div className="design-container">
          <div className="row">
            {/* Left Side Image */}
            <div className="col-6">
              <div className="design-image">
                <img src={mainbannerImg} alt="Head and bulb" />
              </div>
            </div>

            {/* Right Side Content */}
            <div className="col-6">
              <div className="design-text">
                <h4
                  className="section-title"
                  style={{ fontWeight: "bold", color: "brown" }}
                >
                  Neuromarketing
                </h4>

                {/* Breadcrumb Navigation */}
                <nav className="breadcrumb">
                  <div className="row w-100">
                    <div className="col-4">Home</div>
                    <div className="col-4">• Services</div>
                    <div className="col-4">• Neuromarketing</div>
                  </div>
                </nav>

                {/* Headline */}
                <h1 className="fw-bold">
                  Designing brand perceptions with neuromarketing and behavioral
                  science to enhance customer experiences.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offering Section */}
      <div className="section3 d-flex flex-column ps-5 mt-5 mb-5">
        <h1 className="title" style={{ color: "brown" }} data-aos="fade-up">
          What do we serve?
        </h1>

        <h1 className="main-text" data-aos="fade-down">
          End-to-end neuromarketing services and branding strategies of the
          digital world.
        </h1>

        <div
          className="d-flex flex-wrap justify-content-center"
          data-aos="fade-right"
        >
          {Object.keys(digital).map((tech, index) => (
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
      </div>

      {/* Branding Process Section */}
      <h1
        className="section150 text-center fw-bold"
        style={{ color: "brown" }}
        data-aos="fade-up"
      >
        HOW WE DO IT?
      </h1>

      <h3 className="main-text text-center fw-bold" data-aos="fade-up">
        Our unique 5-step branding process to build a future-proof brand.
      </h3>

      {/* Branding Cards */}
      <div
        className="cards-container d-flex flex-wrap gap-5 justify-content-center"
        style={{ paddingTop: "120px" }}
      >
        {data.map((e, index) => (
          <div
            className="card-wrapper col-12 col-md-5"
            key={e.title}
            data-aos="fade-up"
          >
            <div className="card-body">
              <img width="30%" src={e.image} alt={e.title} />
              <h2 className="card-title">{e.title}</h2>
              <h5 className="card-text mt-3" style={{ lineHeight: "1.5" }}>
                {e.description}
              </h5>
            </div>
          </div>
        ))}
      </div>

      {/* Tools We Use Section */}
      <section className="ToolsWeUse" data-aos="fade-up">
        <h1 className="text-center fw-bold" style={{ color: "brown" }}>
          Tools We Use
        </h1>
        <div className="container">
          <div className="row justify-content-center">
            {MarketingTools.map((eachimg, index) => (
              <div key={index} className="col-3 p-5 mx-4 my-2 border">
                <img width="90%" src={eachimg.toolImg} alt={eachimg.toolImg} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TravelXP Section */}
      <section>
        <div className="travelxp-container section150 ms-5" data-aos="fade-up">
          <h1 className="heading" style={{ color: "brown" }}>
            Marketing
          </h1>
          <div className="image-banner">
            <img src={bannerImg} alt="Travelxp Banner" className="banner-img" />
          </div>
          <div className="list-section text-start mt-3">
            <h2>Travelxp</h2>
            <p>
              Created great experience for clients looking to book holidays.
            </p>
            <ul className="platform">
              <li>UI-UX</li>
              <li>Web</li>
              <li>Mobile</li>
              <li>Branding</li>
            </ul>
          </div>
        </div>
      </section>
      {/*  Other services */}
      <section>
        <div className="morecards ms-5 my-5 section150 ">
          <div className="title">
            <h1 className="heading text-center" style={{ color: "brown" }}>
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
                <Link class="card" to="/marketing">
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
        <Modal.Body>{digital[selectedTech]}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Marketing;
