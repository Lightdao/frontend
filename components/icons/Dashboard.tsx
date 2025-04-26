import * as React from "react";
import type { SVGProps } from "react";
const SvgDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#1f1f1f"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M520-600v-240h320v240zM120-440v-400h320v400zm400 320v-400h320v400zm-400 0v-240h320v240zm80-400h160v-240H200zm400 320h160v-240H600zm0-480h160v-80H600zM200-200h160v-80H200zm160-80" />
  </svg>
);
export default SvgDashboard;
