import React, { useState } from "react";
import RoutingFile from "./singles/RoutingFile.jsx";
import { Allstore } from "./JSON/Allstore.jsx";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import axios from "axios";

const Store = () => {
  // Store()
  const [products, setProducts] = useState(Allstore);
  const [searchVal, setSearchVal] = useState("");
  const [found, setfound] = useState(false);
  // AOS link
  useEffect(() => {
    AOS.init({ duration: 2000 });
    // axios.get("http://localhost:4000/companysData").then((res) => {
    //   // setProducts(res.data);
    // });
  }, []);
  console.log(products);
  const bar = document.getElementById("bar");
  const nav = document.getElementById("navbar");
  const close1 = document.getElementById("close");
  if (bar) {
    bar.addEventListener("click", () => {
      nav.classList.add("active");
    });
  }
  if (close1) {
    close1.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }
  console.log(Allstore);
  // Serach Logic
  function filterData() {
    if (searchVal === "") {
      setProducts(products);
      return;
    }
    const filterBySearch = Allstore.filter((item) => {
      if (item.title.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }
    });
    // ----------item Not Found Logic------------
    if (filterBySearch == false) {
      setfound("Items are Not Found", true);
    } else if (filterBySearch) {
      setfound(false);
    }
    setProducts(filterBySearch);
  }

  return (
    <div>
      {/* -------------Header And NavBar--------- */}
      <RoutingFile />

      {/* // <!-- Main Content --> */}
      <div className="mainContent">
        <section id="hero-page">
          <h2>#AllStore</h2>
        </section>
        {/* // <!-- Serach Product Section --> */}
        <section id="serach" class="section-p1 section-m1">
          <div class="rightside">
            <input
              type="search"
              id="searchInput"
              autoFocus
              onChange={(e) => setSearchVal(e.target.value)}
              onKeyUp={filterData}
              placeholder="SEARCH WHAT ARE LOOKING FOR"
            />
            <button class="normal">
              <i class="fa fa-search" aria-hidden="true"></i>{" "}
            </button>
          </div>
        </section>
        <section id="product1" className="section-p1">
          <div className="pro-container">
            {
              //    company Details Loop
              products.map((prData) => {
                return (
                  <div
                    className="pro"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                  >
                    <img src={prData.image} />
                    <div class="dre">
                      <h4>{prData.title}</h4>
                      <Link id="allbtn" to={prData.url} target="_blank">
                        {" "}
                        <button class="normal">More Details </button>
                      </Link>
                      <p style={{ color: "red" }}>{prData.update}</p>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </section>
        {/* --------items Not Found-------------- */}
        <h5 className="text-center">{found}</h5>
      </div>
    </div>
  );
};

export default Store;
