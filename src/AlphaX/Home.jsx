import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RoutingFile from "../singles/RoutingFile";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import "../css/alphaX.css";
import Accadians from "./Accadians";
import ScrollAnimation from "./Services/ScrollAnimation";

import Techno from "./Techno";
import Footer from "./Footer";

import RingLoader from "react-spinners/RingLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
import RiseLoader from "react-spinners/RiseLoader";
// PacmanLoader

const Home = () => {
  let [loading, setLoading] = useState(true);
  // AOS Link
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const navigate = useNavigate();
  const handleSerach = () => {
    navigate("/store");
  };
  return (
    // Maintitle animation
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div style={{ overflowX: "hidden" }}>
        {/* Balls following the scroll */}
        <ScrollAnimation />
        {/* Header and Navbar */}
        <RoutingFile />

        {/* <section id="serachBar" class="section-p1 section-m1">
          <input
            type="search"
            id="searchInput1"
            onFocusCapture={handleSerach}
            placeholder="SEARCH WHAT ARE LOOKING FOR"
          />
        </section> */}

        {/*
        
    <!-- Main Content --> */}
        <div className="container">
          <section id="hero" className="mainContent">
            {/* <h1>
            <Typewriter
              options={{
                autoStart: true,
                loop: 1,
                delay: 50,
                strings: ["CouponsGoPro"],
              }}
            />
            ​
          </h1> */}

            <section className="designPage">
              <div className="row">
                <div className="col-md-6 imagePage" data-aos="fade-right">
                  {/* <h6>Company Logo</h6> */}
                  <img
                    src="https://i.gifer.com/origin/46/462c6f5f67c13830cd9fcdbfc7b55ded.gif"
                    width="80%"
                    alt="df"
                  />
                </div>
                <div className="col-md-6 design">
                  <div class="home_pro" data-aos="fade-up">
                    <h1>Design</h1>
                    <h1>Transform</h1>
                    <h1>Accelerate</h1>
                    <p data-aos="fade-left">
                      We Revolutionize User Experience <br /> Using Behavioural
                      Science.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </section>
          {/* Product Heading */}
          <section
            id="section_1"
            class="section-p1 global_section"
            data-aos="fade-up"
          >
            <h1 class="up">
              We are a global creative agency that combines design expertise
              with technology and intelligence.​
            </h1>
            <div className="banner"></div>
          </section>
          <div className="technology">
            <section class="techno" data-aos="fade-up">
              <div className="row">
                <div className="col-6">
                  <div className="design_block">
                    <div className="row">
                      <div className="col-2 mx-3">
                        <div className="circle red-circle">
                          <div className="innercircle "></div>
                        </div>
                      </div>
                      <div className="col-8 mt-2">
                        <h1>Design</h1>
                      </div>
                    </div>
                    <ul>
                      <li>UI Design</li>
                      <li>UX Design</li>
                      <li>UX Consultancy</li>
                      <li>Design System</li>
                      <li>Animation</li>
                      <li>Illustration</li>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div className="design_image" data-aos="fade-up-left">
                    {/* <img
                      src="https://media.giphy.com/media/xTiTnBU2WuCu6TGewE/giphy.gif"
                      alt="Design"
                    /> */}
                    <RingLoader
                      color="red"
                      size={150}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                    {/* <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/fVrIk8X3jWI?si=D5rr5Huv6zgHdkrj"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      // allowfullscreen
                    ></iframe> */}
                    {/* <video controls autoPlay src="../../videos/vi_1.mp4">ff</video> */}
                  </div>
                </div>
              </div>

              {/* <Techno/> */}
            </section>
            <section class="techno" data-aos="fade-up">
              <div className="row">
                <div className="col-6">
                  <div className="design_block">
                    <div className="row">
                      <div className="col-2 mx-3">
                        <div className="circle green-circle">
                          <div className="innercircle "></div>
                        </div>
                      </div>
                      <div className="col-8 mt-2">
                        <h1>Technology</h1>
                      </div>
                    </div>
                    <ul>
                      <li>Web Design</li>
                      <li>Softwares</li>
                      <li>Mobile Apps</li>
                      <li>Web Apps</li>
                      <li>Front-End</li>
                      <li>Back-End</li>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div className="design_image" data-aos="fade-up-left">
                    {/* <img
                      src="https://giffiles.alphacoders.com/419/4193.gif"
                      alt="jhkjhkl"
                    /> */}
                    <PacmanLoader
                      color="green"
                      size={70}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </div>
                </div>
              </div>

              {/* <Techno/> */}
            </section>
            <section class="techno" data-aos="fade-up">
              <div className="row">
                <div className="col-6">
                  <div className="design_block">
                    <div className="row">
                      <div className="col-2 mx-3">
                        <div className="circle blue-circle">
                          <div className="innercircle "></div>
                        </div>
                      </div>
                      <div className="col-8 mt-2">
                        <h1>Business</h1>
                      </div>
                    </div>
                    <ul>
                      <li>Branding</li>
                      <li>Brand Name</li>
                      <li>Brand Guidelines</li>
                      <li>Strategy</li>
                      <li>Digital Marketing</li>
                      <li>S.E.O</li>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div className="design_image" data-aos="fade-up-left">
                    {/* <img
                      src="https://media1.tenor.com/images/1bd7f755e6653314da9f313c901d747c/tenor.gif?itemid=11010157"
                      alt="jhkjhkl"
                    /> */}
                    <RiseLoader
                      color="blue"
                      size={50}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </div>
                </div>
              </div>

              {/* <Techno/> */}
            </section>
          </div>
          <section className="accdians">
            <div className="row">
              <div className="col-6">
                {/* =================== Accadians_1================*/}
                <Accadians
                  title={"How To Enhance Motivation for Better Business Leads?"}
                  content={
                    " Read how businessmen must use UX design and enhancement of motivation for better business leads. Reveal the secret now!"
                  }
                  readmore={"www.google.com"}
                />
                {/* =================== Accadians_2================*/}

                <Accadians
                  title={"7 Ways Neuromarketing Impact Marketing Campaign"}
                  content={
                    "Follow these 7 Neuromarketing ways and measures to create an astonishing impact in your upcoming marketing campaign. Read now!"
                  }
                  readmore={"www.google.com"}
                />
                {/* =================== Accadians_3================*/}

                <Accadians
                  title={"Can Good Design Grow Your Business And Customers?"}
                  content={
                    "Learn how to grow your business and customers to generate huge profits and create awareness for your brand. Best way to grow your business in 2020."
                  }
                  readmore={"www.google.com"}
                />
              </div>
              <div className="col-6">
                <div className="design_image" data-aos="zoom-in-up">
                  <img
                    src="https://th.bing.com/th/id/OIP.14wEUWaBPPcTMwkYc4vNpgHaE8?rs=1&pid=ImgDetMain"
                    width="80%"
                    alt="df"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer value={true} />
      </div>
    </motion.div>
  );
};

export default Home;
