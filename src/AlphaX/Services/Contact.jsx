import React, { useEffect } from "react";
import RoutingFile from "../../singles/RoutingFile";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import RiseLoader from "react-spinners/RingLoader";
import { teal } from "@mui/material/colors";
const Content = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const navigate = useNavigate();
  const handleSerach = () => {
    navigate("/store");
  };

  let locations = [
    {
      title: "Hyderabad Office",
      image: "https://d30y9cdsu7xlg0.cloudfront.net/png/117601-200.png",
      description: "123 Main Street, Suite 101, New York, NY 10001",
      mobile: "+1 234-567-8901",
      phone: "+1 987-654-3210",
      email: "hyderabad.office@example.com",
    },
    {
      title: "Bangalore Office",
      image:
        "https://th.bing.com/th/id/OIP.KvefzHtM-EUvBCGyYCuYYgAAAA?w=318&h=178&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      description: "456 Market Street, Suite 202, San Francisco, CA 94105",
      mobile: "+1 415-123-4567",
      phone: "+1 415-987-6543",
      email: "bangalore.office@example.com",
    },
  ];

  return (
    <>
      <RoutingFile />
      <section
        className="design-section py-5 text-white"
        style={{ background: "#1d3557" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side - Contact Info */}
            <div className="col-lg-6 mb-4">
              <h1 className="fw-bold display-4 mb-4">Let's Talk!</h1>
              <h5 className="fw-bold mb-3">Contact Us</h5>

              <div className="mb-3">
                <a
                  href="mailto:prashanthr803@gmail.com"
                  className="btn btn-primary me-3 px-4 py-2"
                >
                  📧 Send Email
                </a>
                <a
                  href="tel:7842259803"
                  className="btn btn-outline-light px-4 py-2"
                >
                  📞 Call Us
                </a>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="col-lg-6 text-center">
              <img
                src="https://merida.anahuac.mx/hs-fs/hubfs/apreu/Blog/2019%20Blog%20APREU/APREU%20Blog%20-%20Abril%2019/dribbble-shot_6.gif?width=1600&name=dribbble-shot_6.gif"
                alt="Head and bulb"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Right side with the text */}

      <div
        className="cards-container d-flex flex-wrap gap-5 justify-content-start align-items-start"
        style={{ paddingTop: "120px" , paddingBottom:"150px"}}
      >
        {locations.map((e, index) => (
          <div
            className="card-wrapper p-4 shadow rounded"
            style={{
              width: "48%",
              // height: "300px",
              background: "#f8f9fa",
              border: "1px solid #dee2e6",
            }}
            data-aos="fade-up"
            key={index}
          >
            <div className="card-body">
              <img
                width={"15%"}
                height={"70px"}
                src={e.image}
                alt={e.title}
                className="mb-3"
              />
              <h2 className="fw-bold card-title mb-2">{e.title}</h2>
              <h5 className="card-text mt-2 mb-3" style={{ lineHeight: "1.8" }}>
                📍 {e.description}
              </h5>
              <p className="mb-1">
                📞 <strong>Phone:</strong> {e.phone}
              </p>
              <p>
                📱 <strong>Mobile:</strong> {e.mobile}
              </p>
              <p className="mb-1">
                ✉️ <strong>Email:</strong>{" "}
                <a href={`mailto:${e.email}`} className="text-decoration-none">
                  {e.email}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>

      <Footer value={false} />
    </>
  );
};

export default Content;
