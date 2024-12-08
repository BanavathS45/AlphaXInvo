import React from "react";
import { Link } from "react-router-dom";
import RoutingFile from "./singles/RoutingFile";

const Blog = () => {
  return (
    <div>
      {/* -----------Header And NavBar---------- */}
      <RoutingFile />
      {/* <!-- Main Content --> */}
    <div className="mainContent">
      <section id="hero-page" class="blog-header">
        <h2>#All Blogs</h2>
      </section>
      <section id="blog">

        {/* <!-- blog-box-1 --> */}
        <div class="blog-box">
          <div class="blog-img w-100">
            <img src="./Images/Home/main.jpg" alt="" />
          </div>
          <div class="blog-details">
            <h4>
              7 Essential Product For Indoor gardening Experience from
              Sybotanica{" "}
            </h4>
            <p>
              To what extent do you love plants? Maybe you want to make sure
              your plants thrive since you're new to the world of indoor
              gardening. SYBotanica is your one-stop shop for all your plant
              care needs, regardless of skill level. With their wide selection
              of premium soil mixes, components, plant pots, moss, sphagnum
              moss, live moss, houseplant fertilizer, and moss poles, SYBotanica
              provides everything you need to create a flourishing indoor oasis.
            </p>
            <Link to="/Blog/GardeningExperience" class="viewMore">
              View More
            </Link>
          </div>
        </div>
        
        {/* <!-- blog-box-2 --> */}
        <div class="blog-box">
          <div class="blog-details decluter_details">
            <h4>
              Delcutter and Conqure Chaos 5 joybos Home Organization And Storage
              Solution
            </h4>
            <p>
              A well-organized home is a happy home. When everything has a
              place, it's easier to find what you need and keep your space clean
              and tidy. But with so many different products on the market, it
              can be tough to know where to start.
            </p>

            <Link to="/blog/Delcutter" class="viewMore">
              View More
            </Link>
          </div>
          <div class="blog-img w-100 decluter">
            <img src="./Images/Home/joybos_main1.jpg" alt=""   />
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Blog;
