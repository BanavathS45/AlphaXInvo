import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCopyToClipboard } from "usehooks-ts";
// import  {webUrl}  from "./Url";
const CoupanCode = (props) => {
  const [save, setSave] = useState(`${props.copytype}`);
  // -------copy url logic
  const [value, copy] = useCopyToClipboard();
  const copyToClipboard = () => {
    copy(props.refCodeUrl);
    setSave("copied");
    setTimeout(() => {
      setSave(save);
    }, 1000);
  };

  const style = {
    width: "98%",
    marginLeft: "auto",
    marginRight: "auto",
  };
  return (
    <div>
      <section className="coupan" style={style}>
        <div className="savetop">
          <h4>
            {props.title} Coupond Code {props.contery}
          </h4>

          {/*
                <!-- save coupon code --> */}
          <button
            className="saved "
            title="Click to copy coupon"
            onClick={copyToClipboard}
          >
            <i className="fa fa-scissors" aria-hidden="true"></i>
            {save}
          </button>
        </div>
        {/*
            <!-- percentage bLock --> */}
        <p id="myArea">{props.percentageTag}</p>

        <div className="codebox">
          {/*
                <!-- url block --> */}

         
            <Link to={props.websiteUrl} target="_blank">
            <button className="normal" id="normal">
              View Website
          </button>
            </Link>

          <div className="review">
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            <span>100% Success</span>
            <i className="fa fa-thumbs-down" aria-hidden="true"></i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoupanCode;
