import React, { useEffect } from "react";
import RoutingFile from "../../singles/RoutingFile";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollAnimation from "./ScrollAnimation";
const Team = () => {
  const arrowImg = "https://cdn-icons-png.flaticon.com/128/545/545682.png";
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      easing: "ease-in-out", // Easing function (optional)
    });
  }, []);

  const data = [
    {
      image:
        "https://img.freepik.com/premium-photo/young-pretty-woman-white-background_343960-31764.jpg",
      name: "Jesika",
      prof: "Marketing Head",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/portrait-business-woman_980226-8965.jpg",
      name: "Mahalaxmi",
      prof: "Administartor",
    },
    {
      image:
        "https://www.pngall.com/wp-content/uploads/9/Male-Entrepreneur-PNG-Picture.png",
      name: "Prashanth",
      prof: "MD",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/smiling-handsome-businessman-isolated-white-background_343960-45156.jpg",
      name: "Prashanth",
      prof: "CEO",
    },
  ];

  return (
    <>
      <div>
        <div className="team-section">
          <RoutingFile />

          <ScrollAnimation />
          <h2 className="team-title" data-aos="fade-up">
            TEAM
          </h2>
          <p className="team-description" data-aos="fade-up">
            We are designers, artists, scientists, <br /> researchers,
            technologists, observers.
            <br />
            In a nutshell, we are Experience Designers <br /> working together.
          </p>
          <div className="team-illustration w-100" data-aos="fade-up">
            {/* Replace the src with your image path */}
            <img
              src="https://thumbs.dreamstime.com/b/ax-logo-letter-design-modern-creative-concept-orange-blue-colors-vector-illustration-215836424.jpg"
              alt="Illustration of a team member waving"
            />
          </div>
        </div>
        <div className="photos" data-aos="fade-up">
          <div className="pic-container">
            {data.map((item, index) => (
              <div className="pic" key={index}>
                <img src={item.image} alt="profile" />
                <h1>{item.name}</h1>
                <h3>{item.prof}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="team-section">
          <h2 className="team-title" data-aos="fade-up">
            TEAM
          </h2>
          <p className="team-description" data-aos="fade-up">
            We believe in "we". <br />
            You'll love working here.
          </p>
        </div>
        <div className="row big_img" data-aos="fade-up">
          <div className="row">
            <div className="col-12 big_img1 ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9qdDRjuJaNrv-KZAdF9A1bZMUY0j3sg2a6Q&"
                alt=""
              />
            </div>
          </div>
          <div className="row twoImg">
            <div className="col-6 big_img2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9qdDRjuJaNrv-KZAdF9A1bZMUY0j3sg2a6Q&s"
                alt=""
              />
            </div>
            <div className="col-6 big_img3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9qdDRjuJaNrv-KZAdF9A1bZMUY0j3sg2a6Q&s"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row big_img" data-aos="fade-up">
          <div className="row">
            <div className="col-12 big_img1 ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTno6Avj_BeSZlvMquzWpbbzfLOTwm6pUgO2g&s"
                alt=""
              />
            </div>
          </div>
          <div className="row twoImg">
            <div className="col-6 big_img2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9qdDRjuJaNrv-KZAdF9A1bZMUY0j3sg2a6Q&s="
                alt=""
              />
            </div>
            <div className="col-6 big_img3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9qdDRjuJaNrv-KZAdF9A1bZMUY0j3sg2a6Q&s"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Other Services Section */}
      <section>
        <div className="morecards ms-5 my-5 section150">
          <div className="title">
            <h1 className="heading text-center">More about us</h1>
          </div>
          <div className="row justify-content-center">
            {/* Technology Card */}
            <div className="col-5">
              <Link className="card" to="/about">
                <div className="card-body tech">
                  <h1> About.</h1>
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

export default Team;
