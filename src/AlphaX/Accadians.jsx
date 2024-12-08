import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faMinus,
  faPlus,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowRightArrowLeft";

const Accadians = ({ title, content, readmore }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion-item">
      <h1 className="accordion-header" id="flush-headingOne">
        <button
          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded={isOpen}
          aria-controls="flush-collapseOne"
          onClick={toggleAccordion}
        >
          <span
            className="icon"
            style={{ marginLeft: "auto", marginRight: "30px" }}
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faMinus} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </span>
          {title}
        </button>
      </h1>
      <div
        id="flush-collapseOne"
        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body mt-3 p-3 ">
          <h4> {content}</h4>
          <button class="readmore ">
            <a href={readmore}>Read more</a>

            <span>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accadians;
