import React from "react";

const SvgSelector = ({ id }) => {
  const svgMap = {
    logout: (
      <svg viewBox="-2 0 26 26">
        <path d="m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"></path>
      </svg>
    ),
    allVacancies: (
      <svg viewBox="0 0 24 24">
        <path d="M19 5v14H5V5zm1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"></path>
      </svg>
    ),
    myVacancies: (
      <svg viewBox="0 0 24 24">
        <g>
          <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H4V5h16z"></path>
          <path d="M19.41 10.42 17.99 9l-3.17 3.17-1.41-1.42L12 12.16 14.82 15zM5 7h5v2H5zm0 4h5v2H5zm0 4h5v2H5z"></path>
        </g>
      </svg>
    ),
    loader: (
      <svg viewBox="0 0 200 200">
        <circle
          fill="#5587DE"
          stroke="#5587DE"
          strokeWidth="11"
          r="15"
          cx="40"
          cy="100"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="1.2"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.4"
          ></animate>
        </circle>
        <circle
          fill="#5587DE"
          stroke="#5587DE"
          strokeWidth="11"
          r="15"
          cx="100"
          cy="100"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="1.2"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.2"
          ></animate>
        </circle>
        <circle
          fill="#5587DE"
          stroke="#5587DE"
          strokeWidth="11"
          r="15"
          cx="160"
          cy="100"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="1.2"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="0"
          ></animate>
        </circle>
      </svg>
    ),
  };

  if (!svgMap.hasOwnProperty(id)) {
    console.warn(`Svg with id "${id}" doesn't exist`);
    return <p>svg</p>;
  }

  return svgMap[id];
};

export default SvgSelector;
