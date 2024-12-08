import React, { useEffect, useState } from "react";
import ScrollAnimation from "./Services/ScrollAnimation";

import RoutingFile from "../singles/RoutingFile";
// import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

import { Link } from "react-router-dom";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ProfileCard from "./Services/ProfileCard";
import "./Services/About.css";

const About = () => {
  const arrowImg = "https://cdn-icons-png.flaticon.com/128/545/545682.png";
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(false);
  const [activeSection, setActiveSection] = useState("vision"); // Default active section is "vision"

  // Function to handle section clicks
  const handleSectionClick = (section) => {
    setActiveSection(section); // Set active section when clicked
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      easing: "ease-in-out", // Easing function (optional)
    });
  }, []);

  // Handle 'Read More' functionality
  const ReadMore = () => {
    setShowMore(true);
    setShowLess(true);
  };

  // Handle 'Read Less' functionality
  const ReadLess = () => {
    setShowMore(false);
    setShowLess(false);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carouselExampleIndicators");
    const currentSlide = document.getElementById("currentSlide");
    const totalSlides = document.getElementById("totalSlides");

    // Ensure these elements are found
    if (currentSlide && totalSlides && carousel) {
      const totalItems = document.querySelectorAll(".carousel-item").length;
      totalSlides.textContent = totalItems;

      // Update current slide on change
      carousel.addEventListener("slide.bs.carousel", (event) => {
        currentSlide.textContent = event.to + 1;
      });
    } else {
      console.error("Carousel or counter elements not found.");
    }
  });

  return (
    <>
      {/* Navigation Section */}
      <RoutingFile />
      {/* Balls following the scroll */}
      <ScrollAnimation />

      <div className="aboutNextPage">
        <div className="aboutNextPageStart">
          <h3>About</h3>
          <div className="aboutNextPageStartImages d-flex align-items-center justify-content-center w-100 position-relative ">
            <img
              data-aos="fade-right"
              src="https://th.bing.com/th/id/R.d49291c1b918a38e31b3bf3e8373fabb?rik=WKJr5wOTPVPSlA&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery2%2fVector-PNG-Images.png&ehk=PfdiYYf7ABslSl6aQMkKf%2boLbIMysRuNLiyNnn%2bX4kM%3d&risl=&pid=ImgRaw&r=0"
              alt="img1"
              className="left-img"
            />

            <h1
              className="main-texta text-center position-absolute w-75"
              data-aos="fade-down"
            >
              We, at Leo9 Studio, apply neuromarketing and behavioral science to
              design, digitize and grow your business.
            </h1>

            <img
              data-aos="fade-left"
              src="https://png.pngtree.com/png-clipart/20230419/original/pngtree-artificial-intelligence-robot-technology-transparent-background-png-image_9068338.png"
              alt="img2"
              className="right-img"
            />
          </div>
        </div>
      </div>

      <div className="aboutNextPageAboutUs mt-5" data-aos="fade-up">
        <h5 data-aos="fade-up">About Us</h5>
        <h3 data-aos="fade-up">
          At the intersection of art, technology and business, we create design
          solutions geared toward business success.
        </h3>
        <h3 data-aos="fade-up">
          Since 2012, we have been global leaders in design technology. Our
          services range from experience designing, identity development,
          product strategy, branding, user experience design, user interface
          design, technology development to digital marketing and SEO.
        </h3>
        {!showMore ? (
          <h5 className="more" onClick={ReadMore} style={{ cursor: "pointer" }}>
            More..
          </h5>
        ) : (
          <h3 data-aos="fade-up">
            Our work has inspired positive business growth for many of our
            clients, including Travel XP, Sony, BMW and P&G to Unilever and
            more. For over eight years, we have designed experiences that honour
            brands; and we are proud of our awards and accolades which are
            testimony to our performance. Today, when a brand's virtual persona
            is imperative to business success, Leo9 strives to provide
            insightful and future-forward solutions designed specifically for
            your brand.
          </h3>
        )}
        {showLess && (
          <h5 className="more" onClick={ReadLess} style={{ cursor: "pointer" }}>
            Less..
          </h5>
        )}
      </div>

      <div
        className="text-center mb-5"
        style={{ fontWeight: "bold", color: "teal" }}
      >
        Our History
      </div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              width={"80%"}
              height={"400px"}
              src="https://th.bing.com/th/id/OIP.POcdrVFluoWnheQCY1_IKgHaEK?pid=ImgDet&w=207&h=116&c=7&dpr=1.5"
              class="d-block w-100"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              width={"80%"}
              height={"400px"}
              src="https://th.bing.com/th/id/OIP.tJAzIB6dBxdG-6KFDmYp1AHaDp?pid=ImgDet&w=207&h=102&c=7&dpr=1.5"
              class="d-block w-100"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              width={"80%"}
              height={"400px"}
              src="https://th.bing.com/th/id/OIP.6Jge37DDDYQ16kYCP7iywgHaEV?pid=ImgDet&w=207&h=120&c=7&dpr=1.5"
              class="d-block w-100"
              alt="Third slide"
            />
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>

        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

        {/* <!-- Carousel Counter --> */}
        <div class="carousel-counter text-center mt-3">
          <span id="currentSlide">1</span> / <span id="totalSlides">3</span>
        </div>
      </div>

      {/* Vision, Mission, and Values Section */}
      <div className="visionClass" data-aos="fade-up">
        <div className="divv1">
          {/* Section Titles */}
          <h1
            className={`vh1 ${activeSection === "vision" ? "active" : ""}`}
            onClick={() => handleSectionClick("vision")}
            style={{ cursor: "pointer" }}
          >
            Vision
          </h1>
          <h1
            className={`mh1 ${activeSection === "mission" ? "active" : ""}`}
            onClick={() => handleSectionClick("mission")}
            style={{ cursor: "pointer" }}
          >
            Mission
          </h1>
          <h1
            className={`vlh1 ${activeSection === "values" ? "active" : ""}`}
            onClick={() => handleSectionClick("values")}
            style={{ cursor: "pointer" }}
          >
            Values
          </h1>
        </div>
        <div className="divv2">
          {/* Conditional Rendering of Content Based on Active Section */}
          {activeSection === "vision" && (
            <h1 className="divv2h" data-aos="fade-up">
              To be the world's best and most trusted human experience design
              company
            </h1>
          )}

          {activeSection === "mission" && (
            <h1 className="divv2hh" data-aos="fade-up">
              To enhance and elevate human interaction
            </h1>
          )}

          {activeSection === "values" && (
            <h1 className="divv2hhh" data-aos="fade-up">
              To pursue excellence through dedicated teamwork
            </h1>
          )}
        </div>
      </div>

      <ProfileCard />

      {/* Other Services Section */}
      <section>
        <div className="morecards ms-5 my-5 section150">
          <div className="title">
            <h1 className="heading text-center">More about us</h1>
          </div>
          <div className="row justify-content-center">
            {/* Team Card */}
            <div className="col-5">
              <Link className="card" to="/team">
                <div className="card-body tech">
                  <h1> Team.</h1>
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

            {/* Career Card */}
            <div className="col-5">
              <Link className="card" to="/career">
                <div className="card-body marketing">
                  <h1> Career.</h1>
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
    </>
  );
};

export default About;
