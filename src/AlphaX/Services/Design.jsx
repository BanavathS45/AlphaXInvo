import React, { useEffect, useState } from "react";
import RoutingFile from "../../singles/RoutingFile";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import AllData from "../../JSON/AllData.json"; // Importing data from a JSON file

import ScrollAnimation from "./ScrollAnimation";

const Design = () => {
  // Initialize AOS (Animate On Scroll) library when the component mounts
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const navigate = useNavigate();

  // Image URLs used in the page
  const arrowImg = "https://cdn-icons-png.flaticon.com/128/545/545682.png";
  const bannerImg = "https://wallpaperaccess.com/full/1510405.jpg";
  const mainbannerImg =
    "https://cdn.dribbble.com/users/364593/screenshots/6244004/preview.gif";

  const designTools = AllData.designTools; // Design tools data from JSON
  const howwedo = AllData.howwedo; // How We Do It section data

  return (
    <>
      {/* Balls following the scroll */}
      <ScrollAnimation />

      {/* React Router outlet for nested routes */}
      <Outlet />

      {/* Routing component */}
      <RoutingFile />

      {/* Design Section - Header */}
      <section className="design-section ">
        <div className="design-container">
          <div className="row">
            {/* Left side with an image */}
            <div className="col-6">
              <div className="design-image">
                <img src={mainbannerImg} alt="Head and bulb" />
              </div>
            </div>

            {/* Right side with text content */}
            <div className="col-6">
              <div className="design-text">
                <h4 className="section-title" style={{ fontWeight: "bold" }}>
                  DESIGN
                </h4>

                {/* Breadcrumb Navigation */}
                <nav className="breadcrumb">
                  <div className="row w-100">
                    <div className="col-4">
                      <span>Home</span>
                    </div>
                    <div className="col-4">
                      <span> •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Services</span>
                    </div>
                    <div className="col-4">
                      <span> •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Design</span>
                    </div>
                  </div>
                </nav>

                {/* Main Heading */}
                <h1 className="main-text">
                  We create designs to augment User Experiences.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <div className="section3 d-flex flex-column justify-content-center align-content-center align-items-center w-100">
        <div className="title" data-aos="fade-up">
          HOW WE DO IT ?
        </div>
        <div className="title" data-aos="fade-down">
          Leaving no stone unturned at every step.
        </div>

        {/* Cards Section */}
        <div className="cards d-flex flex-lg-wrap justify-content-start gap-5 ms-3 align-content-center align-items-center">
          {howwedo.map((eachCard, index) => (
            <div
              className="card my-2"
              style={{ width: "35rem" }}
              data-aos="fade-right"
              key={index}
            >
              <div className="d-flex justify-content-start ms-5 my-3">
                <img
                  src={eachCard.image}
                  className="card-img-top"
                  alt={eachCard.title}
                  style={{ width: "40%" }}
                />
              </div>

              <div className="card-body">
                <h1 className="card-title">{eachCard.title}</h1>
                <h5 className="card-text">{eachCard.description}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Link */}
      <div className="title ms-5" data-aos="fade-up">
        <a href="#">To know more read our blog</a>
      </div>

      {/* Tools We Use Section */}
      <section className="ToolsWeUse" data-aos="fade-up">
        <h1 className="text-center my-5 fw-bold" style={{ color: "brown" }}>
          Tools We Use
        </h1>
        <div className="container">
          <div className="row justify-content-center">
            {designTools.map((eachimg, index) => (
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
        <div className="travelxp-container section150 ms-5" data-aos="fade-up">
          <h1 className="heading">Design</h1>
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
            <ul className="platform">
              <li>UI-UX</li>
              <li>Web</li>
              <li>Mobile</li>
              <li>Branding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section>
        <div className="morecards ms-5 my-5 section150">
          <div className="title">
            <h1 className="heading text-center">Other services</h1>
          </div>
          <div className="row justify-content-center">
            {/* Technology Card */}
            <div className="col-5">
              <Link className="card" to="/technology">
                <div className="card-body tech">
                  <h1> Technology.</h1>
                  <div className="row justify-content-between">
                    <div className="col-8">
                      <p> Leverage the power of code.</p>
                    </div>
                    <div className="col-2">
                      <img src={arrowImg} alt="Arrow Icon" width={"50%"} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Marketing Card */}
            <div className="col-5">
              <Link className="card" to="/marketing">
                <div className="card-body marketing">
                  <h1> Marketing.</h1>
                  <div className="row justify-content-between">
                    <div className="col-8">
                      <p> Creative strategies for brands.</p>
                    </div>
                    <div className="col-2">
                      <img src={arrowImg} alt="Arrow Icon" width={"50%"} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer value={true} />

      {/* Modal Section */}
      {/* <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedTech}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{digital[selectedTech]}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default Design;
