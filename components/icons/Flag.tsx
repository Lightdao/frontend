import * as React from "react";
import type { SVGProps } from "react";
const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#1f1f1f"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280zm386-280h134v-240H510l-16-80H280v240h290z" />
  </svg>
);
export default SvgFlag;
