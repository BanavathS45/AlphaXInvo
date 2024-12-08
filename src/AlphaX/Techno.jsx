import React from "react";
// import "../css/techno.css";
const Techno = () => {
  return (
    <>
      <ol style={{ position: "relative" }}>
        <li style={{ position: "fixed", top: "0", backgroundColor: "white" }}>
          A partridge in a pear tree
        </li>
        <li>Two turtle doves</li>
        <li>Three french hens</li>
        <li>Four calling birds</li>
        <li>Five golden rings</li>
        <li>Six geese-a-laying</li>
        <li>Seven swans a-swimming</li>
        <li>Eight maids a-milking</li>
        <li>Nine ladies dancing</li>
        <li>Ten lords a-leaping</li>
        <li>Eleven pipers piping</li>
        <li>Twelve drummers drumming</li>
      </ol>

      {/* <!-- svg describing a cursor to suggest scrolling --> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-1 -1 22 32"
        width="44"
        height="64"
      >
        <g fill="none" stroke-width="2" stroke="currentColor">
          {/* <!-- describe the offset through a custom property to animate the path to that value (its opposite since it's more entertaining) --> */}
          <path
            style={{ "--offset": "-5" }}
            id="offset"
            d="M 10 8 v 5"
            stroke-linecap="round"
            stroke-dasharray="5"
            stroke-dashoffset="5"
          />
          <rect width="20" height="30" rx="10" />
        </g>
      </svg>
    </>
  );
};

export default Techno;
