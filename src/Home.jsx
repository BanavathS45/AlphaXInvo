import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RoutingFile from "./singles/RoutingFile";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import "./css/alphaX.css";
const Home = () => {
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
      <div>
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
              <div
                className="col-md-6 imagePage"
                 
              >
                {/* <img src="./Images/alphaX_1.png" alt="dfsdf" width="100%" /> */}
              </div>
              <div
                className="col-md-6"
                style={{
                  textAlign: "start",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "satrt",
                  justifyContent: "start",
                  alignContent: "start",
                  background: "red",
                }}
              >
                <div class="home_pro" data-aos="flip-right">
                  <h1>Design</h1>
                  <h1>Transfrom</h1>
                  <h1>Accletor</h1>
                  <p>
                    We Revolutionize User Experience Using Behavioural Science.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* Product Heading */}
        <section id="product1" class="section-p1">
          <div className="adminLogin">
            <Link to="/login" title="Admin Login">
              <FontAwesomeIcon icon={faRightToBracket} />
            </Link>
          </div>
          <h2 class="up">Trending Coupons​</h2>
          <div class="pro-container">
            {/* product_1   */}
            <div class="home_pro" data-aos="flip-right">
              <Link
                to="/store/guduchi"
                target="_blank"
                title="Click to View More"
              >
                <Card>
                  <Card.Img
                    variant="top"
                    src="./Images/Home/Guduchi.png"
                    height={"150px"}
                  />

                  <Card.Body>
                    <Card.Title className="text-title">
                      Guduchi Ayurveda{" "}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>

            {/*
        <!-- Product_2 --> */}
            <div class="home_pro" data-aos="flip-right">
              <Link
                to="/store/triggered"
                target="_blank"
                title="Click to View More"
              >
                <Card>
                  <Card.Img
                    variant="top"
                    src="./Images/Home/triggeredbrand1-1024x576.jpg"
                    height={"150px"}
                  />

                  <Card.Body>
                    <Card.Title className="text-title">
                      The triggered Brand{" "}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>

            {/*
        <!-- Product_3 --> */}
            <div class="home_pro" data-aos="flip-right">
              <Link
                to="/store/tattooing"
                target="_blank"
                title="Click to View More"
              >
                <Card>
                  <Card.Img
                    variant="top"
                    src=" /Images/Home/YILONGLOGO-1024x576.png"
                    height={"150px"}
                  />

                  <Card.Body>
                    <Card.Title className="text-title">
                      Yilong Tattooing
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Home;
