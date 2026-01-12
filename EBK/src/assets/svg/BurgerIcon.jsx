import React, { useEffect, useState } from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={22}
      viewBox="0 0 28 22"
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M1 1h26" />
      <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M1 11h26" />
      <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M1 21h26" />
    </svg>
  );
}


export default SvgComponent;
